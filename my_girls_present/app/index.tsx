// app/Index.tsx
import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import { useRouter } from 'expo-router';  // Hook para navegación

export default function Index() {
  const router = useRouter(); // Hook para acceder a la navegación

  const backImage = require('../assets/images/portada.jpg'); // Imagen de fondo

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
          onPress={() => router.push("/MiriamCalendar")} 
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
