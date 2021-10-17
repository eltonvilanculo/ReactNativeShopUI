import React from 'react';
import { Container } from './styles';

export default function Dot({color}) {
 return (
   <Container color={color??'#000'}/>
   
 );
}