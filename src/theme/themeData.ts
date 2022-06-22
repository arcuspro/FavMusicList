import { colors } from '@/src/styles';

export interface ITheme {
  themeColor: string;
  altColor: string;
  bgColor: string;
  fontColor: string;
  footerBg: string;
  formInputs: string;
  elementBg: string;
  elementBorder: string;
  svgBg: string;
  headerMenu: string;
  name: string;
}

export const lightTheme: ITheme = {
  themeColor: colors.violet,
  altColor: colors.blue,
  bgColor: colors.white,
  fontColor: colors.almostBlack,
  footerBg: colors.darkGray,
  formInputs: colors.contactFormGray,
  elementBg: colors.white,
  elementBorder: colors.lightGray,
  svgBg: colors.lightGray,
  headerMenu: colors.white,
  name: 'light',
};
export const darkTheme: ITheme = {
  themeColor: colors.blue,
  altColor: colors.violet,
  bgColor: colors.almostBlack,
  fontColor: colors.white,
  footerBg: colors.mediumGray,
  formInputs: colors.darkGray,
  elementBg: colors.mediumGray,
  elementBorder: 'none',
  svgBg: colors.mediumGray,
  headerMenu: colors.darkGray,
  name: 'dark',
};
