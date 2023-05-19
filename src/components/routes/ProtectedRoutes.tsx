import { Navigate, Outlet } from 'react-router-dom'


const useAuth = () => {
    const user = localStorage.getItem('user')
    if (user) {
        return true
    } else {
        return false
    }
}


const ProtectedRoutes = (props: any, type: string) => {


    const auth = useAuth()


    return (
        <>
            {(type === "error") ? <Navigate to="*" /> : <Outlet />}
            {(type === "auth") && auth ? <Outlet /> : <Navigate to="/login" />}
        </>
    )



}


export default ProtectedRoutes;