import React, { FunctionComponent } from 'react';
import { jsx } from '@emotion/react';
import tw, { GlobalStyles } from 'twin.macro';

import Icons from 'components/Icons';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => (
  // eslint-disable-next-line react-hooks/rules-of-hooks
  <div>
    <Icons />
    {children}
  </div>
);
Layout.defaultProps = {};

// For Storybook
export const LayoutDecorator = (Story: FunctionComponent): JSX.Element => (
  <>
    <GlobalStyles />
    <div tw="font-sans antialiased text-gray-900">
      <Story />
    </div>
  </>
);

export default Layout;
