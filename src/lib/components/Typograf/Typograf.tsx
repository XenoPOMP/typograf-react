import React, { type FC } from 'react';

import { useTypograf } from '../../hooks';

import type { TypografProps } from './Typograf.props';

/**
 * Wrap text with this component, and it will formated
 * with Typograf rules.
 *
 * @param children
 * @param prefs
 * @constructor
 *
 * @example
 * <article>
 *   <Typograf>
 *     "Этот текст должен быть отформатирован" - XenoPOMP
 *
 *     {// «Этот текст должен быть отформатирован» — XenoPOMP}
 *   </Typograf>
 * </article>
 *
 * @see https://github.com/typograf/typograf
 */
const Typograf: FC<TypografProps & { children?: string }> = ({
  children,
  prefs,
}) => {
  /** Create memoized typography formatter. */
  const formatter = useTypograf(prefs);

  return <>{children && formatter.execute(children)}</>;
};

export default Typograf;
