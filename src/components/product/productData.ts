import { IProduct } from "../interfaces/product.dao";

import bag1Image from '../img/products/bag_1.jpg';
import bag2Image from '../img/products/bag_2.jpg';
import bag3Image from '../img/products/bag_3.jpg';
import bag4Image from '../img/products/bag_4.jpg';
import wallet1Image from '../img/products/wallet_1.jpg';
import wallet2Image from '../img/products/wallet_2.jpg';
import belt1Image from '../img/products/belt_1.jpg';
import belt2Image from '../img/products/belt_2.jpg';

export const products: IProduct[] = [
  {
    id: 1,
    name: "Сумка 'Елегантна східниця'",
    description: "Ручна робота, виконана з якісної натуральної шкіри. Класичний стиль з орнаментом східного мистецтва.",
    price: 150,
    image: bag4Image,
    size: "small", 
    color: "broun",
  },
  {
    id: 2,
    name: "Гаманець 'Грандіозна легкість'",
    description: "Легкий і стильний гаманець, де кожна деталь виготовлена з міцної шкіри вручну.",
    price: 80,
    image: wallet1Image,
    size: "small", 
    color: "brown",
  },
  {
    id: 3,
    name: "Ремінь 'Збалансований стиль'",
    description: "Елегантний ремінь, яка додає особливий шарм.",
    price: 60,
    image: belt1Image,
    size: "small", 
    color: "brown",
  },
    {
      id: 4,
      name: "Сумка 'Літня свіжість'",
      description: "Стильна сумка для літнього сезону з відкритим дизайном.",
      price: 90,
      image: bag2Image,
      size: "medium", 
      color: "black",
    },
    {
      id: 5,
      name: "Гаманець 'Колорит'",
      description: "Гаманець з яскравим кольоровим малюнком.",
      price: 40,
      image: wallet2Image,
      size: "small", 
      color: "black, broun, purple",
    },
    {
      id: 6,
      name: "Ремінь 'Зимовий шарм'",
      description: "Елегантний ремінь на зимовий період.",
      price: 70,
      image: belt2Image,
      size: "medium", 
      color: "broun",
    },
    {
      id: 7,
      name: "Сумка 'Офісний стиль'",
      description: "Шкіряна сумка в офісному стилі з багатофункціональними відділеннями для документів та гаджетів.",
      price: 180,
      image: bag1Image,
      size: "big", 
      color: "black",
    },
    {
      id: 8,
      name: "Сумка 'Класична елегантність'",
      description: "Класична шкіряна сумка для офісу зі знімною ручкою.",
      price: 160,
      image: bag3Image,
      size: "big", 
      color: "broun",
    }
  ];
  