

export interface ITeam {
    _id?: string,
    team_name: string,
    project_name: string,
    description: string,
    deadline: string,
    messages: Array<IMessage>,
    developers: Array<IUser>,
    admins: Array<IUser>,
    mainImage: string,
    coverImage: string,
    images: Array<string>,
    goals: Array<string>,
    progress: number
    links: Array<{href: string, name: string}>
    votes: Array<Ivote>
}

export interface IUser {
    _id?: string,
    username: string,
    fullname: string,
    email: string,
    info: string,
    password: string,
    profession: string,
    skills: Array<string>,
    teams: Array<ITeam>,
    mainImage: string,
    coverImage: string
}

export interface Ivote {
    _id?: string,
    title: string
    description: string
    user: IUser
    team: ITeam
    options: Array<{text: string, voters: Array<IUser>}>
}

export interface IMessage {
    _id?: string,
    text: string,
    image: string,
    user: IUser
    team: ITeam
}