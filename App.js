import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Store, Persistor} from './Src/Store/Store';
import Nav from './Src/Components/Nav';
import AnimatedSplash from 'react-native-animated-splash-screen';
import {navigationRef} from './Src/Utils/HelperNav';
export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  console.log();

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 4000);
  }, []);

  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <NavigationContainer ref={navigationRef}>
          <AnimatedSplash
            logoWidht={109}
            logoHeight={109}
            isLoaded={isLoaded}
            backgroundColor={'#FFFFFF'}
            logoImage={require('./Src/Assets/logo.png')}>
            <Nav />
          </AnimatedSplash>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
