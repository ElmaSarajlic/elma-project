import UserInfo from '../components/UserInfo';
import NavBar from '../components/NavBar';
import { user } from '../constants';



const UserInfoPage = () => {
    return (
        <>
            <NavBar />
            <div style={{ marginTop: '20px' }}>
            <UserInfo user={user}/>            </div>
        </>
    );
};

export default UserInfoPage;
