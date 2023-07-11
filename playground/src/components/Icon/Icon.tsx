import React from 'react';
import clsx from 'clsx';

import styles from './Icon.module.css';

export type IconNames = 'home';

export const icons: IconNames[] = ['home'];

export type Props = {
  name?: IconNames;
  className?: string;
};

const Icon: React.FC<Props> = ({ name = 'home', className }) => (
  <svg className={clsx(styles.default, className)} aria-hidden="true">
    <use xlinkHref={`/icons.svg#${name}`} />
  </svg>
);

export default Icon;
