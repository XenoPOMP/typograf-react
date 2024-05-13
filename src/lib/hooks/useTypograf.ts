import { useMemo } from 'react';
import TypografFormatter from 'typograf';

/**
 * This hook creates memoized formatter for text
 * and returns it.
 *
 * @param options
 */
export const useTypograf = (
  ...options: ConstructorParameters<typeof TypografFormatter>
): TypografFormatter => {
  return useMemo(() => new TypografFormatter(...options), [options]);
};
