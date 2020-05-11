import React, {Component} from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Container, Root } from 'native-base';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import ReHeader from './src/main/containers/header';
import ReBody   from './src/main/containers/body';
import ReFooter from './src/main/containers/footer';

class PruebaUno extends Component{  

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("./node_modules/native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("./node_modules/native-base/Fonts/Roboto_medium.ttf"),
    });
    this.setState({ loading: false });
  }

  render(){
    if (this.state.loading) {
      return( 
        <Root>
          <AppLoading />
        </Root>
      );
    }

    return(
      <Container>
        <ReHeader/>
        <ReBody/>
        <ReFooter/>
      </Container>
    );
  }
}

export default PruebaUno
