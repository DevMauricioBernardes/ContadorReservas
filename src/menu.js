import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

export default class Menu extends Component {
  render() {
    return(
      <View style={estilo.menu}>
        <Image 
          style={estilo.imagem}
          source={require('./react.png')}
        ></Image>
        <Text style={estilo.textoMenu}>Home   Produtos   Sobre</Text>        
        
      </View>
    )
  }
}

const estilo = StyleSheet.create({
  menu:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    backgroundColor: 'lightblue',
  },
  imagem: {
    height:60, 
    width:60,
  },
  textoMenu:{
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
    margin: 10,
  }

})