import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

interface LinkProps {
  children: React.ReactNode;
  href: string;
  locale?: string;
}

export const Link = ({ children, href, locale }: LinkProps) => {
  const router = useRouter();
  let linkLocale = locale || (router.query.locale as string) || '';
  linkLocale = linkLocale && '/' + linkLocale;
  const localizedHref = `${linkLocale}${href}`;

  return (
    <NextLink href={localizedHref}>
      <a>{children}</a>
    </NextLink>
  );
};
