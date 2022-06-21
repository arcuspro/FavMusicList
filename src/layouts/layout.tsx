import React from 'react';
import styled from '@emotion/styled';
import { CustomHelmet, TopBar } from '@/src/components';

interface LayoutProps {
    pageTitle?: string;
    children?: React.ReactNode;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.bgColor};
`;

export const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
    return (
        <>
            <CustomHelmet pageTitle={pageTitle ? pageTitle : undefined} />
            <Container>
                <TopBar/>
                {children}
                </Container>
        </>
    );
};
