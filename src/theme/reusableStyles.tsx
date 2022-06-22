import styled from '@emotion/styled';

export const HoverMenu = styled.div<{ langSwitcher?: boolean }>`
  display: block;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  z-index: 3;
  background-color: ${({ theme }) => theme.headerMenu};
  color: ${({ theme }) => theme.fontColor};
  border-radius: 16px;
  transition: all 0.4s ease-in-out;
  width: max-content;
  padding: 2rem;
  transform: translate(-3rem, 15px);
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.15);

  a {
    display: block;
    margin-bottom: 2rem;
    margin-right: 0;
  }

  a:last-of-type {
    margin-bottom: 0;
  }

  p {
    margin-right: 0px;
    font-size: 1.6rem;
  }

  div:hover {
    h5,
    p {
      color: ${({ theme }) => theme.themeColor};
    }
  }

  div {
    margin-bottom: 1.5rem;
  }

  div:last-of-type {
    margin-bottom: 0;
  }

  ${({ langSwitcher }) =>
    langSwitcher &&
    `
      left: 50%;
      top: 2.2rem;
      transform: translate(-50%, 15px);
      padding: 2rem;

      svg {
        height: 16px;
      }
  `}
`;

export const DropdownItem = styled.div`
  display: flex;
  :hover {
    background-color: ${({ theme }) => theme.altColor};
  }
  svg {
    height: 2.6rem;
    margin-right: 10px;
    transform: translateY(2px);
  }

  h5,
  p {
    transition: 0.3s all ease-in-out;
  }

  h5 {
    font-size: 1.8rem;
    line-height: 1.8rem;
  }
`;

export const Dropdown = styled.div`
  font-size: 1.8rem;
  position: relative;

  & > p {
    display: inline;
  }

  .chevron {
    position: absolute;
    top: calc(50% + 2px);
    transform: translateY(-50%);
    right: -1.7rem;
    cursor: pointer;
    width: 1.2rem;
  }

  h5 {
    text-align: left;
  }

  &:hover {
    color: ${({ theme }) => theme.themeColor};
    div {
      opacity: 1;
      visibility: visible;
    }
    svg:not(.no-default-fill) path {
      fill: ${({ theme }) => theme.themeColor};
    }
  }

  &.hide div:last-of-type {
    display: none;
  }
`;
