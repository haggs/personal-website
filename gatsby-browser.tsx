import '@fontsource/red-hat-display/variable.css';
import '@fontsource/red-hat-mono/variable.css';
import './src/styles/global.css';
import React from 'react';

import { DarkModeProvider } from './src/context/DarkModeContext';

export const wrapRootElement = ({ element }) => (
  <DarkModeProvider>{element}</DarkModeProvider>
);
