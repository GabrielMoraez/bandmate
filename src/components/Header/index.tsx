import React from 'react';
import {Image, Text, View} from 'react-native';

type HeaderProps = {
  Subtitle: string;
};

const Header = (props: HeaderProps) => {
  return (
    <View
      style={{
        padding: 30,
        display: 'flex',
        gap: 16,
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Image
        source={require('../../assets/imgs/logo.png')}
        style={{width: 220, height: 112}}
      />
      <Text style={{fontFamily: 'Montserrat-Regular', fontSize: 16}}>
        {props.Subtitle}
      </Text>
    </View>
  );
};

export default Header;
