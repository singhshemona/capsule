import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, Keyboard, TouchableOpacity, StatusBar } from 'react-native'
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
    <ScrollView style={styles.container}>
      <Text style={styles.intro}>
        Welcome to Build my Capsule - I'll take it you're going somewhere?
        Fill out the information below and let's see what you should pack.
      </Text>
      <Text style={[styles.label, styles.bold]}>What city are you going to?</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setCity(text)}
        value={city}
        placeholder={'London, Delhi, etc.'}
        placeholderTextColor={'#8d99ae'}
      />
      <Text style={[styles.label, styles.bold]}>For how long?</Text>
      <TextInput
        style={styles.input}
        onChangeText={num => setDays(num)}
        value={days}
        number-pad
        keyboardType={'number-pad'}
        placeholder={'Enter a number less than 16'}
        placeholderTextColor={'#8d99ae'}
      />
      <TouchableOpacity onPress={buildCapsule} style={styles.button}>
        <Text style={[styles.buttonText, styles.bold]}>Build my capsule</Text>
      </TouchableOpacity>

      {error &&
        <Text style={[styles.error, styles.bold]}>Looks like you didn't enter a valid city. Try revising your spelling or enter a neighboring city.</Text>
      }

      {
        infoReceived &&
          <View style={styles.info}>
            <Text style={[styles.spacing, styles.bold]}>It's going to be around: {temp} degrees Fahrenheit. You should pack the following pieces:</Text>
            {Object.values(createWardrobe(temp)).map((item:any) => item.map((piece:any, i:number) => <Text style={[styles.spacing, styles.italic]} key={i}>{'- ' + piece}</Text>))}
            <Text style={styles.spacing}>
              {season === 'winter' && 'Along with a pair of boots and a coat. Wear the t-shirt as a lining for your nice knitwear.'}
              {season === 'springFall' && 'Along with a pair of sneakers and a light utility jacket or trenchcoat.'}
              {season === 'summer' && 'Along with a pair of sandals or flipflops.'}
            </Text>

            <Text style={[styles.spacing, styles.outfitsHeading, styles.bold]}>From these pieces you can make the following outfits:</Text>
            {
              days === '' ?
                <Text style={[styles.italic]}>Oops, you didn't set the length of your vacation. Try entering the amount of days in the textbox.</Text>
                :
                createOutfits(season, days).map((outfit:Array<String>, i:number) => <Text style={[styles.spacing, styles.italic]} key={i}>{'- ' + outfit.join(" + ")}</Text>)
            }
            <TouchableOpacity onPress={reset} style={styles.button}>
              <Text style={[styles.buttonText, styles.bold]}>Start over</Text>
            </TouchableOpacity>
          </View>
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold'
  },
  spacing: {
    lineHeight: 20
  },
  italic: {
    fontStyle: 'italic',
  },
  container: {
    marginTop: StatusBar.currentHeight ? (StatusBar.currentHeight / 2) : 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  intro: {
    fontSize: 16,
    color: '#264653'
  },
  label: {
    marginBottom: 6,
    marginTop: 14,
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
    marginTop:20,
    padding: 10,
    backgroundColor: '#006466',
    borderRadius: 6
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  info: {
    backgroundColor: '#ebebeb',
    padding: 16,
    marginTop: 20
  },
  outfitsHeading: {
    borderTopColor: '#8d99ae', 
    borderTopWidth: 1,
    marginTop: 10,
    paddingTop: 10
  },
  error: {
    color: '#9f1b1b',
    fontSize: 18,
    marginTop: 20
  }
});
