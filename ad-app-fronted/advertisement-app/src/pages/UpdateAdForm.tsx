// ChangeUserInfoCard.js
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
  onSave: (editedUser: User) => void;
  onCancel: () => void;
}

const ChangeUserInfoCard: React.FC<ChangeUserInfoCardProps> = ({
  user,
  onSave,
  onCancel,
}) => {
  const [editedUser, setEditedUser] = useState<User>({...user});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSave = () => {
    onSave(editedUser);
  };

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
          label="Username"
          name="username"
          value={editedUser.username}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={editedUser.email}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={editedUser.password}
          onChange={handleChange}
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
          label="Image URL"
          name="imgUrl"
          value={editedUser.imgUrl}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <div style={{ marginTop: '1rem' }}>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
          <Button onClick={onCancel} color="secondary" style={{ marginLeft: '1rem' }}>
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChangeUserInfoCard;
