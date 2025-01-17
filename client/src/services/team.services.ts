

export const getAllTeamsService = async () => {
    const res = await fetch("/api/teams")
    const data = await res.json()
    if(data.error) throw new Error(data.error)
    return data
}

export const getTeamsByProjectTypeService = async (projectType: string) => {
    const res = await fetch(`/api/teams/getTeamsByProjectType/${projectType}`)
    const data = await res.json()
    if(data.error) throw new Error(data.error)
    return data;
}


export const getTeamsByTextQueryService = async (textQuery: string) => {
    const res = await fetch(`/api/teams/getTeamsByTextQuery/${textQuery}`)
    const data = await res.json()
    if(data.error) throw new Error(data.error)
    console.log("SEARCH: ", data)    
    return data;
}