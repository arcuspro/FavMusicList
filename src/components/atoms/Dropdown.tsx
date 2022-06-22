import { Chevron } from '@/src/assets';
import { useDropdown } from '@/src/hooks';
import styled from '@emotion/styled';



export const Dropdown = ({
  children,
  name,
}: {
  name: string;
  children: React.ReactNode;
}) => {
  const { accordionHandler, isOpen, hideableHeight, hideableRef } =
    useDropdown();

  return (
    <div key={name}>
      <DropdownTitle onClick={accordionHandler} isOpen={isOpen}>
        <h3>{name}</h3>
        <Chevron />
      </DropdownTitle>
      <HideableList
        isOpen={isOpen}
        hideableHeight={hideableHeight}
        ref={hideableRef}>
        {children}
      </HideableList>
    </div>
  );
};

const HideableList = styled.div<{ isOpen: boolean; hideableHeight: number }>`
  transition: height 0.5s ease;
  height: ${({ hideableHeight, isOpen }) =>
    isOpen ? hideableHeight + 'px' : '0px'};
  overflow: hidden;
  & > div:last-of-type {
    margin-bottom: 2rem;
  }
`;

const DropdownTitle = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  h3 {
    color: ${({ theme }) => theme.fontColor};
    padding-right: 10px;
  }
  svg {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'none')};
  }
`;