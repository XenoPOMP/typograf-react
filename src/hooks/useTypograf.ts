import { useContext } from 'react';

import { TypografContext } from '../contexts';

/**
 * This hook gets Typograf formatter from context and
 * return functions to format text.
 */
export const useTypograf = () => {
  const { formatter } = useContext(TypografContext);

  /** Applies Typograf rules to text. */
  const format = (text: string) => formatter.execute(text);

  return {
    format,
  };
};
