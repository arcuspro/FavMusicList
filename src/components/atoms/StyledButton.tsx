import { colors } from '@/src/styles';
import styled from '@emotion/styled';

const Button = styled.button<{
  minWidth?: string;
  alternateStyle?: boolean;
  marginbot?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  height: 4.8rem;
  min-height: 40px;
  min-width: ${({ minWidth }) => (minWidth ? minWidth : '120px')};
  padding: 0 15px;
  border-radius: 6px;
  color: ${({ alternateStyle, theme }) =>
    alternateStyle ? theme.themeColor : colors.white};
  font-weight: 700;
  font-size: 1.8rem;
  background-color: ${({ alternateStyle, theme }) =>
    alternateStyle ? theme.elementBg : theme.themeColor};
  border: ${({ alternateStyle, theme }) =>
    alternateStyle ? `2px solid ${theme.themeColor}` : 'none'};
  margin-bottom: ${({ marginbot }) => (marginbot ? marginbot : '0')};

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
    transform: none;
  }

  &:hover:enabled {
    transition-duration: 0.5s;
    border: none;
    color: white;
    background-color: ${({ theme }) => theme.themeColor};
  }
`;

interface BtnProps {
  children: React.ReactNode;
  alternateStyle?: boolean;
  props?: {
    minWidth?: string;
    marginbot?: string;
    fontWeight?: number;
    disabled?: boolean;
    onClick?: () => void;
    type?: 'submit' | 'button';
  };
}

export const StyledButton = ({ props, children, alternateStyle }: BtnProps) => {
  return (
    <Button {...props} alternateStyle={alternateStyle}>
      {children}
    </Button>
  );
};
