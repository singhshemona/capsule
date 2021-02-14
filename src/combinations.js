const winter = {
  full: ['thick jumpsuit / overalls'],
  tops: ['sweater', 'turtleneck'],
  bottoms: ['joggers', 'thick pants / corduroys'],
  accessories: ['scarf']
}

const winterCombos = [
  ['thick jumpsuit / overalls', 'sweater'], 
  ['thick jumpsuit / overalls', 'turtleneck'],
  ['sweater', 'joggers', 'scarf', 'boots'],
  ['sweater', 'thick pants / corduroys', 'scarf'],
  ['sweater', 'thick pants / corduroys', 'scarf'],
  ['sweater', 'thick pants / corduroys', 'scarf']
]

const springFall = {
  full: ['jumpsuit'],
  tops: ['long sleeved tee', 'blouse', 'button down'],
  bottoms: ['jeans / denim'],
  accessories: ['cardigan', 'light utility jacket / trenchcoat']
}

const summer = {
  full: ['dress'],
  tops: ['t-shirt', 'cami'],
  bottoms: ['shorts', 'skirt', 'wide, loose, light pants'],
  accessories: ['light shawl']
}

export const createWardrobe = (temperature) => {
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
  if (temp === winter) {
    return (winterCombos.slice(days))
  } else if (temp === springFall) {
    return (springFallCombos.slice(days))
  }
}