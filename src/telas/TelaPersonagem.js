import React,{Component} from 'react';
import {Header, Title, Container, Content} from 'native-base';
import DadosPessoais from '../components/DadosPessoais';
import { Acordion } from '../components/Acordion';
export default class TelaResultado extends Component {
    render(){
        const personagem = this.props.navigation.getParam('dados',[]);
        const {navigate} = this.props.navigation
        return(
            <Container>
                <Header style={{backgroundColor:'#2E2E2E'}}>
                    <Title style={Estilos.txtTitulo}>{personagem.name}</Title>
                </Header>
                <Content>
                    <DadosPessoais personagem={personagem} navigate={navigate}/>                   
                </Content>
            </Container>
        );
    }
}
const Estilos = {
    txtTitulo:{
        paddingTop:15,
        fontSize:25,
        fontWeight: 'bold',
        color: 'yellow'
    }
}