import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { StyleSheet } from 'react-native';
import { Button, Text, View } from '../../../components';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '1011156253206-k5eq7iv59oimrcrqtp2ol1m987r31so4.apps.googleusercontent.com',
    // Las siguientes keys hay que configurarlas para levantar el app nativa
    //  iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    // androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    webClientId: '1011156253206-t8tt3dt7upr7s4im3db3q5lq20phc0bo.apps.googleusercontent.com',
  });


  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button
        disabled={!request}
        style={styles.googleButton}
        text="Sign in with Google"
        onPress={promptAsync}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  googleButton: {
    backgroundColor: '#1877F2'
  }
});
