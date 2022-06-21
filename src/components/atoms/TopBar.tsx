import { ThemeSlider } from "@/src/theme"
import { LanguageSwitcher } from "@/src/translations"
import styled from "@emotion/styled"

export const TopBar = () => {

    return (
        <Container>
            <Logo><p>FavMusicList</p></Logo>
            <SettingContainer>
                <ThemeSlider />
                <LanguageSwitcher />
            </SettingContainer>
        </Container>

    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80px;
    background-color: ${({ theme }) => theme.bgColor};
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.fontColor};;
`

const SettingContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 135px;
    margin-left: auto;
    margin-right: 50px;
`

const Logo = styled.div`
    margin: 50px;
    p {
        color: ${({ theme }) => theme.fontColor};
        font-weight: bold;
    }
`