import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Keyboard, TouchableOpacity } from 'react-native'
import { config } from '../config.js'
import { createOutfits, createWardrobe } from './combinations.js'

export const App = () => {
  const [error, setError] = useState(false)
  const [city, setCity] = useState('')
  const [days, setDays] = useState('')
  const [temp, setTemp] = useState(0)
  const [season, setSeason] = useState('')
  const [infoReceived, setinfoReceived] = useState(false)

  const buildCapsule = () => {
    setinfoReceived(false)
    Keyboard.dismiss()
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${config.KEY}&units=imperial`)
      .then(response => response.json())
      .then(json => {
        let averageTemp = 
          (json.list[0].main.feels_like + 
          json.list[9].main.feels_like + 
          json.list[17].main.feels_like +
          json.list[25].main.feels_like +
          json.list[33].main.feels_like) 
          / 5;
        setError(false)
        setinfoReceived(true)
        setTemp(Math.round(averageTemp))
        if(averageTemp <= 45) setSeason('winter')
        else if(averageTemp > 45 && averageTemp < 75) setSeason('springFall')
        else setSeason('summer')
      })
      .catch(error => {
        console.log("Error: " + error.message);
        setError(true)
      })
  }

  const reset = () => {
    setCity('')
    setDays('')
    setTemp(0)
    setSeason('')
    setinfoReceived(false)
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.intro}>
        Welcome to Build my Capsule - I'll take it you're going somewhere?
        Fill out the information below and let's see what you should pack.
      </Text>
      <Text style={styles.label}>What city are you going to?</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setCity(text)}
        value={city}
        placeholder={'London, Delhi, etc.'}
        placeholderTextColor={'#8d99ae'}
      />
      <Text style={styles.label}>For how long?</Text>
      <TextInput
        style={styles.input}
        onChangeText={num => setDays(num)}
        value={days}
        number-pad
        keyboardType={'number-pad'}
        placeholder={'Enter a number less than 16'}
        placeholderTextColor={'#8d99ae'}
      />
      
      {/* <Button
        title=""
        color="#6b705c"
        onPress={}
      /> */}

      <TouchableOpacity onPress={buildCapsule} style={styles.button}>
        <Text style={styles.buttonText}>Build my capsule</Text>
      </TouchableOpacity>

      {error &&
        <Text>Looks like you didn't enter a valid city. Try revising your spelling or enter a neighboring city.</Text>
      }

      {
        infoReceived &&
          <>
            <Text>Looks like it's going to be around: {temp} degrees F</Text>
            <Text>You should pack the following pieces:</Text>
            {Object.values(createWardrobe(temp)).map((item:any) => item.map((piece:any, i:number) => <Text key={i}>{piece}</Text>))}
            {season === 'winter' && <Text>Along with a pair of boots and a coat. Weat the t-shirt as a lining for extra warmth under your nice tops.</Text>}
            {season === 'springFall' && <Text>Along with a pair of sneakers and a light utility jacket or trenchcoat.</Text>}
            {season === 'summer' && <Text>Along with a pair of sandals or flipflops.</Text>}
            <Text>In order to make these outfits:</Text>
            {
              days === '' ?
                <Text>Oops, looks like you did not set the length of your vacation. Try entering the amount of days in the textbox.</Text>
                :
                createOutfits(temp, days).map((outfit:Array<String>, i:number) => <Text key={i}>{outfit.join(", ")}</Text>)
            }
            <Button
              title="Start over"
              color="#f194ff"
              onPress={reset}
            />
          </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  intro: {
    fontSize: 16,
    color: '#264653'
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 6,
    marginTop: 22,
    color: '#264653',
  },
  input: { 
    height: 40, 
    borderColor: '#8d99ae', 
    borderWidth: 1,
    padding: 10,
    borderRadius: 6
  },
  button: {
    backgroundColor: '#006466'
  },
  buttonText: {
    color: '#fff'
  }
});
