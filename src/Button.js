import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const SIZES = {
  small: {
    "--font-size": 16 / 16 + "rem",
    "--border-radius": 2 + "px",
    "--padding-x": 16 + "px",
    "--padding-y": 8 + "px"
  },
  medium: {
    "--font-size": 18 / 16 + "rem",
    "--border-radius": 2 + "px",
    "--padding-x": 24 + "px",
    "--padding-y": 16 + "px"
  },
  large: {
    "--font-size": 21 / 16 + "rem",
    "--border-radius": 4 + "px",
    "--padding-x": 36 + "px",
    "--padding-y": 20 + "px"
  }
};

const Button = ({ variant, size, children }) => {
  const style = SIZES[size];
  return (
    <>
      {variant === "fill" ? (
        <FillButton style={style}>{children}</FillButton>
      ) : variant === "outline" ? (
        <OutlineButton style={style}>{children}</OutlineButton>
      ) : (
        <GhostButton style={style}>{children}</GhostButton>
      )}
    </>
  );
};

const BaseButton = styled.button`
  font-family: Roboto;
  font-size: var(--font-size);
  font-weight: 500;
  text-align: left;
  border-radius: var(--border-radius);

  padding: var(--padding-y) var(--padding-x);
  border: solid 2px transparent;

  &:focus {
    outline-color: ${COLORS.primary};
    outline-offset: 4px;
  }
`;

const FillButton = styled(BaseButton)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  &:hover {
    background-color: ${COLORS.primaryLight};
  }
`;

const OutlineButton = styled(BaseButton)`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border: solid 2px ${COLORS.primary};

  &:hover {
    background-color: ${COLORS.offwhite};
  }
`;

const GhostButton = styled(BaseButton)`
  background-color: transparent;
  color: ${COLORS.gray};
  &:focus {
    outline-color: currentColor;
  }
  &:hover {
    background-color: ${COLORS.transparentGray15};
  }
`;

export default Button;
