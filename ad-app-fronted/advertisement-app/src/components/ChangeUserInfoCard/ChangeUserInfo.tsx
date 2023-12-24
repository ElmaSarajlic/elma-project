import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { User } from '../../utils/types';

interface ChangeUserInfoCardProps {
  user: User;
  onSave: () => void;
  onCancel: () => void;
}

const ChangeUserInfoCard: React.FC<ChangeUserInfoCardProps> = ({ user, onSave, onCancel }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibilityToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Edit User Information
        </Typography>
        <TextField
          fullWidth
          label="Image URL"
          name="imageUrl"
          value={user.imageURL}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={user.password}
          margin="normal"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handlePasswordVisibilityToggle} edge="end">
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={user.email}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Username"
          name="username"
          value={user.username}
          margin="normal"
          variant="outlined"
        />
        <Button onClick={onSave} variant="contained" color="primary" style={{ marginTop: '1rem' }}>
          Save
        </Button>
        <Button onClick={onCancel} color="secondary" style={{ marginTop: '1rem', marginLeft: '1rem' }}>
          Cancel
        </Button>
      </CardContent>
    </Card>
  );
};

export default ChangeUserInfoCard;
