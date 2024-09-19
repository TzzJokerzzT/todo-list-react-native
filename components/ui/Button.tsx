import { ButtonProps } from "@/types/types.env";
import React from "react";
import { Button } from "react-native-paper";

const Buttons: React.FC<ButtonProps> = ({
  children,
  onPress,
  icon,
  mode,
  buttonColor,
}) => {
  return (
    <Button icon={icon} mode={mode} onPress={onPress} buttonColor={buttonColor}>
      {children}
    </Button>
  );
};

export default Buttons;
