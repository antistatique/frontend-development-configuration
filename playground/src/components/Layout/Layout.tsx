import React, { FunctionComponent } from 'react';

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
  <div className="font-sans antialiased text-gray-900">
    <Story />
  </div>
);

export default Layout;
