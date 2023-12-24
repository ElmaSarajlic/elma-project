import { IconButton, SxProps } from "@mui/material";
import { MouseEvent } from "react";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

type Props = {}

type EditButtonProps = {
  color?: "inherit" | "primary" | "secondary" | "action" | "error" | "disabled" | "success";
  size?: "small" | "medium" | "large";
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
  sx?: SxProps;
};

const AddButton = ({ color = "primary", size, handleClick, sx }: EditButtonProps) => {
  return (
    <IconButton aria-label="add" size={size} onClick={handleClick}>
      <EditOutlinedIcon color={color} sx={{ ...sx }} />
    </IconButton>
  )
}

export default AddButton