import React, { PropsWithChildren } from 'react';

interface DarkModeState {
  dark: boolean;
  toggleDark?: () => void;
}

const defaultState: DarkModeState = {
  dark: false,
};

const DarkModeContext = React.createContext<DarkModeState>(defaultState);

const deviceHasDarkModeOn = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-color-scheme: dark)').matches === true;

class DarkModeProvider extends React.Component<
  PropsWithChildren,
  DarkModeState
> {
  state = defaultState;

  setDark = (dark: boolean) => {
    this.setState({ dark });
    localStorage.setItem('dark', JSON.stringify(dark));
    document.documentElement.classList.toggle('dark', dark);
  };

  toggleDark = () => {
    this.setDark(!this.state.dark);
  };

  componentDidMount() {
    // Getting dark mode value from localStorage!
    const darkModeFromLocalStorage = localStorage.getItem('dark');

    if (darkModeFromLocalStorage) {
      this.setDark(JSON.parse(darkModeFromLocalStorage));
    } else if (deviceHasDarkModeOn()) {
      this.setDark(true);
    }
  }

  render() {
    const { children } = this.props;
    const { dark } = this.state;

    return (
      <DarkModeContext.Provider
        value={{
          dark,
          toggleDark: this.toggleDark,
        }}
      >
        {children}
      </DarkModeContext.Provider>
    );
  }
}

export default DarkModeContext;

export { DarkModeProvider };
