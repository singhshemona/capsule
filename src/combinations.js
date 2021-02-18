const winter = {
  full: ['thick jumpsuit / overalls'],
  tops: ['sweater', 'turtleneck', 't-shirt', 'sweatshirt'],
  bottoms: ['joggers', 'thick pants / corduroys'],
  accessories: ['scarf']
}

const winterCombos = [
  ['thick jumpsuit / overalls', 'sweater'], 
  ['sweater', 'thick pants / corduroys'],
  ['thick jumpsuit / overalls', 'sweatshirt', 'scarf'],
  ['sweatshirt', 'joggers', 'scarf'],
  ['thick jumpsuit / overalls', 'sweater', 'scarf'], 
  ['sweater', 'thick pants / corduroys', 'scarf'],
  ['thick jumpsuit / overalls', 'turtleneck'],
  ['turtleneck', 'thick pants / corduroys'],
  ['thick jumpsuit / overalls', 'turtleneck', 'scarf'],
  ['turtleneck', 'thick pants / corduroys', 'scarf'],
  ['sweater', 'joggers', 'scarf'],
  ['sweater', 'thick pants / corduroys'],
  ['sweater', 'joggers'],
  ['sweater', 'thick pants / corduroys', 'scarf'],
  ['turtleneck', 'joggers'],
  ['sweatshirt', 'thick pants / corduroys', 'scarf'],
  ['turtleneck', 'joggers', 'scarf'],  
]

const springFall = {
  full: ['jumpsuit'],
  tops: ['long sleeved tee', 'blouse', 'button down', 'cropped tee'],
  bottoms: ['jeans / denim', 'mid / maxi-skirt'],
  accessories: ['cardigan']
}

const springFallCombos = [
  ['jumpsuit', 'long sleeved tee'], 
  ['jumpsuit', 'blouse'],
  ['jumpsuit', 'button down'], 
  ['long sleeved tee', 'jeans / denim'],
  ['blouse', 'jeans / denim'],
  ['button down', 'jeans / denim'],
  ['long sleeved tee', 'jeans / denim', 'cardigan'],
  ['blouse', 'jeans / denim', 'cardigan'],
  ['button down', 'jeans / denim', 'cardigan'],
  ['blouse', 'mid / maxi-skirt'],
  ['button down', 'mid / maxi-skirt'],
  ['long sleeved tee', 'mid / maxi-skirt'],
  ['cropped tee', 'jeans / denim', 'cardigan'],
  ['cropped tee', 'mid / maxi-skirt'],
  ['jumpsuit', 'cropped tee'],
]

const summer = {
  full: ['dress', 'jumper / romper'],
  tops: ['t-shirt', 'cami'],
  bottoms: ['shorts', 'skirt', 'wide / loose / palazzo pants'],
  accessories: ['light shawl']
}

const summerCombos = [
  ['dress'], 
  ['dress', 'light shawl'],
  ['jumper / romper'], 
  ['jumper / romper', 'light shawl'],
  ['t-shirt', 'shorts'],
  ['t-shirt', 'shorts', 'light shawl'],
  ['t-shirt', 'skirt'],
  ['t-shirt', 'skirt', 'light shawl'],
  ['t-shirt', 'wide / loose / palazzo pants'],
  ['t-shirt', 'wide / loose / palazzo pants', 'light shawl'],
  ['cami', 'shorts'],
  ['cami', 'shorts', 'light shawl'],
  ['cami', 'skirt'],
  ['cami', 'skirt', 'light shawl'],
  ['cami', 'wide / loose / palazzo pants'],
  ['cami', 'wide / loose / palazzo pants', 'light shawl'],
]

export const createWardrobe = (temperature) => {
  console.log(temperature)
  let wardrobe = {full: [], tops: [], bottoms: [], accessories: []}
  if (temperature < 40) {
    wardrobe = winter
  }
  else if (temperature > 40 && temperature < 80) {
    wardrobe = springFall
  }
  else {
    wardrobe = summer
  }
  return wardrobe
}

export const createOutfits = (temp, days) => {
  if (temp === 'winter') {
    return (winterCombos.slice(0, days))
  } else if (temp === 'springFall') {
    return (springFallCombos.slice(0, days))
  } else {
    return (summerCombos.slice(0, days))
  }
}