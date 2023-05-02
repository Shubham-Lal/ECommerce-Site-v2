import { Navigate } from "react-router-dom"

const SellerProtectedRoute = ({ isSellerAuthenticated, children }) => {
    if (!isSellerAuthenticated) {
        return <Navigate to="/seller-login" replace />
    }
    return children;
}

export default SellerProtectedRoute;