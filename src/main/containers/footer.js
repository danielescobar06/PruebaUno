import React, {Component} from 'react';
import { Container, Footer, FooterTab, Button, Title } from 'native-base';

class ReFooter extends Component{

  render(){
    return(
      <Footer>
        <FooterTab style={{backgroundColor: '#162356'}}>
          <Button>
            <Title>PRUEBA UNO</Title>
          </Button>
        </FooterTab>
      </Footer>
    )}
}

export default ReFooter