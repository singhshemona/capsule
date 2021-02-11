import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { config } from '../config.js'
// import axios from 'axios'

export const App = () => {
  const [city, setCity] = useState('')

  // useEffect(() => {
  //   const getWeather:{} = {
  //     url: 'api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + config.KEY,
  //     // method: 'GET',
  //     // headers: { 'X-ListenAPI-Key': config.KEY },
  //   };

  //   axios(getWeather)
  //     .then(response => {
  //       console.log(response.data)
  //     });
  // }, [])

  const getWeather = () => {
    fetch('api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + config.KEY)
      .then(response => console.log(response))
      // .then(json => {
      //     console.log(json)
      // })
  }
  
  return (
    <View style={styles.container}>
      <Text>What city are you going to?</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setCity(text)}
        value={city}
      />
      <Button
        title="Press me"
        color="#f194ff"
        onPress={getWeather}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
