 import React, {useEffect, useState} from 'react';
 import {
   View,
   Text,
 } from 'react-native';
 import { Provider } from 'react-redux';

 import Routes from './routes/app.routes';
import store from './store';

 const App = () => {

   return (
     <View style={{ flex: 1 }}>
       <Provider store={store}>
          <Routes />
       </Provider>
     </View>
   );
 };

 export default App;
