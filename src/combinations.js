const winter = {
  full: ['thick jumpsuit / overalls'],
  tops: ['sweater', 'turtleneck'],
  bottoms: ['joggers', 'thick pants / corduroys'],
  footwear: ['boots'],
  accessories: ['scarf', 'coat']
}

export const winterOutfits = (days) => {
  let combos = [
    [winter.full[0], winter.tops[0], winter.footwear[0]], 
    [winter.full[0], winter.tops[1], winter.footwear[0]],
    [winter.tops[0], winter.bottoms[0], winter.accessories[0], winter.footwear[0]],
    [winter.tops[0], winter.bottoms[0], winter.accessories[1], winter.footwear[0]],
    [winter.tops[0], winter.bottoms[1], winter.accessories[0], winter.footwear[0]],
    [winter.tops[0], winter.bottoms[1], winter.accessories[1], winter.footwear[0]],
    [winter.full[0], winter.tops[0], winter.footwear[0]],
    [winter.full[0], winter.tops[0], winter.footwear[0]],
    [winter.full[0], winter.tops[0], winter.footwear[0]],
    [winter.full[0], winter.tops[0], winter.footwear[0]],
    [winter.full[0], winter.tops[0], winter.footwear[0]],
    [winter.full[0], winter.tops[0], winter.footwear[0]],
    [winter.full[0], winter.tops[0], winter.footwear[0]],
    [winter.full[0], winter.tops[0], winter.footwear[0]],
  ]
  return (combos.slice(days))
}

const springFall = {
  full: ['jumpsuit'],
  tops: ['long sleeved tee', 'blouse', 'button down'],
  bottoms: ['jeans / denim'],
  footwear: ['sneakers'],
  accessories: ['cardigan', 'light utility jacket / trenchcoat']
}

const summer = {
  full: ['dress'],
  tops: ['t-shirt', 'cami'],
  bottoms: ['shorts', 'skirt', 'wide, loose, light pants'],
  footwear: ['sandals / flipflops'],
  accessories: ['light shawl']
}

export const build = (temperature) => {
  let wardrobe = {full: [], tops: [], bottoms: [], footwear: [], accessories: []}
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