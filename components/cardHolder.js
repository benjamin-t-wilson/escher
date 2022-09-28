import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import Card from './card';

const CardHolder = () => {
  const [cards, setCards] = useState([]);
  return (
    <View>
      <Button
        disabled={cards.length >= 6}
        title="Add Card"
        onPress={() => {
          setCards(prev => [...prev, <Card key={prev.length + 1} />]);
        }}
      />
      <Button title="Clear" onPress={() => setCards([])} />
      <View style={styles.container}>
        {cards.map((card, idx, list) => (
          <Card key={idx} details={{...card, idx, list}} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default CardHolder;
