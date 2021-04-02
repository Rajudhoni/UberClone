/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { View, Text } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import SearchResults from './src/screens/SearchResults';

const App = () => {
  return (
    <>
     

      {/* <HomeScreen/> */}
      <SearchResults/>
    </>
  );
};

export default App;

