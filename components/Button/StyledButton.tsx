import React, { FC } from "react";
import { Button, ButtonProps, View } from "react-native";

export interface StyledButtonProps extends ButtonProps {
  style: any;
}

const StyledButton: FC<StyledButtonProps> = ({ style, ...props }) => {
  const { backgroundColor, ...restStyle } = style;

  return (
    <View style={restStyle}>
      <Button color={backgroundColor} {...props} />
    </View>
  );
};

export default StyledButton;
