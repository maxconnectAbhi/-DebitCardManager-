// RootNavigation.js
import * as React from 'react';

import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }else{
    navigationRef.current.getRootState()
  }
}

function reset(name) {
    if (navigationRef.isReady()) {
      navigationRef.reset({routes: [{ name }], index: 0})
    }else{
        navigationRef.current.getRootState()
      }
  }

// add other navigation functions that you need and export them

export default {
    navigate,
    reset,
};