import { useNavigate } from "react-router-dom";

const Auth = () => {
    const navigate = useNavigate();
    return (
        <div className="Homepage ">
            <button onClick={() => navigate('/')}>Click here to redirect to the StackOverflow-Clone</button>
        </div>
    )
}

export default Auth;