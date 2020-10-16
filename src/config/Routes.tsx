import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/main';
import NewEntry from '../pages/NewEntry';
import Report from '../pages/Report';

const AppStack = createStackNavigator();

const Routes = () => {
  return(
    <NavigationContainer>
      <AppStack.Navigator 
        headerMode="none"
        >
        <AppStack.Screen name="Main" component={Main}/>
        <AppStack.Screen name="NewEntry" component={NewEntry}/>
        <AppStack.Screen name="Report" component={Report}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}; 

export default Routes;