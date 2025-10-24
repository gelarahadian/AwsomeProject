import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../screens/StartScreen';
import DrawerNavigator from './DrawerNavigator';
import DetailExample from '../screens/detail/DetailExample';
import DetailExample2 from '../screens/detail/DetailExample2';

export type RootStackParamList = {
  StartScreen: undefined;
  Main: undefined;
  DetailExample: undefined;
  DetailExample2: { itemId?: number; itemName?: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

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

export default AppNavigator;
