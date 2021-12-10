import React from 'react';

import { IconNames } from 'components/Icons/Icons';

import styles from './Icon.module.css';

export type Props = {
  name?: IconNames;
  className?: string;
};

const Icon = ({ name = 'home', className }: Props): JSX.Element => (
  <svg className={`${styles.icon} ${className}`} aria-hidden="true">
    <use xlinkHref={`#${name}`} />
  </svg>
);

export default Icon;
