import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { config } from '../config.js'
import { build } from './combinations.js'

export const App = () => {
  const [city, setCity] = useState('')
  const [days, setDays] = useState('0')
  const [temp, setTemp] = useState(0)
  const [wardrobe, setWardrobe] = useState({full: [], tops: [], bottoms: [], footwear: [], accessories: []})

  const buildCapsule = () => {
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
      })
      setWardrobe(build(temp))
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
      <Text>Enter a number between 2 and 30</Text>
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
      {wardrobe.footwear.length != 0 &&
        <>
          <Text>Looks like it's going to be: {temp} degrees F</Text>
          <Text>You should pack the following pieces:</Text>
          {/* {Object.values(wardrobe).map(item => <Text>{item}</Text>)} */}
          {wardrobe.full.map((item, i) => <Text key={i}>{item}</Text>)}
          {wardrobe.tops.map((item, i) => <Text key={i}>{item}</Text>)}
          {wardrobe.bottoms.map((item, i) => <Text key={i}>{item}</Text>)}
          {wardrobe.footwear.map((item, i) => <Text key={i}>{item}</Text>)}
          {wardrobe.accessories.map((item, i) => <Text key={i}>{item}</Text>)}

          <Text>In order to make these outfits:</Text>
          {
            temp < 40 &&
              <>
                <Text>{wardrobe.tops[0]} + {wardrobe.bottoms[0]}</Text>
              </>
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
