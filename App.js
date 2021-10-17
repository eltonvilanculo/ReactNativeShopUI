import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';
import {useFonts,Anton_400Regular} from '@expo-google-fonts/anton'
import AppLoading from 'expo-app-loading';

export default function App() {

  let [fontLoaded] = useFonts({
    Anton_400Regular,
  })

  if(!fontLoaded){

    return <AppLoading  />;
  }
  return (
    <>
     
    <StatusBar style="light" backgroundColor="#000" translucent={true} />

    <Routes />
        
    </>
  );
}

