import { HTMLInputTypeAttribute } from "react";
// import styles from "./input.module.sass";
import { TextField, TextFieldVariants } from "@mui/material";

interface InputProps {
    type: HTMLInputTypeAttribute | undefined;
    variant?: TextFieldVariants | undefined;
}

export function Input({type, variant} : InputProps) {
   return (
      <TextField type={type} variant={variant}></TextField>
   );
}
