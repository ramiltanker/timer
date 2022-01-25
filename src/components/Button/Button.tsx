import { FC } from "react";
import styled from "styled-components";

interface IButton {
  backgroundColor?: string;
  borderColor?: string;
  marginRight?: string;
  text?: string;
  color?: string;
  onClick?: () => void;
}

const ButtonStyled = styled.button`
  width: 100%;
  max-width: 120px;
  height: 40px;
  background-color: ${(props) => props.style?.backgroundColor};
  border-style: solid;
  border-color: ${(props) =>
    props.style?.borderColor
      ? props.style?.borderColor
      : props.style?.backgroundColor};
  border-width: 1px;
  box-sizing: border-box;
  border-radius: 3px;
  margin-right: ${(props) => props.style?.marginRight};
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.33333333333;
  color: ${(props) => (props.style?.color ? props.style?.color : "#FFFFFF")};
  cursor: pointer;
  opacity: 1;
  transition: opacity 300ms ease;

  &:hover {
    opacity: 0.7;
    transition: opacity 300ms ease;
  }
`;

const Button: FC<IButton> = ({
  backgroundColor,
  borderColor,
  marginRight,
  text,
  color,
  onClick,
}) => {
  return (
    <ButtonStyled
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        marginRight: marginRight,
        color: color,
      }}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
