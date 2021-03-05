/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx } from '@emotion/react';
import tw from 'twin.macro';

import styles from './Blank.styles';

type Props = {
  name: string;
};

const Blank = ({ name }: Props): JSX.Element => {
  const greeting = 'Hello';

  return (
    <div css={styles}>
      {greeting} {name}
    </div>
  );
};

Blank.defaultProps = {};

export default Blank;
