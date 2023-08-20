import './ListItemDisplay.css';
import { ListData } from '../types/types';
import React from 'react';

interface listDataProps{
  listData: ListData,
  itemHeight?: string,
  BoughtPercentageFade?:number,
  increaseClick: ()=>void
}

function ListItemDisplay( 
  {
    listData,
    itemHeight= '13%',
    BoughtPercentageFade = 0,
    increaseClick
  }: listDataProps 
): JSX.Element {

  const boughtPercent = ( listData?.purchased / listData?.quantity*100 );

  return (
    <div 
      className='listDataBigBody'
      style={
        {
          height:itemHeight,
          backgroundImage: `linear-gradient(90deg, var(--purchasedBack) 0% ${ boughtPercent }%, var(--remainBack) ${ boughtPercent+BoughtPercentageFade }% 100%)`
        }
      }
    >
      <h1 className='itemNameDisplay' id='itemName'>
        { listData?.description}
      </h1>
      <h2 className='itemShopDisplay' id='itemShop'>
        {
          listData?.store
        }
      </h2>
      <h2 className='itemPriceDisplay' id='itemPrice'>
        R {' '}
        {
          listData?.price * listData.purchased
        }
      </h2>
      <button className='quanityButton' id='decreaseButton'></button>
      <button className='quanityButton' id='increaseButton' onClick={increaseClick}></button>
    </div>
  );
}

export default ListItemDisplay;