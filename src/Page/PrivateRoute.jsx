import { Navigate } from "react-router-dom"
import { useRegesContext } from "../context/regestr"

const PrivateRoute = ({children}) => {
    const {reges, setReges} = useRegesContext()

    if(!reges) {
        return (
            <Navigate to={"/not-auth"} />
        )
    }

    return children
}

export default PrivateRoute