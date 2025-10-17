import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
});

const Counter = () => {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setPrice(count * 15000);
  }, [count]);

  return (
    <View style={styles.container}>
      <Text>Simple Calculator App</Text>
      <Text style={styles.text}>{count}</Text>
      <Button title="Increment" onPress={increment} />
      <Text style={styles.text}>{price}</Text>
    </View>
  );
};

export default Counter;
