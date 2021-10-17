import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import {Feather} from '@expo/vector-icons'

const Stack = createNativeStackNavigator();


export default function Routes(){


    return(

       <NavigationContainer>
        
                    <Stack.Navigator>
                    
                        <Stack.Screen  
                        name="Home" 
                        component={Home}
                        options={{headerShown:false}}
                        />

                        <Stack.Screen 
                         name="Detail" 
                         component={Detail}
                         options={{ 
                             
                             headerRight:()=>(<Feather name="shopping-cart" color="#d8d8d8" size={24}/>)
                          }}
                        
                       
                         />
                    
                    </Stack.Navigator>
       
       
       </NavigationContainer>
    )
}