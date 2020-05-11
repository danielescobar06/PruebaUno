import React, {Component} from 'react';
import { Text, Image, Linking } from 'react-native';
import { Content, Left, Body, Card, Title, CardItem, Thumbnail } from 'native-base';

class ReBody extends Component{

  constructor(props) {
      super(props);
      this.state = {
        songs: [],
        uri: ''
        };
    }

  getData=() => {
    fetch ('http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=colombia&api_key=829751643419a7128b7ada50de590067&format=json')
    .then(res => {      
      return res.json() 
    })  
    .then(data => {
      this.setState({
        songs: data.tracks.track})
    })
    .catch(error => console.error(error));
  }
  componentDidMount(){
   this.getData()
  }

  render(){
    let canciones = this.state.songs.map(function(cancData, index){
      return(
        <Card key={'mykey' + index}>
          <CardItem>
            <Left>
              <Thumbnail source={require('../../../assets/music.png')} />
              <Body>
              <Text style={{fontWeight: 'bold', fontSize: 20, color: '#022B36'}} 
                    onPress={() => Linking.openURL(cancData.url)}>
                {cancData.name}
              </Text>
              <Text style={{color: '#116029'}}  
                    onPress={() => Linking.openURL(cancData.artist.url)}>
                {cancData.artist.name}
              </Text>
              <Text style={{fontSize: 10, color: '#022B36'}}>Rank: {cancData['@attr'].rank}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Duración(seg): {cancData.duration}</Text>
              <Text>Streamable: {cancData.streamable.fulltrack}</Text>
              <Text>Reproducciones: {cancData.listeners}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Image source={{ uri: cancData.image[2]['#text']}} 
                     style={{height: 200, width: 320, flex: 1}}
              />
              <Text style={{fontSize: 12, color: '#022B36'}}>Mbid Canción: {cancData.mbid}</Text>
              <Text style={{fontSize: 12, color: '#022B36'}}>Mbid Artista: {cancData.artist.mbid}</Text>
            </Body>
          </CardItem>
        </Card>
      )
    });
    return(
      <Content>
        {canciones}
      </Content>
    );
  }
}

export default ReBody