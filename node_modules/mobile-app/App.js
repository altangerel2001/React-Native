import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './source/screen/Home';
import DetailScreen from './source/screen/Details';
import DetailScreen2 from './source/screen/Details2';
import { SafeAreaView } from 'react-native-safe-area-context';
import AimagList from './source/screen/AimagList';
const Stack = createNativeStackNavigator();
function App() {
 return (
 <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="НҮҮР" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
      <Stack.Screen name="Details2" component={DetailScreen2} />
      <Stack.Screen name="AimagList" component={AimagList} />

    </Stack.Navigator>
 </NavigationContainer>
 );
}
export default App