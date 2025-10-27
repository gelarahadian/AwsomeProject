import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/tab-screen/Home';
import Profile from '../screens/tab-screen/Profile';
import Ionicons from '@react-native-vector-icons/ionicons';
import Ticket from '../screens/tab-screen/Ticket';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = 'home';
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Ticket') {
            iconName = focused ? 'ticket' : 'ticket-outline';
          }
          return <Ionicons name={iconName as any} size={36} color={color} />;
        },
        tabBarActiveTintColor: 'rgba(255, 255, 255, 1)',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.5)',
        tabBarStyle: {
          backgroundColor: 'rgba(19, 30, 46, 1)',
          height: 84,
          paddingBottom: 0,
          paddingTop: 0,
        },
        tabBarItemStyle: {
          // backgroundColor: 'red',
          paddingVertical: 20,
        },
        tabBarIconStyle: {
          width: 36,
          height: 36,
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Ticket" component={Ticket} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
