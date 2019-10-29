import * as React from 'react';
import { ActionSheetOptions, ActionSheetContext } from './types';

const context = React.createContext<ActionSheetContext>({
  showActionSheetWithOptions: (options: ActionSheetOptions, callback: (i: number) => void) => {},
});

export function useActionSheet() {
  return React.useContext(context);
}

const { Provider, Consumer } = context;

export { Provider, Consumer };
