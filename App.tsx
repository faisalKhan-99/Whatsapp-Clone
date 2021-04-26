import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { withAuthenticator } from '@aws-amplify/ui-react'; //authetication done with this only
import { getUser } from './src/graphql/queries'
import {createUser} from './src/graphql/mutations'

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify' //setup for cloud
import config from './src/aws-exports'
Amplify.configure(config)

const randomImages = [ 
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg',
]

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const getRandomImage = () =>{
return randomImages[Math.floor(Math.random()*randomImages.length)]
  }


  useEffect(() => {
    const fetchUser = async () => { //1. get authenticated user from auth
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });//want from server not stored
      
      if (userInfo) {
        // 2. get the user from backend with userid from auth
        const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }))
        if (userData.data.getUser) {
         // ("User already there in database")
          return; 
        }
     
        //3. if there is no user with the id then create one. 
        const newUser = { //we have this object now we'll send it to our API
          id:userInfo.attributes.sub,
          name: userInfo.username,
          imageUri:getRandomImage(),
          status:'Hey! I am using whatsapp'
        }

        await API.graphql(graphqlOperation(createUser,{input:newUser})) //new user updated in backend querylist
      }

    }
    fetchUser()

  }, []);

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