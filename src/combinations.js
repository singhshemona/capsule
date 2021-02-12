const winter = {
  full: [],
  tops: ['sweater', 'turtleneck'],
  bottoms: ['joggers'],
  footwear: ['boots'],
  accessories: ['scarf', 'coat']
}

const springFall = {
  full: ['jumpsuit'],
  tops: ['long sleeved tee', 'blouse / button down'],
  bottoms: ['jeans / denim'],
  footwear: ['sneakers'],
  accessories: ['cardigan', 'light utility jacket / trenchcoat']
}

const summer = {
  full: ['dress'],
  tops: ['t-shirt'],
  bottoms: ['wide, loose, light pants'],
  footwear: ['sandals'],
  accessories: ['cardigan', 'light utility jacket / trenchcoat']
}

// const full = {
//   summer: ['dress'],
//   springFall: ['jumpsuit']
// }

// const tops = {
//   winter: ['sweater', 'turtleneck'],
//   summer: ['t-shirt'],
//   springFall: ['long sleeved tee', 'blouse / button down']
// }

// const bottoms = {
//   winter: ['joggers'],
//   summer: ['wide, loose, light pants'],
//   springFall: ['jeans / denim']
// }

// const footwear = {
//   winter: ['boots'],
//   summer: ['sandals'],
//   springFall: ['sneakers']
// }

// const accessories = {
//   winter: ['scarf', 'coat'],
//   summer: [],
//   springFall: ['cardigan', 'light utility jacket / trenchcoat']
// }

export const build = (temperature) => {
  let wardrobe = {full: [], tops: [], bottoms: [], footwear: [], accessories: []}
  // let wardrobe = [{full: []}, {tops: []}, bottoms: {}, footwear: {}, accessories: {}]
  if (temperature < 40) {
    wardrobe = winter
    // wardrobe.tops.push(tops.winter[0])
    // wardrobe.tops.push(tops.winter[1])
    // wardrobe.bottoms.push(bottoms.winter[0])
    // wardrobe.footwear.push(footwear.winter[0])
    // wardrobe.accessories.push(accessories.winter[0])
    // wardrobe.accessories.push(accessories.winter[1])
  }
  else if (temperature > 40 && temperature < 80) {
    wardrobe = springFall
    // wardrobe.full.push(full.springFall)
    // wardrobe.tops.push(tops.springFall)
    // wardrobe.bottoms.push(bottoms.springFall)
    // wardrobe.footwear.push(footwear.springFall)
    // wardrobe.accessories.push(accessories.springFall)
  }
  else {
    wardrobe = summer
    // wardrobe.full.push(full.summer)
    // wardrobe.tops.push(tops.summer)
    // wardrobe.bottoms.push(bottoms.summer)
    // wardrobe.footwear.push(footwear.summer)
  }
  return wardrobe
}