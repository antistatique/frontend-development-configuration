import React from 'react';

import styles from './Blank.module.css';

type Props = {
  name: string;
};

const Blank = ({ name }: Props): JSX.Element => {
  const greeting = 'Hello';

  return (
    <div className={styles.blank}>
      {greeting} {name}
    </div>
  );
};

export default Blank;
