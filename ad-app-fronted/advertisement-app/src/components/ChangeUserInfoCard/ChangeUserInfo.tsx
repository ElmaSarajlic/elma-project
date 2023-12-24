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

const ChangeUserInfoCard: React.FC<ChangeUserInfoCardProps> = ({ user, onSave, onCancel }) => {
  const [editedUser, setEditedUser] = useState(user);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!editedUser.email) {
      newErrors.email = 'Email is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };
  const handlePasswordVisibilityToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSave = () => {
    if (validateForm()) {
      onSave(editedUser);
    }
  };

  const handleCancel = () => {
    onCancel();
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
          value={editedUser.imageURL}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
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
          label="Username"
          name="username"
          value={editedUser.username}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <Button onClick={handleSave} variant="contained" color="primary" style={{ marginTop: '1rem' }}>
          Save
        </Button>
        <Button onClick={handleCancel} color="secondary" style={{ marginTop: '1rem', marginLeft: '1rem' }}>
          Cancel
        </Button>
      </CardContent>
    </Card>
  );
};

export default ChangeUserInfoCard;
