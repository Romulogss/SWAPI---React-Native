import React,{Component} from 'react';
import { View, Text, ImageBackground, Button} from 'react-native';
import axios from 'axios';
import Acordion from './Acordion';
import { Content } from 'native-base';

const fundo = require('../imgs/fundo2.2.png')
export default class DadosPessoais extends Component { 
    constructor(props){
        super(props);
        this.state = {planeta: '', filmes: this.props.personagem.films}
    }
    componentWillMount(){
        axios.get(this.props.personagem.homeworld)
        .then(response => { this.setState({planeta: response.data.name})})
        .catch(() => {console.log("Erro ao carregar personagem");});
    }

    render(){
        return(
            <View>
                <ImageBackground source={fundo} style={Estilos.imgFundo}>
                <Content>
                    <Text style={Estilos.txtInfo}>Height: {this.props.personagem.height}cm</Text>
                    <Text style={Estilos.txtInfo}>Mass: {this.props.personagem.mass}kg</Text>
                    <Text style={Estilos.txtInfo}>Hair color: {this.props.personagem.hair_color}</Text>
                    <Text style={Estilos.txtInfo}>Skin color: {this.props.personagem.skin_color}</Text>
                    <Text style={Estilos.txtInfo}>Eye color: {this.props.personagem.eye_color}</Text>
                    <Text style={Estilos.txtInfo}>Birth year: {this.props.personagem.birth_year}</Text>
                    <Text style={Estilos.txtInfo}>Gender: {this.props.personagem.gender}</Text>
                    <Text style={Estilos.txtInfo}>Homeworld: {this.state.planeta}</Text>
                    <Text style={[Estilos.txtInfo,{ alignSelf: 'center'}]}>Filmes</Text>
                    {this.state.filmes.map(filme => <Acordion key={filme} filme={filme} />)} 
                </Content>
                </ImageBackground>
            </View>
        );
    }
}
const Estilos = {
    txtInfo:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        paddingTop: 10,
        paddingLeft:10,
        color: '#fff'
    },
    imgFundo:{
        width:360,
        height: 560
    }
}

