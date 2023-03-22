export type ICaracteristic = {
  size: string;
  floors: number;
  bedrooms: number;
  bathrooms: number;
};
export type ILot = {
  id: number;
  name: string;
  status: "uninhabited" | "empty";
  img?: string;
  description: string;
  price: number;
  caracteristics: ICaracteristic;
  //
  neighborhood: number;
  world: number;
};
export const lots: ILot[] = [
  {
    id: 16,
    name: "Sandtrap Flat",
    status: "uninhabited",
    img: "https://static.wikia.nocookie.net/sims/images/4/41/Sandtrap_Flat.png",
    description: "",
    price: 16982,
    caracteristics: {
      size: "30x20",
      floors: 1,
      bedrooms: 1,
      bathrooms: 1,
    },
    neighborhood: 2,
    world: 0,
  },
  {
    id: 17,
    name: "Nookstone",
    status: "uninhabited",
    img: "https://static.wikia.nocookie.net/sims/images/0/0a/Nookstone.png",
    description: "",
    price: 13019,
    caracteristics: {
      size: "20x15",
      floors: 1,
      bedrooms: 1,
      bathrooms: 1,
    },
    neighborhood: 2,
    world: 0,
  },
  {
    id: 18,
    name: "Pebble Burrow",
    status: "empty",
    img: "https://static.wikia.nocookie.net/sims/images/1/10/Pebble_Burrow.png",
    description: "",
    price: 1500,
    caracteristics: {
      size: "30x20",
      floors: 0,
      bedrooms: 0,
      bathrooms: 0,
    },
    neighborhood: 2,
    world: 0,
  },
  {
    id: 20,
    name: "Agave Abode",
    status: "uninhabited",
    img: "https://static.wikia.nocookie.net/sims/images/1/12/Agave_Abode.png",
    description: "",
    price: 18239,
    caracteristics: {
      size: "20x15",
      floors: 1,
      bedrooms: 2,
      bathrooms: 1,
    },
    neighborhood: 2,
    world: 0,
  },
  {
    id: 21,
    name: "Vista Quarry",
    status: "uninhabited",
    img: "https://static.wikia.nocookie.net/sims/images/6/67/Vista_Quarry.png",
    description: "",
    price: 48023,
    caracteristics: {
      size: "30x20",
      floors: 1,
      bedrooms: 2,
      bathrooms: 1,
    },
    neighborhood: 3,
    world: 0,
  },
  {
    id: 22,
    name: "Raffia Quinta",
    status: "uninhabited",
    img: "https://static.wikia.nocookie.net/sims/images/d/df/Raffia_Quinta.png",
    description: "",
    price: 39072,
    caracteristics: {
      size: "20x15",
      floors: 1,
      bedrooms: 2,
      bathrooms: 2,
    },
    neighborhood: 3,
    world: 0,
  },
  {
    id: 23,
    name: "Dusty Turf",
    status: "empty",
    img: "https://static.wikia.nocookie.net/sims/images/f/fe/Dusty_Turf.png",
    description: "",
    price: 3500,
    caracteristics: {
      size: "30x20",
      floors: 0,
      bedrooms: 0,
      bathrooms: 0,
    },
    neighborhood: 3,
    world: 0,
  },
  {
    id: 24,
    name: "Springscape",
    status: "uninhabited",
    img: "https://static.wikia.nocookie.net/sims/images/8/89/Springscape.png",
    description: "",
    price: 64678,
    caracteristics: {
      size: "30x20",
      floors: 1,
      bedrooms: 3,
      bathrooms: 2,
    },
    neighborhood: 3,
    world: 0,
  },
  {
    id: 26,
    name: "Granada Place",
    status: "uninhabited",
    img: "https://static.wikia.nocookie.net/sims/images/a/ad/Granada_Place.png",
    description: "",
    price: 116860,
    caracteristics: {
      size: "30x20",
      floors: 2,
      bedrooms: 3,
      bathrooms: 3,
    },
    neighborhood: 4,
    world: 0,
  },
  {
    id: 27,
    name: "Arid Ridge",
    status: "empty",
    img: "https://static.wikia.nocookie.net/sims/images/3/35/Arid_Ridge.png",
    description: "",
    price: 5500,
    caracteristics: {
      size: "40x30",
      floors: 0,
      bedrooms: 0,
      bathrooms: 0,
    },
    neighborhood: 4,
    world: 0,
  },
  {
    id: 29,
    name: "Rio Verde",
    status: "uninhabited",
    img: "https://static.wikia.nocookie.net/sims/images/6/63/Rio_Verde.png",
    description: "",
    price: 175822,
    caracteristics: {
      size: "40x30",
      floors: 2,
      bedrooms: 5,
      bathrooms: 4,
    },
    neighborhood: 4,
    world: 0,
  },
  {
    id: 31,
    name: "Yuma Heights",
    status: "uninhabited",
    img: "https://static.wikia.nocookie.net/sims/images/6/64/Yuma_Heights_High_Quality.png",
    description: "",
    price: 311508,
    caracteristics: {
      size: "40x30",
      floors: 3,
      bedrooms: 4,
      bathrooms: 4,
    },
    neighborhood: 5,
    world: 0,
  },
  {
    id: 38,
    name: "Bargain Bend",
    status: "empty",
    img: "https://static.wikia.nocookie.net/sims/images/0/06/Bargain_Bend.png",
    description:
      "A sizeable Backwater lot, perfect for building your dream home.",
    price: 2000,
    caracteristics: {
      size: "30x20",
      floors: 0,
      bedrooms: 0,
      bathrooms: 0,
    },
    neighborhood: 9,
    world: 1,
  },
  {
    id: 39,
    name: "Streamlet Single",
    status: "uninhabited",
    img: "https://static.wikia.nocookie.net/sims/images/a/ae/Streamlet_Single.png",
    description: "",
    price: 15875,
    caracteristics: {
      size: "20x15",
      floors: 1,
      bedrooms: 1,
      bathrooms: 1,
    },
    neighborhood: 9,
    world: 1,
  },
  {
    id: 40,
    name: "Crick Cabana",
    status: "uninhabited",
    img: "https://static.wikia.nocookie.net/sims/images/c/cb/Crick_Cabana.png",
    description: "",
    price: 13418,
    caracteristics: {
      size: "20x15",
      floors: 1,
      bedrooms: 2,
      bathrooms: 1,
    },
    neighborhood: 9,
    world: 1,
  },
  {
    id: 41,
    name: "Daisy Hovel",
    status: "uninhabited",
    img: "https://static.wikia.nocookie.net/sims/images/6/6c/Daisy_Hovel.png",
    description: "",
    price: 16311,
    caracteristics: {
      size: "30x20",
      floors: 1,
      bedrooms: 1,
      bathrooms: 1,
    },
    neighborhood: 9,
    world: 1,
  },
  {
    id: 43,
    name: "Potters Splay",
    status: "empty",
    img: "https://static.wikia.nocookie.net/sims/images/9/9e/Potters_Splay.png",
    description:
      "With this large waterfront lot, your only limit is your imagination.",
    price: 2500,
    caracteristics: {
      size: "30x20",
      floors: 0,
      bedrooms: 0,
      bathrooms: 0,
    },
    neighborhood: 10,
    world: 1,
  },
  {
    id: 44,
    name: "Brook Bungalow",
    status: "uninhabited",
    img: "https://static.wikia.nocookie.net/sims/images/d/d6/Brook_Bungalow.png",
    description:
      "Built for outdoor living, this colonial features a wraparound porch and balcony.",
    price: 95721,
    caracteristics: {
      size: "40x30",
      floors: 2,
      bedrooms: 3,
      bathrooms: 2,
    },
    neighborhood: 10,
    world: 1,
  },
  {
    id: 45,
    name: "Riverside Roost",
    status: "uninhabited",
    img: "https://static.wikia.nocookie.net/sims/images/c/c1/Riverside_Roost.png",
    description:
      "This modified double shotgun has plenty of space for a comfort and entertaining.",
    price: 41329,
    caracteristics: {
      size: "30x20",
      floors: 2,
      bedrooms: 2,
      bathrooms: 2,
    },
    neighborhood: 10,
    world: 1,
  },
  {
    id: 47,
    name: "Rindle Rose",
    status: "uninhabited",
    img: "https://static.wikia.nocookie.net/sims/images/6/65/Rindle_Rose.png",
    description:
      'A cozy cottage with a welcoming porch that just screams, "RELAX!"',
    price: 36149,
    caracteristics: {
      size: "20x15",
      floors: 1,
      bedrooms: 2,
      bathrooms: 1,
    },
    neighborhood: 10,
    world: 1,
  },

  {
    id: 48,
    name: "Hallow Slough",
    status: "empty",
    img: "https://static.wikia.nocookie.net/sims/images/9/93/Hallow_Slough.png",
    description:
      "An expansive lot in a much-sought-after enclave, this is your potential paradise.",
    price: 5500,
    caracteristics: {
      size: "30x20",
      floors: 0,
      bedrooms: 0,
      bathrooms: 0,
    },
    neighborhood: 11,
    world: 1,
  },
  {
    id: 49,
    name: "Umbrage Manor",
    status: "uninhabited",
    img: "https://static.wikia.nocookie.net/sims/images/3/3c/Umbrage_manor.png",
    description:
      "A huge colonial with lovely grounds, this home is sure to impress.",
    price: 157882,
    caracteristics: {
      size: "40x30",
      floors: 2,
      bedrooms: 3,
      bathrooms: 2,
    },
    neighborhood: 11,
    world: 1,
  },
  {
    id: 50,
    name: "Parkshore",
    status: "uninhabited",
    img: "https://static.wikia.nocookie.net/sims/images/f/f4/Parkshore.png",
    description:
      "A large, traditional home with verandas and balconies galore.",
    price: 105336,
    caracteristics: {
      size: "40x30",
      floors: 2,
      bedrooms: 4,
      bathrooms: 3,
    },
    neighborhood: 11,
    world: 1,
  },
  {
    id: 52,
    name: "Oakenstead",
    status: "uninhabited",
    img: "https://static.wikia.nocookie.net/sims/images/2/2c/Oakenstead.png",
    description:
      "A large property with classical styling, this is the quintessential Garden Estates home.",
    price: 253863,
    caracteristics: {
      size: "50x50",
      floors: 2,
      bedrooms: 4,
      bathrooms: 3,
    },
    neighborhood: 12,
    world: 1,
  },
];

export type INeighborhood = {
  id: number;
  name: string;
  description: string;
  //
  world: number;
  lots: number[];
};
export const neighborhoods: INeighborhood[] = [
  {
    id: 2,
    name: "Bedrock Strait",
    description:
      "Residents of this delightfully kitschy neighborhood take pride in their billboards and lawn gnomes. And who wouldn't love getting to say hello to Barry the Brontosaurus every morning?",
    world: 0,
    lots: [16, 17, 18, 20],
  },
  {
    id: 3,
    name: "Parched Prospect",
    description:
      "This neighborhood is your quintessiential desert-living experience with bustling tumbleweeds and cacti as far as the eye can see!",
    world: 0,
    lots: [21, 22, 23, 24],
  },
  {
    id: 4,
    name: "Skyward Palms",
    description:
      "This upscale gated community offers its residents all the warm, wild benefits of living in the desert along with the luxury of endless green grass.",
    world: 0,
    lots: [27, 29],
  },
  {
    id: 5,
    name: "Acquisition Butte",
    description:
      "Residents of Acquisition Butte are paying premium for the gorgeous, rocky overlook and the sweet sound of solitude.",
    world: 0,
    lots: [31],
  },
  {
    id: 9,
    name: "Foundry Cove",
    description:
      "Located in southern Willow Creek Foundry Cove has lots of character (and its share of characters). Residents enjoy modest homes with a canal nearby for fishing, and a charming, active railroad. ",
    world: 1,
    lots: [38, 39, 40, 41],
  },
  {
    id: 10,
    name: "Coutyard Lane",
    description:
      "Courtyard Lane offers affordable homes for the upwardly mobile set. Classic styling mingles with larger shotguns and more expansive homes. ",
    world: 1,
    lots: [43, 44, 45, 47],
  },
  {
    id: 11,
    name: "Pendula View",
    description:
      "This historical section of Willow Creek, the Garden Community boasts large mansions and the cache that comes with living in them. ",
    world: 1,
    lots: [48, 49, 50],
  },
  {
    id: 12,
    name: "Sage Estates",
    description:
      "Willow Creek's most desirable area, Sage Estates features large, sprawling estates, lush landscaping, and the best high society as to offer.",
    world: 1,
    lots: [51],
  },
];

export type IWorld = {
  id: number;
  name: string;
  //
  neighborhoods: number[];
  lots: number[];
};
export const worlds: IWorld[] = [
  {
    id: 0,
    name: "Oasis Spring",
    neighborhoods: [2, 3, 4, 5],
    lots: [16, 17, 18, 20, 21, 22, 23, 24, 26, 27, 29, 31],
  },
  {
    id: 1,
    name: "Willow Creek",
    neighborhoods: [9, 10, 11, 12],
    lots: [38, 39, 40, 41, 43, 44, 45, 47, 48, 49, 50, 52],
  },
];
