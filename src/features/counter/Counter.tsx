import React from 'react';
import { Iteam } from './Iteam';
import { SellCard } from './SellCard';
import { fetchData } from './CardsAPI';
import { useAppSelector ,useAppDispatch} from '../../app/hooks';
import { useEffect } from 'react';
import {loadMembersAsync,selectStatus} from './CardsSlice';

export const ShowCardList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadMembersAsync());
    });
    
  let cards: Iteam[] = useAppSelector(selectStatus);

  let urlParams: URLSearchParams = new URLSearchParams(window.location.search);
  let category: string | null = urlParams.get('category'); 

  let cardsArray:Iteam[];

  switch (category) {
    case 'All':
        cardsArray = cards;
        break;
    case "Basket":
        cardsArray = cards.filter(card => card.category == category);
        break;           
    default:      
        cardsArray = cards.filter(card => card.category == category);          
        break;
  } 
 

  const cardIteams = cardsArray.map(s => (<SellCard
    key={s.name}
    name={s.name}
    description={s.description}
    category={s.category}
    file={s.file}
   />));

   console.log(cardIteams);
    
  return (    
    <div className='container'>     
      {cardIteams}
    </div>        
  );
}
