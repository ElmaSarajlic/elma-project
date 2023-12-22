import { User } from '../../utils/types';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

type Props = {
  user: User;
};

const UserInfo = ({ user }: Props) => {
  return (
    <Container maxWidth="sm" sx={{ backgroundColor: 'primary' }}>
      <Typography variant="h5">
        {user.username}
      </Typography>
      <Typography variant="body2">
        {user.email}
      </Typography>
      <Button size="medium" variant="outlined" sx={{ marginTop: '20px' }}>
        Edit personal information
      </Button>
    </Container>
  );
};

export default UserInfo;
