import React from 'react';

const ScriptTagToSetDarkMode = () => {
  const codeToRunOnClient = `
(function() {
  const darkModeFromLocalStorage = localStorage.getItem('dark');
  const darkModeFromDevice =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches === true;

  if (darkModeFromLocalStorage) {
    document.documentElement.classList.toggle('dark', JSON.parse(darkModeFromLocalStorage));
  } else if (darkModeFromDevice) {
    document.documentElement.classList.toggle('dark', true);
  }
})()
  `;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<ScriptTagToSetDarkMode key="darkmodescript" />);
};
