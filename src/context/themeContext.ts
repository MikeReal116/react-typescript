import React from 'react';

const initial = {
  theme: 'light',
  changeTheme: () => {}
};

export default React.createContext(initial);
