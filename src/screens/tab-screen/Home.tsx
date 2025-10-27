import FontAwesome5 from '@react-native-vector-icons/fontawesome5';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import Ionicons from '@react-native-vector-icons/ionicons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

type RootStackParamList = {
  Home: undefined;
  DetailExample: {
    id: number;
    place: string;
    image: string;
    country: string;
    rating: number;
    price: number;
    description: string;
  };
  DetailExample2: { data: any };
};

type DetailNavigationProps = NavigationProp<
  RootStackParamList,
  'DetailExample'
>;

const Home = () => {
  const navigation = useNavigation<DetailNavigationProps>();
  const [likes, setLikes] = useState<number[]>([]);

  const destinations = [
    {
      id: 1,
      place: 'Labuan Bajo',
      image:
        'https://expatindonesia.id/wp-content/uploads/2025/02/pexels-javaistan-15879944-scaled.jpg',
      country: 'Indonesia',
      rating: 5.0,
      price: 4000,
      description:
        'From crystal-clear waters to breathtaking sunsets, Labuan Bajo is calling! Explore hidden islands, swim with manta rays, and create memories that last a lifetime.',
    },
    {
      id: 2,
      place: 'Bali',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
      country: 'Indonesia',
      rating: 4.9,
      price: 3500,
      description:
        'Experience the magical island of Bali, from serene temples to vibrant beaches. A paradise for culture, surf, and relaxation lovers alike.',
    },
    {
      id: 3,
      place: 'Kyoto',
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
      country: 'Japan',
      rating: 4.8,
      price: 4200,
      description:
        'Step into the timeless beauty of Kyoto — a blend of ancient shrines, cherry blossoms, and peaceful zen gardens.',
    },
    {
      id: 4,
      place: 'Santorini',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
      country: 'Greece',
      rating: 4.9,
      price: 5200,
      description:
        'Famous for its whitewashed houses and blue-domed roofs, Santorini offers one of the most romantic sunsets in the world.',
    },
    {
      id: 5,
      place: 'Paris',
      image:
        'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1600&q=80',
      country: 'France',
      rating: 4.7,
      price: 4800,
      description:
        'The city of love awaits — stroll along the Seine, climb the Eiffel Tower, and indulge in fine pastries at cozy cafés.',
    },
    {
      id: 6,
      place: 'Swiss Alps',
      image:
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80',
      country: 'Switzerland',
      rating: 5.0,
      price: 6500,
      description:
        'Embrace the snow-capped peaks of the Swiss Alps — perfect for skiing, hiking, and witnessing nature at its finest.',
    },
    {
      id: 7,
      place: 'Cappadocia',
      image:
        'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=1600&q=80',
      country: 'Turkey',
      rating: 4.9,
      price: 4300,
      description:
        'Float above fairy chimneys in a hot air balloon and explore the cave cities of this otherworldly Turkish wonder.',
    },
    {
      id: 8,
      place: 'Maldives',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
      country: 'Maldives',
      rating: 5.0,
      price: 7500,
      description:
        'Crystal-clear lagoons and luxurious villas above turquoise waters — the Maldives are the definition of paradise.',
    },
    {
      id: 9,
      place: 'Seoul',
      image:
        'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=1600&q=80',
      country: 'South Korea',
      rating: 4.6,
      price: 3900,
      description:
        'A vibrant mix of tradition and technology — explore palaces, street food, and neon-lit nights in Seoul.',
    },
    {
      id: 10,
      place: 'Dubai',
      image:
        'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1600&q=80',
      country: 'United Arab Emirates',
      rating: 4.8,
      price: 5800,
      description:
        'Where luxury meets innovation — from towering skyscrapers to golden deserts, Dubai redefines modern travel.',
    },
  ];

  const handleLike = (id: number) => {
    if (likes.includes(id)) {
      setLikes(likes.filter(likeId => likeId !== id));
    } else {
      setLikes(prev => [...prev, id]);
    }
  };
  console.log(likes);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'rgba(243, 242, 231, 1)',
        marginHorizontal: 24,
      }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          marginTop: 76,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 300 }}>
          Hi,{'\n'}
          <Text style={{ fontWeight: 600 }}>Gelar</Text>
        </Text>
        <View style={{ position: 'relative' }}>
          <Ionicons name="heart" size={36} color={'rgba(255, 112, 67, 1)'} />
          <View
            style={{
              position: 'absolute',
              bottom: 4,
              right: 0,
              borderRadius: 999,
              backgroundColor: '#000',
              width: 16,
              height: 16,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white', fontSize: 10 }}>{likes.length}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 24,
          backgroundColor: 'rgba(255, 112, 67, 1)',
          borderRadius: 24,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 16,
        }}
      >
        <Text
          style={{ color: 'white', fontSize: 40, fontWeight: 600, flex: 1 }}
        >
          Plan Your Summer!
        </Text>
        <TouchableOpacity
          style={{
            height: 112,
            width: 48,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
          }}
        >
          <FontAwesome6
            name="arrow-right"
            size={24}
            color="white"
            iconStyle="solid"
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 16, flexDirection: 'row', gap: 12 }}>
        <View
          style={{
            backgroundColor: 'rgba(234, 232, 211, 1)',
            borderRadius: 999,
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderWidth: 1,
            borderColor: 'rgba(0, 0, 0, 0.05)',
            gap: 12,
          }}
        >
          <Ionicons name="search" size={24} />
          <TextInput
            placeholder="Enter Destination..."
            placeholderTextColor="#777"
            style={{ flex: 1 }}
          />
        </View>
        <View>
          <TouchableOpacity
            style={{
              padding: 16,
              backgroundColor: 'rgba(19, 30, 46, 1)',
              borderRadius: 999,
            }}
          >
            <Ionicons name="menu-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginTop: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 600 }}>
          Popular Destination
        </Text>
        <TouchableOpacity>
          <Text style={{ fontWeight: 400, color: 'rgba(0, 0, 0, 0.6)' }}>
            View All
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ gap: 16, marginTop: 24, marginBottom: 16 }}>
        {destinations.map((destination, i) => (
          <TouchableOpacity
            key={destination.id}
            onPress={() => navigation.navigate('DetailExample', destination)}
          >
            <ImageBackground
              source={{
                uri: destination.image,
              }}
              style={{ height: 225 }}
              imageStyle={{ borderRadius: 24 }}
            >
              <LinearGradient
                colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)']}
                style={{ borderRadius: 24, height: '100%' }}
              >
                <View
                  style={{ justifyContent: 'space-between', height: '100%' }}
                >
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      padding: 12,
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        padding: 8,
                        backgroundColor: 'rgba(0,0,0,0.1)',
                        borderRadius: 999,
                      }}
                      onPress={() => handleLike(destination.id)}
                    >
                      <Ionicons
                        name={
                          likes.includes(destination.id)
                            ? 'heart'
                            : 'heart-outline'
                        }
                        size={20}
                        color={'white'}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      padding: 24,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          gap: 4,
                          alignItems: 'center',
                        }}
                      >
                        <FontAwesome5
                          name="map-marker-alt"
                          iconStyle="solid"
                          color={'white'}
                          size={14}
                        />
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 12,
                            fontWeight: 400,
                          }}
                        >
                          {destination.country}
                        </Text>
                      </View>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 16,
                          fontWeight: 600,
                        }}
                      >
                        {destination.place}
                      </Text>
                    </View>
                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-end',
                          alignItems: 'center',
                          gap: 1,
                        }}
                      >
                        <FontAwesome5 name="star" color={'white'} />
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 14,
                            fontWeight: 600,
                          }}
                        >
                          {destination.rating}
                        </Text>
                      </View>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 16,
                          fontWeight: 600,
                        }}
                      >
                        ${destination.price}
                        <Text style={{ fontWeight: 400 }}>/pax</Text>
                      </Text>
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;
