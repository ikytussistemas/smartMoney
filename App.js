import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/config/Routes';
import Colors from './src/styles/colors';

const App = () => {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
    <Routes/>
    </>

  );
};
export default App;
