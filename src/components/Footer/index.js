import React from 'react';
import FooterItem from '../FooterItem';
import { Container,SectionContainer ,Title,Banner,Price} from './styles';

export default function Footer() {
 return (
   <Container horizontal showsHorizontalScrollIndicator={false}>
   
      
   <FooterItem title="Puma 2015" price={345}/>

   <FooterItem 
   image={require('../../assets/2.png')} 
   title="Puma 2018"
    price={345}/>

   <FooterItem 
   image={require('../../assets/4.png')} 
   title="Puma 2018"
    price={345}/>

   <FooterItem 
   image={require('../../assets/4.png')} 
   title="Puma 2018"
    price={345}/>

   <FooterItem 
   image={require('../../assets/5.png')} 
   title="Puma 2018"
    price={345}/>
 
   

      
   </Container>
  );
}