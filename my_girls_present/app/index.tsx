import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';

export default function Index() {
  const backImage = require('../assets/images/portada.jpg');

  const styles = StyleSheet.create({
    background: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingBottom: '8%',
      width: '20%',
    },
  });

  return (
    <ImageBackground
      source={backImage}
      style={styles.background}
      resizeMode="contain"
    >
      <View style={styles.container}>
        <Button
          mode="text" 
          onPress={() => alert('¡Botón presionado!')}
          labelStyle={{ color: '#fff', fontWeight: 'bold' }} 
          style={{
            backgroundColor: 'transparent', 
            borderRadius: 25,  
            borderWidth: 2, 
            borderColor: '#fff', 
          }}
        >
          Jejejejejeje ♡
        </Button>
      </View>
    </ImageBackground>
  );
}
