import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class ImageScreen extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('HomeScreen');
          }}>
          <Image
            style={styles.back}
            source={require('../assets/backButton.png')}
          />
        </TouchableOpacity>
        <Text style={styles.head}>The World's Most Interesting News</Text>
        <Text style={styles.textStyle}>
          Science, crime, medicine, archaeology, nature — if it’s interesting
          news, you’ll find it here. Stories like these may not always be the
          ones atop your news feed, but chances are they’re the ones you’ll
          actually want to read. Whether it’s stories of weird animals, grisly
          crimes, interstellar drama, or the just plain unbelievable, these are
          the most interesting news articles you’ll find anywhere. From a
          nine-year-old boy’s accidental uncovering of a previously-unknown
          human ancestor called Australopithecus sediba to new revelations about
          how the Ancient Egyptian pyramids were built, interesting news stories
          like these represent the discoveries that unlock the secrets of
          humanity’s past. And in addition to uncovering our past, these
          interesting current events furthermore chart the course of our present
          — from the serious all the way down to weird news of the “Florida man”
          variety — and our future — from the latest technological advances to
          the Jupiter pictures coming back from the outer reaches of our solar
          system. It could be awe-inspiring photos of celestial bodies, it could
          be the most bizarre story of mayhem down here on Earth… if it’s
          interesting news, All That’s Interesting has it covered.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    width: 30,
    height: 30,
    marginBottom: 50,
  },
   textStyle: {
     fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  head: {
    textAlign: 'center',
    fontSize: 30,
    color:'red',
    marginBottom: 40,
    backgroundColor: 'yellow',
    marginTop: -30
  },
});
