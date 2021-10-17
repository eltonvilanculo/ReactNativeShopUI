import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`

width: 120px;
height: 50px;
margin-left: 8px;
align-items: center;
justify-content: center;
border-width: 1px;
border-color: #d8d8d8;
border-radius: 4px;
background-color: ${props=>props.color??'white'};


`;

export const Text = styled.Text`
font-size: 18px;
  /* ... */
`;
