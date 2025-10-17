import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../../screens/StartScreen';
import DrawerNavigator from './DrawerNavigator';
import DetailExample from '../../screens/detail/DetailExample';
import DetailExample2 from '../../screens/detail/DetailExample2';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="StartScreen">
      <Stack.Screen
        options={{ headerShown: false }}
        name="StartScreen"
        component={StartScreen}
      />
      <Stack.Screen name="Main" component={DrawerNavigator} />
      <Stack.Screen name="DetailExample" component={DetailExample} />
      <Stack.Screen name="DetailExample2" component={DetailExample2} />
    </Stack.Navigator>
  );
};
