import { createContext } from 'react';
import type Typograf from 'typograf';

interface ITypografContext {
  formatter: Typograf;
}

/**
 * The only purpose of existing of this context - is
 * to share class instance across the app.
 */
export const TypografContext = createContext<ITypografContext>(
  {} as ITypografContext
);
