import { ITheme } from '@/src/data/themeData';

import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}
