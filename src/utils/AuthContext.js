import {useState, useContext, useEffect, createContext} from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        setLoading(false)
    }, [])

    const loginUser = (userInfo) => {}
    const logoutUser = () => {}
    const registerUser = (userInfo) => {}
    const checkuserStatus = () =>{}

    const contextData = {
        user,
        loginUser,
        logoutUser,
        registerUser
    };
    return (
        <AuthContext.Provider value={contextData}>
            {loading ? <p>Loading..</p> : children}
        </AuthContext.Provider>
    )

}
export const useAuth = () => {
    return useContext(AuthContext)
}
export default AuthContext;
