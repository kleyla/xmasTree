import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  Button,
  Text,
  ImageBackground,
} from 'react-native';

import Copo from './src/Copo';
import CerosUnos from './src/CerosUnos';

const {width, height} = Dimensions.get('window');

export default class App extends Component {
  static defaultProps = {
    coposCount: 50, // total copos en la pantalla
  };

  render({coposCount} = this.props) {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require('./src/assets/tree08.jpg')}>
          <CerosUnos />

          {/* numero de copos */}
          {[...Array(coposCount)].map((_, index) => (
            <Copo
              x={Math.random() * width} // x-coordinate
              y={Math.random() * height} // y-coordinate
              radius={Math.random() * 4 + 1} // radius
              density={Math.random() * coposCount} // density
              key={index}
            />
          ))}
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: width,
    // height: height * 0.9,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: width,

    // width: width * 0.9,
    // height: height * 0.9,
    // alignSelf: 'center',
    position: 'relative',
  },
});
