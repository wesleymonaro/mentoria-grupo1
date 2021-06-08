import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Details from '../pages/Details';
import Cart from '../pages/Cart';

const Stack = createStackNavigator();

const AppRoutes = (): React.ReactElement => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default AppRoutes;