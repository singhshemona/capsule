import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { config } from '../config.js'
import { createOutfits, createWardrobe } from './combinations.js'

export const App = () => {
  const [city, setCity] = useState('')
  const [days, setDays] = useState('0')
  const [temp, setTemp] = useState('')
  const [wardrobe, setWardrobe] = useState({full: [], tops: [], bottoms: [], accessories: []})

  const buildCapsule = () => {
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
          if(averageTemp < 40)
            setTemp('winter')
          else if(averageTemp > 40 && averageTemp < 80)
            setTemp('springFall')
          else setTemp('summer')
        })
        setWardrobe(createWardrobe(temp))
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
      <Text>(Enter a number between 2 and 14)</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={num => setDays(num)}
        value={days}
      />
      
      <Button
        title="build my capsule"
        color="#f194ff"
        onPress={buildCapsule}
      />
      {
        wardrobe.tops.length != 0 &&
          <>
            <Text>Looks like it's going to be: {temp} degrees F</Text>
            <Text>You should pack the following pieces:</Text>
            {wardrobe.full.map((item, i) => <Text key={i}>{item}</Text>)}
            {wardrobe.tops.map((item, i) => <Text key={i}>{item}</Text>)}
            {wardrobe.bottoms.map((item, i) => <Text key={i}>{item}</Text>)}
            {wardrobe.accessories.map((item, i) => <Text key={i}>{item}</Text>)}
            {temp === 'winter' && <Text>Along with a pair of boots and a coat.</Text>}
            {temp === 'springFall' && <Text>Along with a pair of sneakers.</Text>}
            {temp === 'summer' && <Text>Along with a pair of sandals or flipflops.</Text>}
            
            <Text>In order to make these outfits:</Text>
            {createOutfits(temp, days)}
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
