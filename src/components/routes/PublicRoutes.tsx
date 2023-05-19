
import { Navigate, Outlet } from 'react-router-dom';

// type Props = {
//     children: JSX.Element,
//     // exact: boolean
//     path: string
// };
// const useAuth = () => {
//     const user = localStorage.getItem('user')
//     if (user) {
//         return true
//     } else {
//         return false
//     }
// }


const PublicRoutes = (props: any) => {


    // const auth = useAuth()


    return (
        // auth ? <Navigate to="/" /> :
        <Outlet />
    )
}

export default PublicRoutes