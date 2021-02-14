import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Keyboard } from 'react-native'
import { config } from '../config.js'
import { createOutfits, createWardrobe } from './combinations.js'

export const App = () => {
  const [city, setCity] = useState('')
  const [days, setDays] = useState('')
  const [temp, setTemp] = useState(0)
  const [season, setSeason] = useState('')
  const [infoReceived, setinfoReceived] = useState(false)
  const [wardrobe, setWardrobe] = useState({full: [], tops: [], bottoms: [], accessories: []})

  const buildCapsule = () => {
    setinfoReceived(false)
    Keyboard.dismiss()
    try {
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
          setTemp(Math.round(averageTemp))
          if(averageTemp < 40) setSeason('winter')
          else if(averageTemp > 40 && averageTemp < 80) setSeason('springFall')
          else setSeason('summer')
        })
        setWardrobe(createWardrobe(temp))
        setinfoReceived(true)
    }
    catch(err) {
      console.log(err)
    }
  }
  
  return (
    <View style={styles.container}>
      <Text>What city are you going to?</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setCity(text)}
        value={city}
      />
      <Text>For how long?</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={num => setDays(num)}
        // value={days}
        number-pad
        keyboardType={'number-pad'}
        placeholder={'Enter a number less than 16'}
      />
      
      <Button
        title="build my capsule"
        color="#f194ff"
        onPress={buildCapsule}
      />
      {
        infoReceived === true &&
          <>
            <Text>Looks like it's going to be around: {temp} degrees F</Text>
            <Text>You should pack the following pieces:</Text>
            {wardrobe.full.map((item, i) => <Text key={i}>{item}</Text>)}
            {wardrobe.tops.map((item, i) => <Text key={i}>{item}</Text>)}
            {wardrobe.bottoms.map((item, i) => <Text key={i}>{item}</Text>)}
            {wardrobe.accessories.map((item, i) => <Text key={i}>{item}</Text>)}
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
          </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
