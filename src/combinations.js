const full = {
  summer: ['dress', ],
  springFall: ['jumpsuit']
}

const tops = {
  winter: ['sweater', 'turtleneck'],
  summer: ['t-shirt'],
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
  let wardrobe = {full: [], tops: [], bottoms: [], footwear: [], accessories: []}
  if (temp < 40) {
    wardrobe.tops.push(tops.winter)
    wardrobe.bottoms.push(bottoms.winter)
    wardrobe.footwear.push(footwear.winter)
    wardrobe.accessories.push(accessories.winter)
  }
  else if (temp > 40 && temp < 80) {
    wardrobe.full.push(full.springFall)
    wardrobe.tops.push(tops.springFall)
    wardrobe.bottoms.push(bottoms.springFall)
    wardrobe.footwear.push(footwear.springFall)
    wardrobe.accessories.push(accessories.springFall)
  }
  else {
    wardrobe.full.push(full.summer)
    wardrobe.tops.push(tops.summer)
    wardrobe.bottoms.push(bottoms.summer)
    wardrobe.footwear.push(footwear.summer)
  }
  return wardrobe
}