import * as React from 'react';
import {Container, Title,HeaderSection,Banner, HeaderCaptionSection,FilterButton,Line} from './styles'
import {MaterialIcons} from '@expo/vector-icons'
import { ScrollView } from 'react-native';
import ShoesItem from '../../components/ShoesItem';
import{useNavigation} from '@react-navigation/native';

export default function Home(props) {

  const navigation =  useNavigation();

  
 return (
 
    <Container>

      <HeaderSection>
      
        <Banner source={require('../../assets/banner.png')} />
        
      <HeaderCaptionSection>
      
      <Title>
        Shoes
      </Title>

      <Title style={{ color:'gray' }}>
    .
    </Title>

    <Title style={{ color:'gray' }}>
    Male
  </Title>

  <FilterButton>
  
      <MaterialIcons name="filter-list" color= "#000" size={24} />
  </FilterButton>
      
      </HeaderCaptionSection>
      </HeaderSection>
      <Line />

      <ScrollView>

      <Title>New</Title>
      
      <ShoesItem img={require('../../assets/2.png')} title="Nike retro gamming" price={9999} showDetail={()=>navigation.navigate('Detail',{title:"NK"})}/>
      <ShoesItem img={require('../../assets/3.png')} title="Nike retro gamming" price={9999} showDetail={()=>navigation.navigate('Detail',{title:"LK"})}/>
      <ShoesItem img={require('../../assets/4.png')} title="Nike retro gamming" price={9999} showDetail={()=>navigation.navigate('Detail',{title:"Mk"})}/>
      <ShoesItem img={require('../../assets/5.png')} title="Nike retro gamming" price={9999}/>
      <ShoesItem img={require('../../assets/6.png')} title="Nike retro gamming" price={9999}/>
     
      
      
      </ScrollView>
    </Container>
  );
}