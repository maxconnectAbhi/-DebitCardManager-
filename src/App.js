import React, { useEffect } from 'react'
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux'
import { navigationRef } from './navigation/RootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { FONT_FAMILY, PRIMARY } from './utils/Constants';
import GlobalFont from 'react-native-global-font';
import configureStore from './stores';
import StackNavigator from './navigation/StackNavigation';

const storeObject = configureStore();
const { store } = storeObject;
const App = () => {
    
    useEffect(() => {
        GlobalFont.applyGlobal(FONT_FAMILY);
    }, [])
  
      return (
        <Provider store={store}>
        <StatusBar
        animated={true}
        backgroundColor={PRIMARY}
         />
      <NavigationContainer ref={navigationRef}>
      <StackNavigator/>
      </NavigationContainer>
      </Provider>
  )
}

export default App