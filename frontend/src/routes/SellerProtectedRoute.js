import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"
import Loader from "../styles/Loader";

const SellerProtectedRoute = ({ children }) => {
    const { isLoading, isSellerAuthenticated } = useSelector((state) => state.seller);

    if (isLoading === true) return <Loader />
    else {
        if (!isSellerAuthenticated) {
            return <Navigate to="/seller-login" replace />
        }
        return children;
    }
}

export default SellerProtectedRoute;