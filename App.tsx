import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
//import { withAuthenticator } from 'aws-amplify-react-native'
import { withAuthenticator } from '@aws-amplify/ui-react'; //authetication done with this only

import Amplify from 'aws-amplify' //setup for cloud
import config from './src/aws-exports'
Amplify.configure(config)

 function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
export default withAuthenticator(App)