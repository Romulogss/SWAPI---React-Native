import React,{Component} from 'react';
import { View, Text, ImageBackground} from 'react-native';
import axios from 'axios';

const fundo = require('../imgs/fundo2.2.png')
export default class DadosPessoais extends Component { 
    constructor(props){
        super(props);
        this.state = {planeta: ''}
    }
    componentWillMount(){
        axios.get(this.props.dados.homeworld)
        .then(response => { this.setState({planeta: response.data.name})})
        .catch(() => {console.log("Erro ao carregar dados");})
    }

    render(){
        return(
            <View>
                <ImageBackground source={fundo} style={Estilos.imgFundo}>
                    <Text style={Estilos.txtInfo}>Height: {this.props.dados.height}cm</Text>
                    <Text style={Estilos.txtInfo}>Mass: {this.props.dados.mass}kg</Text>
                    <Text style={Estilos.txtInfo}>Hair color: {this.props.dados.hair_color}</Text>
                    <Text style={Estilos.txtInfo}>Skin color: {this.props.dados.skin_color}</Text>
                    <Text style={Estilos.txtInfo}>Eye color: {this.props.dados.eye_color}</Text>
                    <Text style={Estilos.txtInfo}>Birth year: {this.props.dados.birth_year}</Text>
                    <Text style={Estilos.txtInfo}>Gender: {this.props.dados.gender}</Text>
                    <Text style={Estilos.txtInfo}>Homeworld: {this.state.planeta}</Text>
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

