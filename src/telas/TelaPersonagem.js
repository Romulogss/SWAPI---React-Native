import React,{Component} from 'react';
import {Header, Title, Container, Content} from 'native-base';
import DadosPessoais from '../components/DadosPessoais';
export default class TelaResultado extends Component {
    render(){
        const personagem = this.props.navigation.getParam('dados',[]);
        return(
            <Container>
                <Header style={{backgroundColor:'#2E2E2E'}}>
                    <Title style={{paddingTop:15, fontSize:25, fontWeight: 'bold'}}>{personagem.name}</Title>
                </Header>
                <Content>
                    <DadosPessoais dados={personagem}/>                    
                </Content>
            </Container>
        );
    }
}