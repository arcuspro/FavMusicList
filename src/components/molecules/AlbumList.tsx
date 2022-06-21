import { Dropdown, ToolTipText } from "@/src/components";
import { useStorage } from "@/src/containers"
import styled from "@emotion/styled"
import dateFormat from "dateformat";
import { useEffect, useState, useTransition } from "react";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarRateIcon from '@mui/icons-material/StarRate';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from "next-i18next";
import ListIcon from '@mui/icons-material/List';
import GridViewIcon from '@mui/icons-material/GridView';

export const AlbumList = () => {

    const { albumListData, removeElement, handleFavorite, sortByKey, getStorage } = useStorage()
    const { t } = useTranslation('common')
    const [toggleView, setToggleView] = useState<boolean>(false)

    return (
        <Wrapper>
            <ButtonSettingsContainer>
                <Dropdown name={t('sort')} children={undefined} />
                <ViewToggleContainer>
                    <IconButtonContainer onClick={() => setToggleView(true)}>
                        <ListIcon style={{ width: '35px', height: "35px" }} />
                    </IconButtonContainer>
                    <IconButtonContainer onClick={() => setToggleView(false)}>
                        <GridViewIcon style={{ width: '35px', height: "35px" }} />
                    </IconButtonContainer>
                </ViewToggleContainer>
            </ButtonSettingsContainer>

            <Container toggleView={toggleView}>
                {
                    albumListData.map((v) => {
                        return (
                            <ElementContainer toggleView={toggleView} key={v.id} >
                                <p onClick={() => sortByKey('albumName')} >{v.albumName}</p>
                                <p>{dateFormat(v.createDate, "mmmm dS, yyyy, h:MM:ss TT")}</p>
                                <ElementButtonWrapper>
                                    <IconButtonContainer onClick={() => removeElement(v.id)}>
                                        <ToolTipText toolTipText={t('delete')}>
                                            <DeleteIcon style={{ width: '40px', height: "40px" }} />
                                        </ToolTipText>
                                    </IconButtonContainer>
                                    {v.isFavorite ? (
                                        <IconButtonContainer onClick={() => handleFavorite(v.id)}>
                                            <ToolTipText toolTipText={t('unFavorite')}>
                                                <StarRateIcon style={{ width: '50px', height: "50px" }} />
                                            </ToolTipText>
                                        </IconButtonContainer>)
                                        :
                                        <IconButtonContainer onClick={() => handleFavorite(v.id)}>
                                            <ToolTipText toolTipText={t('favorite')}>
                                                <StarOutlineIcon style={{ width: '50px', height: "50px" }} />
                                            </ToolTipText>
                                        </IconButtonContainer>}

                                </ElementButtonWrapper>
                            </ElementContainer>
                        )
                    })
                }
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const ButtonSettingsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 50px;
`

const ViewToggleContainer = styled.div`
    margin-left: auto;
    margin-right: 50px;
`

const Container = styled.div<{ toggleView: boolean }>`
    display: grid;
    grid-template-columns: ${({ toggleView }) => toggleView ? 'repeat(1, minmax(0, 1fr))' : 'repeat(auto-fill, 200px)'};
    grid-gap: 4 5;
`
const IconButtonContainer = styled.button`
    background-color: inherit;
    border: none;
    svg {
        fill: ${({ theme }) => theme.fontColor};
    }
`

const ElementContainer = styled.div<{ toggleView: boolean }>`
   display: flex;
   flex-direction: ${({ toggleView }) => toggleView ? 'row' : 'column'};
   align-items: center;
   background-color: ${({ theme }) => theme.altColor};
   border-radius: 20px;
   margin: 10px;
   cursor: pointer;
    p {
        margin: 10px;
        color: ${({ theme }) => theme.fontColor};
        text-align: center;
    }
`

const ElementButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
`