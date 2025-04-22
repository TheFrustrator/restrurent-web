import bg from '../assets/bg.png';
import chef from '../assets/chef.png';
import G from '../assets/G.png';
import gallery01 from '../assets/gallery01.png';
import gallery02 from '../assets/gallery02.png';
import gallery03 from '../assets/gallery03.png';
import gallery04 from '../assets/gallery04.png';
import knife from '../assets/knife.png';
import logo from '../assets/logo.png';
import menu from '../assets/menu.png';
import overlaybg from '../assets/overlaybg.png';
import spoon from '../assets/spoon.svg';
import welcome from '../assets/welcome.png';
import findus from '../assets/findus.png';
import laurels from '../assets/laurels.png';
import award01 from '../assets/award01.png';
import award02 from '../assets/award02.png';
import award03 from '../assets/award03.png';
import award05 from '../assets/award05.png';
import sign from '../assets/sign.png';
import quote from '../assets/quote.png';
import gericht from '../assets/gericht.png';
import meal from '../assets/meal.mp4';


export const assets= {
  bg,
  chef,
  G,
  gallery01,
  gallery02,
  gallery03,
  gallery04,
  knife,
  logo,
  menu,
  overlaybg,
  spoon,
  welcome,
  findus,
  laurels,
  award01,
  award02,
  award03,
  award05,
  sign,
  quote,
  gericht,
};

export const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

export const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

export const awards = [
  {
    imgUrl: assets.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: assets.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: assets.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: assets.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export { meal };
