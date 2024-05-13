import cn from 'classnames';
import React, { type FC } from 'react';
import TypografFormatter from 'typograf';

import styles from './Typograf.module.scss';
import { TypografProps } from './Typograf.props';

const Typograf: FC<TypografProps & { children?: string }> = ({ children }) => {
  return <>{'Content'}</>;
};

export default Typograf;
