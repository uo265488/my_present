import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Linking } from 'react-native';

const MiriamCalendar = () => {

  const tenerifeBeso = require('../assets/images/tenerife_beso.jpg');

  const handleDayPress = (day: any) => {
    if (day.dateString >= '2024-12-07' && day.dateString <= '2024-12-09') { //BILBAO
      Linking.openURL('https://www.instagram.com/p/DDcBZzAIJOQArQckAVby2keWTNYREBEJcMKkEA0/?igsh=bmg0cnd2dWlseG16')
        .catch(err => console.error('Failed to open URL:', err));
    } else if (day.dateString >= '2024-07-27' && day.dateString <= '2024-08-02') { //MALLORCA
      Linking.openURL('https://www.instagram.com/p/C-50Q52oUUY-oxf_LTldsPU5oAnzNzydMnOlA80/?img_index=7&igsh=OHhwenFkdGMyZHc=')
        .catch(err => console.error('Failed to open URL:', err));
    } else if (day.dateString >= '2024-07-22' && day.dateString <= '2024-07-25') { //BOOMBASTIC
      Linking.openURL('https://www.instagram.com/p/CvF3hkwoIzgMx_gPqYVg3yO45m_k7CCmuw4Grc0/?igsh=MTRtaGYyN2tlMzc3dA==')
        .catch(err => console.error('Failed to open URL:', err));
    } else if (day.dateString >= '2023-12-18' && day.dateString <= '2023-12-20') { // MILAN
      Linking.openURL('https://www.instagram.com/p/C2YCcHcoBXb6dFSw4N8WhvlzOk6U_YKhUPJDMQ0/?img_index=1&igsh=MWEzdjUwNTU1cDV2Zw==')
        .catch(err => console.error('Failed to open URL:', err));
    } else if (day.dateString >= '2023-07-27' && day.dateString <= '2023-08-02') { //OPORTO
      Linking.openURL('https://www.instagram.com/p/Cv5WpDeoL56HZA0NX39OMSQZfaJBFwQB8Un5h80/?igsh=MWViMnp5NXNxYjgyZg==')
        .catch(err => console.error('Failed to open URL:', err));
    } else if (day.dateString >= '2023-03-20' && day.dateString <= '2023-03-25') { //TENERIFE
      Linking.openURL('https://www.instagram.com/p/CqQ7kYsoUn54q-0rEf3BI25n1Bxj0MrQEtJXz00/?igsh=MTVtOHBpeXFvOHRsZA==')
        .catch(err => console.error('Failed to open URL:', err));
    } else if (day.dateString == '2024-09-16') { //ANIVERSARIO
      Linking.openURL('https://www.instagram.com/p/C-50Q52oUUY-oxf_LTldsPU5oAnzNzydMnOlA80/?img_index=7&igsh=OHhwenFkdGMyZHc=')
        .catch(err => console.error('Failed to open URL:', err));
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={tenerifeBeso}
        style={styles.backgroundImage}
        resizeMode="cover" // Ajusta la imagen de fondo para cubrir todo el espacio disponible
      >
        <View style={styles.calendarWrapper}>
          <Calendar
            markedDates={{
              '2024-12-07': { selected: true, marked: false, selectedColor: 'orange' },
              '2024-12-08': { selected: true, marked: false, selectedColor: 'orange' },
              '2024-12-09': { selected: true, marked: false, selectedColor: 'orange' },
              '2023-12-20': { selected: true, marked: false, selectedColor: 'red' },
              '2023-12-18': { selected: true, marked: false, selectedColor: 'red' },
              '2023-12-19': { selected: true, marked: false, selectedColor: 'red' },
              '2024-07-27': { selected: true, marked: false, selectedColor: 'green' },
              '2024-07-28': { selected: true, marked: false, selectedColor: 'green' },
              '2024-07-29': { selected: true, marked: false, selectedColor: 'green' },
              '2024-07-30': { selected: true, marked: false, selectedColor: 'green' },
              '2024-07-31': { selected: true, marked: false, selectedColor: 'green' },
              '2024-08-01': { selected: true, marked: false, selectedColor: 'green' },
              '2024-08-02': { selected: true, marked: false, selectedColor: 'green' },
              '2023-07-27': { selected: true, marked: false, selectedColor: 'green' },
              '2023-07-28': { selected: true, marked: false, selectedColor: 'green' },
              '2023-07-29': { selected: true, marked: false, selectedColor: 'green' },
              '2023-07-30': { selected: true, marked: false, selectedColor: 'green' },
              '2023-07-31': { selected: true, marked: false, selectedColor: 'green' },
              '2023-08-01': { selected: true, marked: false, selectedColor: 'green' },
              '2023-08-02': { selected: true, marked: false, selectedColor: 'green' },
              '2024-07-22': { selected: true, marked: false, selectedColor: 'orange' },
              '2024-07-23': { selected: true, marked: false, selectedColor: 'orange' },
              '2024-07-24': { selected: true, marked: false, selectedColor: 'orange' },
              '2024-07-25': { selected: true, marked: false, selectedColor: 'orange' },
              '2023-03-20': { selected: true, marked: false, selectedColor: 'purple' },
              '2023-03-21': { selected: true, marked: false, selectedColor: 'purple' },
              '2023-03-22': { selected: true, marked: false, selectedColor: 'purple' },
              '2023-03-23': { selected: true, marked: false, selectedColor: 'purple' },
              '2023-03-24': { selected: true, marked: false, selectedColor: 'purple' },
              '2023-03-25': { selected: true, marked: false, selectedColor: 'purple' },
              '2024-09-16': { selected: true, marked: false, selectedColor: 'pink' },
              '2023-09-16': { selected: true, marked: false, selectedColor: 'pink' },
              '2022-09-16': { selected: true, marked: false, selectedColor: 'pink' },
              '2024-12-25': { selected: true, marked: false, selectedColor: 'blue' },
              '2024-12-31': { selected: true, marked: false, selectedColor: 'red' },
            }}
            current={'2024-12-20'}
            minDate={'2022-09-16'}
            maxDate={'2024-12-31'}
            onDayPress={handleDayPress}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

// Estilos ajustados para centrar el calendario y ajustar la imagen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%', // Asegura que la imagen ocupe todo el ancho
    height: '100%', // Asegura que la imagen ocupe toda la altura
    justifyContent: 'center', // Centra el contenido (calendario) verticalmente
  },
  calendarWrapper: {
    flex: 1, 
    justifyContent: 'center', // Centra el calendario verticalmente
    alignItems: 'center', // Centra el calendario horizontalmente
    position: 'absolute', // Asegura que el calendario se posicione encima de la imagen
    width: '85%', // El calendario ocupa el 85% del ancho de la pantalla
  },
});

export default MiriamCalendar;
