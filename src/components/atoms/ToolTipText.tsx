import styled from "@emotion/styled";
import React from "react";

interface ToolTipTextProps {
    children?: React.ReactNode
    toolTipText: string
}


export const ToolTipText: React.FC<ToolTipTextProps> = ({ children, toolTipText }) => {
    return (
    <ToolTip>
        {children}
        <ToolTipTextContainer>{toolTipText}</ToolTipTextContainer>
    </ToolTip>
    ) }


const ToolTipTextContainer = styled.span`
    visibility: hidden;
    width: 120px;
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.fontColor};
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 150%;
    left: 50%;
    margin-left: -60px;
    :after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: black transparent transparent transparent;
    }
`
  
  const ToolTip = styled.div`
    position: relative;
    display: inline-block;
    :hover span {
      visibility: visible
    }
`

