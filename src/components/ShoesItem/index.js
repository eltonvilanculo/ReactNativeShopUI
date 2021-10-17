import React from 'react';
import { Container ,Banner,Title,Price,LeftItem,RightItem} from './styles';



export default function ShoesItem({img,title,price,showDetail}) {


  function filterText(text) {

    if(text.length<20){
      return text ;
    }else{
      return `${text.substring(0,18)}...`
    }
    
  }


 return (
   <Container>
   
   <LeftItem onPress={showDetail}>
        <Banner source={img}  />
        <Title>{filterText(title??'sem nome')}</Title>
        <Price>{price} MT</Price>
   </LeftItem>


   <RightItem onPress={showDetail}  >
   <Banner source={require('../../assets/1.png')}  />
   <Title>Nike Shok 10</Title>
   <Price>3700 MT</Price>
  </RightItem>
   
   </Container>
  );
}