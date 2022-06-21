import { DarkThemeSlider, LightThemeSlider } from '@/src/assets';
import { Theme } from '@/src/theme';
import styled from '@emotion/styled';
import { useRef } from 'react';

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    height: 2.4rem;
    width: auto;
  }

  &.animate {
    animation: toggleAnimation 0.4s ease-in-out;
  }

  @keyframes toggleAnimation {
    0% {
      opacity: 0;
    }

    30% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @media (max-width: 550px) {
    svg {
      height: 16px;
    }
  }
`;

export const ThemeSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const {
    toggleTheme,
    theme: { name: themeName },
  } = Theme.useContainer();

  const toggleHandler = () => {
    sliderRef.current!.classList.add('animate');
    toggleTheme();
    setTimeout(() => {
      sliderRef.current!.classList.remove('animate');
    }, 400);
  };

  return (
    <Container ref={sliderRef} onClick={toggleHandler}>
      {themeName === 'light' ? <LightThemeSlider /> : <DarkThemeSlider />}
    </Container>
  );
};
