import * as  React from 'react';
import { Text } from 'react-native';
import Dot from '../../components/Dot';
import Footer from '../../components/Footer';
import SizeItem from '../../components/SizeItem';
import {Container,Banner,Price,Title,DescriptionContainer,DotContainer,SizeContainer,TextContainer,DescriptionTitle,DescriptionText,Button, Line,SectionTitle} from './styles';

export default function Detail({navigation,route}) {


  React.useEffect(()=>{

    console.log(route)

    navigation.setOptions({
      headerTitle:route?.params?.title,
    })



  })
 return (
  <Container>

  <Banner source={require('../../assets/detail.png')}/>

  <DescriptionContainer>
  <Price>
  
  200 MT
  
  </Price>
  
  <Title>Mike Shock 10</Title>
  
  </DescriptionContainer>

  <DotContainer>

    <Dot color="blue"/>
    <Dot color="red" />
    <Dot color="gray"/>
    <Dot color="black"/>
    
  </DotContainer>
  
  <SizeContainer horizontal={true} alwaysBounceHorizontal={true} showsHorizontalScrollIndicator={false}>
  
  <SizeItem text={35} color="blue"/>
  <SizeItem text={38} color="red"/>
  <SizeItem text={40} color="gray"/>
  <SizeItem text={43} color="black"/>

  <SizeItem/>

  
  
  
  </SizeContainer>

  <TextContainer>
  <DescriptionTitle>
  Nike shoes dub edition 10
  </DescriptionTitle>
  
  <DescriptionText>Occaecat cillum aliqua incididunt commodo reprehenderit excepteur mollit. Elit minim ut irure sit magna Lorem. Qui commodo duis cupidatat aute laboris elit reprehenderit enim est culpa. Enim voluptate aliqua et elit cillum qui consequat tempor ad reprehenderit. Labore irure labore consequat duis tempor do.

Id do esse consequat ut occaecat ex dolor irure ea ea tempor. Duis veniam laborum exercitation dolore aliqua consequat deserunt adipisicing. Esse incididunt consequat consectetur labore culpa excepteur voluptate esse. Cillum reprehenderit ipsum exercitation voluptate nulla ipsum ex aute ad consequat quis fugiat ut. Reprehenderit quis nisi fugiat quis dolor non incididunt magna commodo aliquip sit exercitation est. Id minim amet sit occaecat Lorem veniam irure.

Enim mollit mollit excepteur deserunt excepteur adipisicing ex reprehenderit. Id non non non veniam officia officia proident commodo esse sint cillum nostrud anim excepteur. Proident aliquip incididunt eiusmod cupidatat Lorem sint irure incididunt. Mollit voluptate aute anim pariatur nostrud do dolore non esse nisi. Reprehenderit cupidatat voluptate excepteur officia ullamco qui laboris enim. Consectetur anim non incididunt exercitation nulla minim est adipisicing minim sint. Esse commodo Lorem pariatur duis non non magna.

Non elit reprehenderit labore cupidatat aliqua anim. Elit fugiat enim est fugiat laborum excepteur irure cillum irure. Consequat ex laboris commodo fugiat labore. Voluptate ipsum occaecat esse ullamco. Esse Lorem cillum excepteur adipisicing do fugiat Lorem amet aliqua cupidatat do excepteur. Sit Lorem qui nisi nisi.</DescriptionText>

<Button><Text style={{ color:'#FFF', fontSize: 16 }}>BUY</Text></Button>

  </TextContainer>

  <Line />

  <SectionTitle>You may enjoy this</SectionTitle>

  <Footer />
  </Container>
  );
}