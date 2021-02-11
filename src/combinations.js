const tops = {
  winter: ['sweater', 'turtleneck'],
  summer: ['dress', 't-shirt', 'jumpsuit'],
  springFall: ['long sleeved tee', 'blouse / button down']
}

const bottoms = {
  winter: ['joggers'],
  summer: ['wide, loose, light pants'],
  springFall: ['jeans / denim']
}

const footwear = {
  winter: ['boots'],
  summer: ['sandals'],
  springFall: ['sneakers']
}

const accessories = {
  winter: ['scarf', 'coat'],
  summer: [],
  springFall: ['cardigan', 'light utility jacket / trenchcoat']
}

export const build = (temp) => {
  let wardrobe = []
  if (temp < 40) {
    wardrobe.push(tops.winter)
    wardrobe.push(bottoms.winter)
    wardrobe.push(footwear.winter)
    wardrobe.push(accessories.winter)
  }
  else if (temp > 40 && temp < 80) {
    wardrobe.push(tops.springFall)
    wardrobe.push(bottoms.springFall)
    wardrobe.push(footwear.springFall)
    wardrobe.push(accessories.springFall)
  }
  else {
    wardrobe.push(tops.summer)
    wardrobe.push(bottoms.summer)
    wardrobe.push(footwear.summer)
  }
  return wardrobe
}