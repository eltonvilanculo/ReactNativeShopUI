import styled from 'styled-components/native';

export const Container = styled.ScrollView `

flex: 1;
background-color: #fff;



`

export const Banner = styled.Image `

width: 100%;





`

export const DescriptionContainer = styled.View `


padding: 14px 8px;


`
export const DotContainer = styled.View `


flex-direction: row;


`
export const Price = styled.Text `
padding: 2px 0;
font-size: 24px;
font-family: Anton_400Regular;




`
export const Title = styled(Price) `
padding: 0 0;
color: gray;
font-size: 30px;




`

export const SizeContainer = styled.ScrollView`
  
  flex-direction: row;
  padding: 24px 8px 0 0;
`;

export const TextContainer = styled.View`
  padding: 24px 8px;
  
  /* ... */
`;
export const DescriptionTitle = styled.Text`
font-size: 24px;
font-weight: bold;
text-transform: uppercase;
  /* ... */
`;

export const DescriptionText = styled.Text`
  /* ... */
  font-size: 12px;
  text-align: justify;
  line-height: 18px;
 
`;

export const Button = styled.TouchableOpacity`
background-color: #000;
width: 80%;
padding: 18px 8px;
margin-top: 24px;
align-items: center;
justify-content: center;
border-radius: 7px;
align-self: center;
  /* ... */
`;




export const Line = styled.View`

border-width: 1px;
border-color: #000;
margin:24px 0 ;
`

export const SectionTitle = styled.Text`

padding: 2px 8px;
color: #000;
font-family: Anton_400Regular;
font-size: 24px;
text-transform: uppercase;

`;

   
