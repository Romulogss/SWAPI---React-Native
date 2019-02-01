import React,{Component} from 'react';
import {View, Text, TextInput, ImageBackground, TouchableOpacity, StatusBar} from 'react-native';
import {Header, Title} from 'native-base'
import Axios from 'axios';
const fundo = require('../imgs/fundo2.png');

export default class TelaBusca extends Component {
    constructor(props){
        super(props);
        this.state = {infoPersonagem: [], nome: ''}
    }
    buscaPersonagem(nome){
        Axios.get('https://swapi.co/api/people/?search='+nome)
        .then(response => this.setState({infoPersonagem: response.data}))
        .catch(() => console.log("Erro ao carregar informação"))
    }
    render(){
        return(
            <View style={{backgroundColor:'#fff'}}>
                <StatusBar
                    backgroundColor="#2E2E2E"
                />
                <Header style={{backgroundColor: '#2E2E2E'}}>
                    <Title style={{color:'yellow', paddingTop: 15, fontWeight: 'bold'}}>SWAPI - RN</Title>
                </Header>
                <ImageBackground source={fundo} style={Estilos.imgFundo}>
                    <View style={{paddingTop:100}}>
                        <TextInput 
                            style={Estilos.txtInput}
                            underlineColorAndroid={'transparent'}
                            onChangeText={nome => this.setState({nome})}
                        />
                        <TouchableOpacity 
                            style={Estilos.botao}
                            onPress={() => {
                                this.buscaPersonagem(this.state.nome);
                                this.props.navigation.navigate('Resultado', {resultado: this.state.infoPersonagem})    
                            }}
                        >
                            <Text style={Estilos.txtBtn}>Buscar</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const Estilos = {
    botao:{
        marginTop: 20,
        backgroundColor:'transparent',
        paddingVertical: 10,
        marginHorizontal: 40,
        borderWidth:1,
        borderRadius:10,
        alignItems: 'center',
        borderColor: 'transparent'
      },
    txtBtn:{
        color: "#DF0101",
        fontSize: 25, 
        fontWeight: 'bold'
    },
    txtInput:{
        borderWidth:1,
        borderRadius:50,
        borderColor: '#fff',
        marginHorizontal: 20,
        backgroundColor:'transparent',
        textAlign: 'center',
        fontSize: 20,
        color: '#fff'
    },
    imgFundo:{
        width:360,
        height: 560
    }
}