import {
  US,
  PL,
} from 'country-flag-icons/react/3x2';

export const getFlagByCode = (
  langCode: string | undefined,
  isCurrent?: boolean,
) => {
  switch (langCode) {
    case 'pl':
      return (
        <>
          <PL className="no-default-fill" />
          {!isCurrent && <p>Polski</p>}
        </>
      );
    case 'en':
    default:
      return (
        <>
          <US className="no-default-fill" />
          {!isCurrent && <p>English</p>}
        </>
      );
  }
};
