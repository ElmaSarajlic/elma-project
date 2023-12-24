import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

interface DeleteButtonProps {
  onDelete: () => void; // Define the type for the onDelete prop
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onDelete }) => {
  return (
    <IconButton aria-label="delete" onClick={onDelete}>
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteButton;
