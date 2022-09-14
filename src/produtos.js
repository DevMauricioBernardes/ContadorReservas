import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

export default class Produtos extends Component {
    constructor(props){                         //metodo contrutor
        super(props)                           // metodo super
        this.state ={
            reservas: 0,
            total: 0,
            corTextoReserva: 'blue',
            textoBotaoLimpa: ''
        }
    }

    reservar(){
        this.setState({              //atualiza os states e chama o render()
            reservas: this.state.reservas + 1,   // reservas +1
            total: this.state.total + this.props.preco,  // total + preço
            corTextoReserva: 'red',
            textoBotaoLimpa: 'Limpa'
        })        
    }

    limpar(){
        this.setState({              //atualiza os states e chama o render()
            reservas: 0,      // zerar reservas
            total: 0,        // zerar total
            corTextoReserva: 'blue',
            textoBotaoLimpa: '',
        })
    }
    

    render() {
        return(
        <View>
            <View style={estiloProdutos.menu}>
                <View>
                    <Image
                    source={this.props.nomeImagem}
                    style={{width: 200, height:200, margin:10}}> 
                    </Image>
                </View>                
                <View>
                    <Text style={estiloProdutos.texto2}>Descrição: {this.props.descricao}</Text>
                    <Text style={estiloProdutos.texto2}>Preço: {this.props.preco}</Text>
                    <Text style={{fontSize: 20,fontWeight: 'bold',textAlign: 'left',margin: 10, color: this.state.corTextoReserva}}>Reservas: {this.state.reservas}</Text>
                    <Text style={estiloProdutos.texto2}>Total: {this.state.total}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity 
                    onPress={() => this.reservar()}> 
                        <Text style={estiloProdutos.botao}>Reservar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => this.limpar()}>
                        <Text style={estiloProdutos.botao}>{this.state.textoBotaoLimpa}</Text>
                    </TouchableOpacity>
                    
                </View>       
            </View>
        </View>
        )
    }
}

const estiloProdutos = StyleSheet.create({  
    menu:{
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        backgroundColor: 'lightgrey',
        borderRadius: 30,
    },

    texto2:{
        fontSize: 20,
        color: 'blue',
        fontWeight: 'bold',
        textAlign: 'left',
        margin: 10,
    },

    botao:{
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: 'black',
        color: 'white',
        margin: 10,
        borderRadius: 10,
        textAlign: 'center',
    },
})
