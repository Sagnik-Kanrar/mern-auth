import { createContext, useEffect, useState, useCallback } from "react"
import axios from "../api/axios"
import { toast } from "react-toastify"

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext()
  
export const AppContextProvider = (props) => {

    const [isLoggedin, setIsLoggedin] = useState(false)
    const [userData, setUserData] = useState(null) // Changed from false to null for clarity

    const getUserData = useCallback(async () => {
        try {
            const {data} = await axios.get(`/api/users/getuser`)
            if(data.success){
                setUserData(data.userData)
            } else {
                setUserData(null)
                setIsLoggedin(false)
                toast.error(data.message)
            }
        } catch (error) {
            console.error('Error fetching user data:', error)
            setUserData(null)
            setIsLoggedin(false)
        }
    }, [])

    const getAuthStatus = useCallback(async () => {
        try {
            const {data} = await axios.get(`/api/auth/is-authenticated`)
            if(data.success){
                setIsLoggedin(true)
                getUserData()
            } else {
                setIsLoggedin(false)
                setUserData(null)
            }
        } catch (error) {
            setIsLoggedin(false)
            setUserData(null)
        }
    }, [getUserData])

    useEffect(() => {
        getAuthStatus();
    }, [getAuthStatus])


    const value = {
        isLoggedin,
        setIsLoggedin,
        userData,
        setUserData,
        getUserData
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
