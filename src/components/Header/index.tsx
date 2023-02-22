import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function Header(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={{
        padding: 30,
        display: 'flex',
        gap: 16,
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <Image
        source={require('../../assets/imgs/logo.png')}
        style={{width: 220, height: 112}}
      />
      <Text style={{fontFamily: 'Montserrat-Regular', fontSize: 16}}>
        Sign in to your account
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Header;
