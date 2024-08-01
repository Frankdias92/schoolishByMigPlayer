import { hooks } from '../services/firebase';
import { Navigate } from 'react-router-dom';

function Page() {
    return (
        <>
            {!hooks.getUserData() && <Navigate to="/login" replace={true} />}
        <h1>Dashboard</h1>
        <p>{hooks.getUserData()?.email}</p>
    </>)
}

export default Page;