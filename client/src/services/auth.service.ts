import axios from "axios"

export const logIn = async(username: string, password: string) => {
    const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
    })
    
    const data = await res.json()

    if(data.error) throw new Error(data.error)
    console.log("LOGIN: ", data)
    return data
}


export const getMe = async() => {
    const res = await axios.get("/api/auth/me")
    const data = res.data

    console.log("ME: ", data)
    return data
}

export const SignupService = async (fullname: string, username: string, email: string, password: string) => {
    const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, fullname, email, password})
    })

    const data = await res.json()
    if(data.error) throw new Error(data.error)
    return data
}