import { Dropdown } from "@/src/components"
import { useStorage } from "@/src/containers"
import { DropdownItem,  } from "@/src/theme"
import styled from "@emotion/styled"
import { useTranslation } from "next-i18next"


export const SortAlbumDropdown = () => {
    const { sortByNameDescending, sortByNameAscending, sortByDateAscending, sortByIdAscending, sortByIdDescending, sortByDateDescending, sortByIsNotBest, sortByIsBest } = useStorage()
    const { t } = useTranslation('common')

    return (
        <Container>
          <NavUl>
            <Dropdown name={t('sort.title')} >
                <DropdownItem>
                    <h4 onClick={() => sortByNameAscending()}>{t('sort.nameAscending')}</h4>
                </DropdownItem>
                <DropdownItem>
                    <h4 onClick={() => sortByNameDescending()}>{t('sort.nameDescending')}</h4>
                </DropdownItem>
                <DropdownItem>
                    <h4 onClick={() => sortByIdAscending()}>{t('sort.idAscending')}</h4>
                </DropdownItem>
                <DropdownItem>
                    <h4 onClick={() => sortByIdDescending()}>{t('sort.idDescending')}</h4>
                </DropdownItem>
                <DropdownItem>
                    <h4 onClick={() => sortByDateAscending()}>{t('sort.dateAscending')}</h4>
                </DropdownItem>
                <DropdownItem>
                    <h4 onClick={() => sortByDateDescending()}>{t('sort.dateDescending')}</h4>
                </DropdownItem>
                <DropdownItem>
                    <h4 onClick={() => sortByIsNotBest()}>{t('sort.favotriteAscending')}</h4>
                </DropdownItem>
                <DropdownItem>
                    <h4 onClick={() => sortByIsBest()}>{t('sort.favoriteDescending')}</h4>
                </DropdownItem>
            </Dropdown>
            </NavUl>
        </Container>
    )
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 250px;
  @media (max-width: 600px) {
    width: 150px;
    }

  & > div:first-of-type {
    display: flex;
    align-items: center;

    &:after {
      position: absolute;
      content: '';
      width: 100%;
      bottom: -10px;
      left: 0;
      height: 10px;
    }
  }

`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: column;
  z-index: 200;
  position: absolute;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.fontColor};
  
  h4 {
    font-weight: 500;
    cursor: pointer;
    position: relative;
    font-size: 2rem;
    line-height: 4.5rem;
    padding: 0 20px 0 20px;
  }
`;