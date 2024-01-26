import { ThemeProvider } from 'styled-components/native'
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';

import { Signin } from "./src/screens/Signin";
import theme from './src/theme';
import { StatusBar } from 'react-native';
import { Loading } from './src/components/Loading';

import { ANDROID_CLIENT_ID } from  '@env';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_700Bold
  })
  

  if(!fontsLoaded) {
    return (
      <Loading/>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Signin />
    </ThemeProvider>
  );
}


