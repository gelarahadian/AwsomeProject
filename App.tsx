import { BlurView } from '@react-native-community/blur';
import FontAwesome5 from '@react-native-vector-icons/fontawesome5';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import Ionicons from '@react-native-vector-icons/ionicons';
import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  const reviews = [
    {
      image:
        'https://cdnpro.eraspace.com/media/mageplaza/blog/post/e/z/ezgif-3-b44f9f9872.jpg',
      name: 'Rifki startboy',
      review:
        'Wow amazing yahh, best experience in my life very very worth it i like it! Very good very well',
    },
    {
      image:
        'https://cdnpro.eraspace.com/media/mageplaza/blog/post/e/z/ezgif-3-b44f9f9872.jpg',
      name: 'Rifki startboy',
      review:
        'Wow amazing yahh, best experience in my life very very worth it i like it! Very good very well',
    },
    {
      image:
        'https://cdnpro.eraspace.com/media/mageplaza/blog/post/e/z/ezgif-3-b44f9f9872.jpg',
      name: 'Rifki startboy',
      review:
        'Wow amazing yahh, best experience in my life very very worth it i like it! Very good very well',
    },
  ];

  const recommendations = [
    {
      image:
        'https://indonesiajuara.asia/wp-content/uploads/2022/08/mutiara-phinisi-private-trip.webp',
      title: 'Phinisi Luxury Private Trip',
      place:
        'Complimentary pick-up from Labuan Bajo Airport or surrounding hotels',
      rating: '4,8',
      price: 3000,
    },
    {
      image:
        'https://indonesiajuara.asia/wp-content/uploads/2022/08/mutiara-phinisi-private-trip.webp',
      title: 'Phinisi Luxury Private Trip',
      place:
        'Complimentary pick-up from Labuan Bajo Airport or surrounding hotels',
      rating: '4,8',
      price: 3000,
    },
    {
      image:
        'https://indonesiajuara.asia/wp-content/uploads/2022/08/mutiara-phinisi-private-trip.webp',
      title: 'Phinisi Luxury Private Trip',
      place:
        'Complimentary pick-up from Labuan Bajo Airport or surrounding hotels',
      rating: '4,8',
      price: 3000,
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.root}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 164 }}
      >
        <View style={styles.head}>
          <View>
            <TouchableOpacity style={styles.backButton}>
              <FontAwesome6
                name="arrow-left"
                size={24}
                color="white"
                iconStyle="solid"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.weatherContainer}>
            <Ionicons name="sunny" size={28} color="white" />
            <Text style={styles.textWeather}>24&#176;C</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri: 'https://apimice.kemenparekraf.go.id/event-daerah/public/676/51a/91c/67651a91cea01794022154.webp',
          }}
          style={styles.background}
        >
          <LinearGradient
            colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.3)']}
            style={styles.gradient}
          >
            <View style={styles.content}>
              <View style={styles.containerRating}>
                <FontAwesome6
                  name="star"
                  size={16}
                  color="white"
                  iconStyle="solid"
                />
                <Text style={styles.textRating}>5.0</Text>
              </View>
              <Text style={styles.heading}>Labuan Bajo</Text>
              <Text style={styles.paragraph}>
                From crystal-clear waters to breathtaking sunsets, Labuan Bajo
                is calling! Explore hidden islands, swim with manta rays, and
                create memories that last a lifetime
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>
        <View style={styles.container}>
          <View style={{ marginTop: 36 }}>
            <View
              style={{
                flexDirection: 'row',
                gap: 2,
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <ImageBackground
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG52QdAD8gCXjQSqT_oLNiXhuz0zCWIXXeZg&s',
                }}
                style={{
                  width: 16,
                  height: 16,
                }}
                imageStyle={{
                  borderRadius: 999,
                  borderWidth: 1,
                }}
              />
              <Text
                style={{
                  fontWeight: 600,
                  fontSize: 12,
                  color: 'rgba(0, 0, 0, 0.6)',
                }}
              >
                Indonesia
              </Text>
            </View>
            <View>
              <Text style={{ fontWeight: 600, fontSize: 20 }}>
                Discover the Beauty of Labuan Bajo
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 24, gap: 12 }}>
            {reviews.map((review, i) => (
              <View
                key={i}
                style={{
                  backgroundColor: 'white',
                  padding: 12,
                  borderRadius: 16,
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 2,
                    alignItems: 'center',
                    marginBottom: 8,
                  }}
                >
                  <ImageBackground
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG52QdAD8gCXjQSqT_oLNiXhuz0zCWIXXeZg&s',
                    }}
                    style={{
                      width: 20,
                      height: 20,
                    }}
                    imageStyle={{
                      borderRadius: 999,
                      borderWidth: 1,
                    }}
                  />
                  <Text
                    style={{
                      fontWeight: 600,
                      fontSize: 12,
                      color: 'rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    By Rifqi starboy
                  </Text>
                </View>
                <View>
                  <Text style={{ fontWeight: 400, fontSize: 12 }}>
                    Wow amazing yahh, best experience in my life very very worth
                    it i like it! Very good very well
                  </Text>
                </View>
              </View>
            ))}
          </View>
          <View style={{ marginTop: 16 }}>
            <Text style={{ fontSize: 16, fontWeight: 600 }}>
              Recommendation in Bajo
            </Text>
            <View style={{ marginTop: 16, gap: 12 }}>
              {recommendations.map((recommendation, i) => (
                <View
                  key={i}
                  style={{
                    borderRadius: 24,
                    padding: 8,
                    flexDirection: 'row',
                    gap: 12,
                    backgroundColor: 'rgba(19, 30, 46, 1)',
                  }}
                >
                  <ImageBackground
                    source={{
                      uri: recommendation.image,
                    }}
                    style={{ width: 148, height: 130 }}
                    imageStyle={{ borderRadius: 16 }}
                  ></ImageBackground>
                  <View>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 16,
                        fontWeight: 600,
                        marginBottom: 8,
                      }}
                    >
                      {recommendation.title}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 4,
                        marginBottom: 8,
                      }}
                    >
                      <FontAwesome5
                        name="map-marker-alt"
                        size={12}
                        color="white"
                        iconStyle="solid"
                      />
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 12,
                          fontWeight: 400,
                        }}
                      >
                        {recommendation.place}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 4,
                        marginBottom: 8,
                      }}
                    >
                      <FontAwesome6
                        name="star"
                        size={12}
                        color="white"
                        iconStyle="solid"
                      />
                      <Text
                        style={{ color: '#fff', fontSize: 12, fontWeight: 600 }}
                      >
                        {recommendation.rating}
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 14,
                        fontWeight: 400,
                        marginBottom: 8,
                      }}
                    >
                      <Text style={{ fontWeight: 600 }}>
                        ${recommendation.price}{' '}
                      </Text>
                      /night
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <BlurView
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 24,
          paddingVertical: 20,
        }}
        blurType="regular"
        blurAmount={36}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', gap: 24, alignItems: 'center' }}>
            <View>
              <TouchableOpacity
                style={{
                  padding: 4,
                  backgroundColor: 'rgba(255, 112, 67, 1)',
                  borderRadius: 999,
                }}
              >
                <FontAwesome6
                  name="plus"
                  size={16}
                  iconStyle="solid"
                  color={'white'}
                />
              </TouchableOpacity>
            </View>

            <Text style={{ fontSize: 24, color: 'white' }}>1</Text>
            <View>
              <TouchableOpacity
                style={{
                  padding: 4,
                  backgroundColor: '#fff',
                  borderRadius: 999,
                }}
              >
                <FontAwesome6 name="minus" size={16} iconStyle="solid" />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 14, fontWeight: 400 }}>Total Amount</Text>
            <Text style={{ fontSize: 24, fontWeight: 700 }}>$10.000</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text>Book Now</Text>
        </TouchableOpacity>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'rgba(243, 242, 231, 1)',
    fontFamily: 'Plus Jakarta Sans',
    flex: 1,
  },
  head: {
    position: 'absolute',
    zIndex: 10,
    paddingHorizontal: 24,
    marginTop: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  backButton: {
    padding: 12,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.21)',
  },
  weatherContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 999,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  textWeather: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 8,
  },
  background: {
    height: 445,
  },
  gradient: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    marginHorizontal: 24,
    marginBottom: 24,
  },
  containerRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 999,
    alignSelf: 'flex-start',
  },
  textRating: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  heading: {
    color: 'white',
    fontSize: 36,
    fontWeight: '600',
    marginBottom: 16,
  },
  paragraph: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '400',
    marginBottom: 20,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#2fe0da',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 999,
    alignSelf: 'flex-start',
  },
  textButton: {
    fontWeight: '600',
  },
  container: {
    paddingHorizontal: 24,
  },
});

export default App;
