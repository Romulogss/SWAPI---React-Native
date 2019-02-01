import React,{Component} from 'react';
import { View } from 'react-native';
import {Header, Title} from 'native-base';

import DadosPessoais from '../components/DadosPessoais';
import Acessar from '../components/AcessoSWAPI';

export default class TelaResultado extends Component {
    constructor(props){
        super(props);
        this.state = {dadosPersonagem: []};
      
    }
    componentWillMount(){
        this.props.navigation.getPar
    }
    render(){
        return(
            <View>
                <Header>
                    <Title>Resultado</Title>
                </Header>
                    <DadosPessoais key={this.state.dadosPersonagem.name} dados={this.state.dadosPersonagem}/>
            </View>
        );
    }
}