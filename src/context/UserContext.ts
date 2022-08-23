import { createContext } from 'react'


type User = {
    username: String
}

type UserContextType = {
    user?: User
    login: (username: string) => void
    logout: () => void
}

const UserContext = createContext<UserContextType>({} as UserContextType)
export default UserContext
