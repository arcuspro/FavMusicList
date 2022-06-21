
  import React, { useEffect } from 'react';
  import { useTranslation } from 'next-i18next';
import { Spinner, } from '@/src/components/atoms';
import { colors } from '@/src/styles';
import styled from '@emotion/styled';
import { LanguageSwitcher } from '@/src/translations';
import { ThemeSlider } from '@/src/theme';
  
  export const HomePage = () => {
    const { t } = useTranslation('homepage');
  
    return (
      <Container>
        Home Page
        <Spinner color={colors.white} spinSize={3} size={28} />
        <LanguageSwitcher />
        <ThemeSlider/>
      </Container>
    );
  };

  const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 40px;
    background-color: ${({ theme }) => theme.themeColor};
  `
  