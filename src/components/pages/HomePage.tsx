import React, { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { AddAlbumForm, AlbumList, Spinner, } from '@/src/components';
import { colors } from '@/src/styles';
import styled from '@emotion/styled';

  
  export const HomePage = () => {
    const { t } = useTranslation('common');
  
    return (
      <Container>
        <AddAlbumForm />
        <ListWrapper>
          <AlbumList/>
        </ListWrapper>
      </Container>
    );
  };

  const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 40px;
    width: 100%;
  `
  const ListWrapper = styled.div`
    margin-left: 50px;
    width: 100%;
  `
  