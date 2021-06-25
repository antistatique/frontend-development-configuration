import React, { FunctionComponent, SVGAttributes } from 'react';

import Home from 'assets/icons/home.svg';

export const iconList: Record<string, unknown> = {
  home: Home,
};

export type IconNames = 'home'; // | 'something' | 'else' ...

const Icons = (): JSX.Element => (
  <div style={{ display: 'none' }}>
    {Object.keys(iconList).map(icon =>
      React.createElement<SVGAttributes<SVGAElement>>(
        iconList[icon] as FunctionComponent,
        {
          key: icon,
          id: icon.replace(/_/gm, '-'),
        }
      )
    )}
  </div>
);

export default Icons;

export const IconsDecorator = (Story: FunctionComponent): JSX.Element => (
  <>
    <Story />
    <Icons />
  </>
);
