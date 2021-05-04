import React, { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import StyledButton, { StyledButtonProps } from "./StyledButton";

interface FlexButton extends StyledButtonProps {
  useOpacity?: boolean;
}

const FlexButton: FC<FlexButton> = ({ style, useOpacity, ...props }) => {
  return (() => {
    if (useOpacity) {
      const { title, ...restProps } = props;
      const { color, textAlign, fontSize, ...restStyle } = style;

      return (
        <TouchableOpacity {...restProps} style={restStyle}>
          <Text style={{ color, textAlign, fontSize }}>{title}</Text>
        </TouchableOpacity>
      );
    }

    return <StyledButton style={style} {...props} />;
  })();
};

export default FlexButton;
