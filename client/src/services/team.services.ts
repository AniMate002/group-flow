

export const getAllTeamsService = async () => {
    const res = await fetch("/api/teams")
    const data = await res.json()
    if(data.error) throw new Error(data.error)
    return data
}