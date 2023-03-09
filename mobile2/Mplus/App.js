import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './source/screens/Home';
import DetailScreen from './source/screens/details';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
function App() {
 return (
 <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="НҮҮР" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
 </NavigationContainer>
 );
}
export default App