import styled from 'styled-components/native';
import {Dimensions} from 'react-native' 

export const Container = styled.View`
background-color: ${(props) => props.color};
width: ${Dimensions.get('window').width * 0.050}px;
height: ${Dimensions.get('window').width * 0.050}px;
border-radius:  ${Dimensions.get('window').width * 0.050/2}px;
margin-left: 8px;




`;