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
  let wardrobe = {tops: [], bottoms: [], footwear: [], accessories: []}
  console.log(temp)
  if (temp < 40) {
    wardrobe.tops.push(tops.winter)
    wardrobe.bottoms.push(bottoms.winter)
    wardrobe.footwear.push(footwear.winter)
    wardrobe.accessories.push(accessories.winter)
  }
  else if (temp > 40 && temp < 80) {
    wardrobe.tops.push(tops.springFall)
    wardrobe.bottoms.push(bottoms.springFall)
    wardrobe.footwear.push(footwear.springFall)
    wardrobe.accessories.push(accessories.springFall)
  }
  else {
    wardrobe.tops.push(tops.summer)
    wardrobe.bottoms.push(bottoms.summer)
    wardrobe.footwear.push(footwear.summer)
  }
  return wardrobe
}