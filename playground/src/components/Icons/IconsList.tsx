import React from 'react';
import { jsx } from '@emotion/react';
import tw from 'twin.macro';

import Icon from 'components/Icon';
import Icons, { iconList, IconNames } from 'components/Icons/Icons';

const IconsList = (): JSX.Element => (
  <>
    <Icons />
    <div tw="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-10">
      {Object.keys(iconList).map(icon => (
        <div key={`icon-listed-${icon}`} tw="flex items-center">
          <span tw="inline-flex items-center justify-center w-8 h-8 p-2 border border-gray-100 rounded">
            <Icon name={icon as IconNames} tw="text-lg" />
          </span>
          <code tw="ml-2 text-xs text-gray-700">{icon}</code>
        </div>
      ))}
    </div>
  </>
);

export default IconsList;
