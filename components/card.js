import {View, Text, ImageBackground, StyleSheet, Dimensions} from 'react-native';
import Parchment from '../assets/parchment.jpg';

const Card = ({details}) => {
  const windowX = Dimensions.get("window").width;
  const cardWidth = 120;

  const styles = StyleSheet.create({
    card: {
      width: cardWidth,
      height: 170,
      zIndex: details.idx,
      position: "absolute",
      left: (windowX - cardWidth / 2) / details.list.length * details.idx
    },
  });

  return (
    <ImageBackground source={Parchment} style={styles.card}>
    </ImageBackground>
  );
};

export default Card;
