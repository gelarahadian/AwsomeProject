import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type RootStackParamList = {
  Home: undefined;
  DetailExample: { message: string };
  DetailExample2: { data: any };
};

type DetailNavigationProps = NavigationProp<
  RootStackParamList,
  'DetailExample'
>;

const datas = [
  {
    id: 1,
    name: 'Jhon Doe 1',
    age: 25,
  },
  {
    id: 2,
    name: 'Jhon Doe 2',
    age: 26,
  },
  {
    id: 3,
    name: 'Jhon Doe 3',
    age: 27,
  },
];

const Home = () => {
  const navigation = useNavigation<DetailNavigationProps>();

  const handleGoToDetail = () => {
    navigation.navigate('DetailExample', { message: 'INI VALUE DARI HOME' });
  };

  const handleGoToDetail2 = (id: number) => {
    const data = datas.find(item => item.id === id);
    navigation.navigate('DetailExample2', { data: data });
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Home</Text>
      <TouchableOpacity onPress={handleGoToDetail}>
        <Text
          style={{
            color: 'blue',
            marginTop: 20,
            fontSize: 20,
          }}
        >
          Go To Detail
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
