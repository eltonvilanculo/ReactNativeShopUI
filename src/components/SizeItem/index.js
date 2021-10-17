import React from 'react';
import {Container,Text} from './styles'


export default function SizeItem({text,color}) {
 return (
    <Container color={color}>
    
   {color?( <Text style={{ color: 'white' }}>{text??34}</Text>):( <Text>{text??34}</Text>)}
    
    </Container>
  );
}