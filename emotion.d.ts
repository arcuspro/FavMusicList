import { ITheme } from '@/src/theme/themeData';

import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}
