import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/tab-screen/Home';
import Profile from '../screens/tab-screen/Profile';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
