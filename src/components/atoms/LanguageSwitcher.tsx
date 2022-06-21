
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import languageDetector from '@/src/lib/lngDetector';
import nextI18nextConfig from '@/next-i18next.config';
import { getFlagByCode } from '@/src/utils';
import { Chevron } from '@/src/assets';
import { Dropdown, HoverMenu } from '@/src/styles/reusableStyles';

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

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

  svg {
    width: auto;
    height: 13px;
    cursor: pointer;
  }

  /* svg:not(.chevron) {
    border: 1px solid ${({ theme }) => theme.elementBorder};
  } */
`;

const CurrentFlag = styled.div`
  height: 26px;
  display: flex;
  align-items: center;

  .chevron.chevron {
    position: static;
    transform: none;
    margin-left: 6px;
  }

  @media (max-width: 550px) {
    height: 20px;
  }
`;

const Language = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &.language {
    margin-bottom: 2rem;
  }

  p {
    transition: all 0.3s ease;
    text-transform: capitalize;
    line-height: 1.6rem;
    margin-left: 10px;
    position: relative;
    bottom: 1px;
  }
`;

export const LanguageSwitcher = () => {
  const { asPath, query } = useRouter();

  const { locales, defaultLocale } = nextI18nextConfig.i18n;
  const isPageTranslated = query.locale && query.locale !== 'en';

  const currentLocale = (query.locale as string) || defaultLocale;

  const languages = locales
    .filter((locale) => locale !== currentLocale)
    .map((el) => {
      let pathArray = asPath.split('/').filter((el) => el);

      if (isPageTranslated) pathArray.shift();
      if (el !== 'en') pathArray.unshift(el);

      const path = '/' + pathArray.join('/');

      return (
        <Link key={el} href={path}>
          <a>
            <Language
              className="language"
              onClick={() => languageDetector.cache!(el)}>
              {getFlagByCode(el)}
            </Language>
          </a>
        </Link>
      );
    });

  return (
    <Container>
      <Dropdown>
        <CurrentFlag id="currentflag">
          {getFlagByCode(currentLocale, true)}
          <Chevron className="no-default-fill" />
        </CurrentFlag>
        <HoverMenu langSwitcher>{languages}</HoverMenu>
      </Dropdown>
    </Container>
  );
};
