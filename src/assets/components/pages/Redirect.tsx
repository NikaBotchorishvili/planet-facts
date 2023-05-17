import { Navigate } from "react-router-dom";

function Redirect() {

    return <Navigate to="/mercury/overview/" replace={true} />;

}

export default Redirect;
