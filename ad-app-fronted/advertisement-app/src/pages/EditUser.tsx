import NavBar from '../components/NavBar';
import { user } from '../constants';
import ChangeUserInfoCard from '../components/ChangeUserInfoCard';
import '../App.css'




const EditUserInfoPage : React.FC = () => {

    const onSave = () => {
        console.log('Changes saved');
      };
    
      const onCancel = () => {
        console.log('Changes canceled');
      };

    return (
        
            <><NavBar /><div style={{ marginTop: '20px' }} />
            <ChangeUserInfoCard user={user} onSave={onSave} onCancel={onCancel} /></>         
        
    );
};

export default EditUserInfoPage;
