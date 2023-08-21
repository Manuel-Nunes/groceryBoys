import { ListData } from '../types/types';
import { styled } from 'styled-components';

const ListDataBigBody = styled.div`
  display: grid;
  width: calc(100% - 4vw);
  padding: 0 2vw;
  grid-template-areas: 
    'TitleBar TitleBar TitleBar TitleBar TitleBar'
    'Store    Store    Price     Decrease Increase';
  
  border-top: 2px solid rgba(255, 255, 255, 1);
`;

const ItemNameDisplay = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
`;

const ItemName = styled( ItemNameDisplay )`
  grid-area: TitleBar;
  width: 100%;
`;

const ItemShop = styled.div`
  grid-area: Store;
  width: 100%;
  font-size: 1rem;
  align-self: center;
  font-weight: 300;
`;

const ItemPriceDisplay = styled.div`
  font-size: 1rem;
  font-weight: 300;
  align-self: center;
  grid-area: Price;
  width: 100%;
`;

const QuanityButton = styled.button`
  height: 70%;
  aspect-ratio: 1/1;
  width: auto;
  border: none;
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  align-self: center;
`;

// const DecreaseButton = styled( QuanityButton )`
//   grid-area: Decrease;
//   background-image: url('../Resources/ReduceItem.svg');
//   ${ props => props.decreaseEnable? '' : 'filter: grayscale(100%);' }
// `;

interface IncreaseButtonProps{
  increaseEnabled:boolean
}

// const IncreaseButton = styled<IncreaseButtonProps>( QuanityButton )`
const IncreaseButton = withProps<IncreaseButtonProps>()( QuanityButton )`
  grid-area: Increase;
  background-image: url('../Resources/IncreaseItem.svg');
  ${ props => props.increaseEnabled? '' : 'filter: grayscale(100%);' }
`;

interface listDataProps{
  listData: ListData,
  itemHeight?: string,
  BoughtPercentageFade?:number,
  increaseClick: ()=>void,
  decreaseClick: ()=>void,
  increaseEnabled: boolean,
  decreaseEnable: boolean
}

function ListItemDisplay( 
  {
    listData,
    itemHeight= '13%',
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
      style={
        {
          height:itemHeight,
          backgroundImage: `linear-gradient(90deg, var(--purchasedBack) 0% ${ boughtPercent }%, var(--remainBack) ${ boughtPercent+BoughtPercentageFade }% 100%)`
        }
      }
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
          listData?.price * listData.purchased
        }
      </ItemPriceDisplay>

      <DecreaseButton onClick={decreaseClick}/>
      
      <IncreaseButton onClick={increaseClick}/>

    </ListDataBigBody>
  );
}

export default ListItemDisplay;