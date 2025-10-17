import React from 'react';
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://www.acethehimalaya.com/wp-content/uploads/2023/11/where-is-mount-everest-located.jpg.webp',
      }}
      style={styles.background}
    >
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.6)']}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <Text style={styles.heading}>Your Next Adventure Starts Here</Text>
          <Text style={styles.paragraph}>
            Life's too short to stay in one place. Find your next favorite city,
            beach, or mountain and let's get moving!
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Start Exploring</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  gradient: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    marginHorizontal: 24,
    marginBottom: 48,
  },
  heading: {
    color: 'white',
    fontSize: 36,
    fontWeight: '400',
    marginBottom: 12,
  },
  paragraph: {
    color: '#ccc',
    fontWeight: '300',
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
});

export default App;
