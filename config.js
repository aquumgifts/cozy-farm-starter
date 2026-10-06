// Cozy Farm Starter — game configuration.
// Edit this file to change the map, the crops, the prices and the texts.
// The engine (index.html) reads everything from window.FARM.

window.FARM = {
  title: "Cozy Farm Starter",

  // Where the "Get the full Cozy Farm" buttons point.
  fullPackUrl: "https://aquumgifts.itch.io/cozy-farm",

  startCoins: 20,
  goalCoins: 100, // a small message appears when you reach it

  // Crops. Each one needs:
  //   strip: a 4-frame strip (seeds, sprout, growing, ready), 16 x 16 per frame
  //   icon:  the inventory icon of the harvest
  //   seedPrice / sellPrice in coins
  //   daysPerStage: watered days needed to move to the next stage
  // To add a crop from the full Cozy Farm (potato, corn, pumpkin, strawberry,
  // cabbage, turnip, sunflower), copy its strip and icon into assets/ and add a line.
  crops: {
    carrot: { name: "Carrot", strip: "crops/carrot-stages", icon: "items/carrot", seedPrice: 2, sellPrice: 6, daysPerStage: 1 },
    wheat:  { name: "Wheat",  strip: "crops/wheat-stages",  icon: "items/wheat",  seedPrice: 1, sellPrice: 4, daysPerStage: 1 },
    tomato: { name: "Tomato", strip: "crops/tomato-stages", icon: "items/tomato", seedPrice: 4, sellPrice: 15, daysPerStage: 2 },
  },

  // The map, one character per 16 x 16 tile.
  //   .  grass            ,  grass with flowers (random variant)
  //   p  dirt path (autotiles)
  //   #  field: grass you can till with the hoe
  //   s  field that starts tilled
  //   f  fence (connects by itself)     g  gate (you can walk through)
  //   T  oak tree (the trunk sits on this tile)
  //   r  rock   b  bush   w  flowers   h  hay bale
  //   S  shipping crate: put your harvest in, then end the day
  //   B  seed barrel: buy seeds
  //   c  a chicken      @  player start
  map: [
    "..T.....,......T.......T.....,",
    ".......b.............,......T.",
    "..,....ffffffffffffffff.......",
    ".......fsss##########sf..b....",
    "..T....fsss##########sf.......",
    ".......f##############f...,...",
    ".....b.f##############f..T....",
    ".......f##############f.......",
    "..,....fffffffgffffffff....b..",
    ".rr...........p...............",
    "....pppppppppppppppppppppp....",
    "....p.....h.....@......h.p.,..",
    ".T..p...S..B.....c.........p..",
    "....p..............c...w..p...",
    "..,.p..w....c.......b.....p.T.",
    "....pppppppppppppppppppppppp..",
    ".b......T......,.......r......",
  ],

  // Texts shown in the game (keep them short: the screen is 320 x 180).
  texts: {
    hello: "Till, plant, water, harvest. Ship it in the crate!",
    tooTired: "It's late. Ship your harvest in the crate to end the day.",
    noSeeds: "No seeds. Buy some at the barrel.",
    noMoney: "Not enough coins.",
    needWater: "Water it every day to help it grow.",
    goal: "100 coins! Your farm is growing.",
  },
};
