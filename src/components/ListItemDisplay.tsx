import {
  ListData
} from '../types/types';

import styled from 'styled-components';

import '../global.css';

interface ListDataBigBodyProps {
  $height?: string,
  $backgroundImage?: string
}

const ListDataBigBody = styled.div<ListDataBigBodyProps>`
${
  ( {
    $height,
    $backgroundImage
  } ) => `
      ${ $height && `height: ${ $height };` }
      ${ $backgroundImage && `background-image: ${ $backgroundImage };` }
    `
}
  display: grid;
  width: calc(100% - 4vw);
  padding: 1vh 2vw;
  grid-template-columns: repeat(10, 1fr);
  grid-row-gap: 1vh;
  grid-template-areas:
    'TitleBar TitleBar TitleBar TitleBar TitleBar TitleBar TitleBar TitleBar TitleBar TitleBar'
    'Store  Store  Store  Store  Price  Price  Price  CountHolder  CountHolder  DIHolder';

  border-top: 2px solid rgba(255, 255, 255, 1);
`;

const ItemNameDisplay = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
`;

const ItemName = styled( ItemNameDisplay )`
  background-color: rgba(128, 0, 128,  var(--showDebugBackgrounds));
  grid-area: TitleBar;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SubItemBase = styled.div`
  display: flex;
  align-items: center;
  height: 2em;

  border-right: 2px solid rgba(255, 255, 255, 1);
  padding: 0 1vw;

  box-sizing: border-box;

  @media screen and (min-width: 400px) {
    font-size: 1.2em;
  }
`;

const DecIncHolder =styled( SubItemBase )`
  background-color: rgba(255, 0, 0, var(--showDebugBackgrounds));
  grid-area: DIHolder;
`;

const CountHolder = styled( SubItemBase )`
  background-color: rgb(0, 255, 0,  var(--showDebugBackgrounds));
  grid-area: CountHolder;
`;

const ItemShop = styled( SubItemBase )`
  background-color: rgba(0, 0, 255, var(--showDebugBackgrounds));
  grid-area: Store;
`;

const ItemPriceDisplay = styled( SubItemBase )`
  grid-area: Price;
  background-color: rgba(0, 255, 255, var(--showDebugBackgrounds));
`;

interface ButtonProps{
  $enabled:boolean // Needs to be transient name
}

const QuanityButton = styled.button<ButtonProps>`
  height: 100%;
  aspect-ratio: 1/1;
  width: auto;
  border: none;
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  align-self: center;
  ${ ( {$enabled} ) => $enabled ? '' : 'filter: grayscale(100%);' }
  `;

const DecreaseButton = styled( QuanityButton )`
  grid-area: Decrease;
  background-image: url('../Resources/ReduceItem.svg');
  max-width: 50px;
  max-height: 50px;
`;

const IncreaseButton = styled( QuanityButton )`
  grid-area: Increase;
  background-image: url('../Resources/IncreaseItem.svg');
  max-width: 50px;
  max-height: 50px;
`;

interface listDataProps{
  listData: ListData,
  itemHeight?: string,
  BoughtPercentageFade?:number,
  increaseClick: ()=>void,
  decreaseClick: ()=>void,
  increaseEnabled?: boolean,
  decreaseEnable?: boolean
}

function ListItemDisplay(
  {
    listData,
    itemHeight= '18%',
    BoughtPercentageFade = 0,
    increaseClick,
    decreaseClick,
    increaseEnabled = true,
    decreaseEnable = true
  }: listDataProps
): JSX.Element {

  const boughtPercent = ( listData?.purchased / listData?.quantity*100 );

  return (

    <ListDataBigBody
      $height={itemHeight}
      $backgroundImage={ `linear-gradient(90deg, var(--purchasedBack) 0% ${ boughtPercent }%, var(--remainBack) ${ boughtPercent+BoughtPercentageFade }% 100%)` }
    >
      <ItemName>
        { listData?.description}
      </ItemName>

      <ItemShop>
        {
          listData?.store
        }
      </ItemShop>

      <ItemPriceDisplay>
        R {' '}
        {
          `${ Math.ceil( listData?.price * listData.purchased ) } / ${ Math.ceil( listData.price* listData.quantity ) }`
        }
      </ItemPriceDisplay>
      <CountHolder>
        {
          `${ listData?.purchased } / ${ listData?.quantity }`
        }
      </CountHolder>

      <DecIncHolder>

        <DecreaseButton onClick={decreaseClick} $enabled={ decreaseEnable }/>

        <IncreaseButton onClick={increaseClick} $enabled={ increaseEnabled } />

      </DecIncHolder>

    </ListDataBigBody>
  );
}

export default ListItemDisplay;
