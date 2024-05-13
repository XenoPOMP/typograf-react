import { type FC, type PropsWithChildren, useMemo } from 'react';
import Typograf from 'typograf';

import { TypografContext } from '../../contexts';

import type { TypografProviderProps } from './TypografProvider.props';

/**
 * Provide context for Typograf. Shares Typograf instance as
 * memoized value.
 *
 * @param children
 * @param prefs
 * @constructor
 */
const TypografProvider: FC<PropsWithChildren<TypografProviderProps>> = ({
  children,
  prefs,
}) => {
  /** Memoized Typograf instance. */
  const formatter = useMemo(() => new Typograf(prefs), [prefs]);

  return (
    <TypografContext.Provider value={{ formatter }}>
      {children}
    </TypografContext.Provider>
  );
};

export default TypografProvider;
