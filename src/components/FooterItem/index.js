import React from 'react';
import { Container,Banner,Title ,Price} from './styles';

export default function FooterItem({image,title,price}) {
 return (
    <Container>
        
    <Banner source={image??require('../../assets/1.png')}/>
    <Title>{title??'Nike puma 2018'}</Title>
    <Price>{price??350} MT</Price>

</Container>
  );
}