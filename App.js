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
import Menu from './src/menu'
import Produtos from './src/produtos'

export default class App extends Component {
  render() {
    return(
      <View>
            
        <ScrollView>
          <View>
            <Menu/>
            <Produtos
              nomeImagem={require('./src/react.png')}
              descricao="React-Native"
              preco={100}
              
            ></Produtos>
            <Produtos
              nomeImagem={require('./src/react.png')}
              descricao="Logo"
              preco={200}
              
            ></Produtos>
          </View>
        </ScrollView> 
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
  texto1:{
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
    margin: 10,
  },
  texto2:{
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'left',
    margin: 10,
  }

})