import React,{Component} from 'react';
import {Header, Title, Container, Content} from 'native-base';


import DadosPessoais from '../components/DadosPessoais';
import Acessar from '../components/AcessoSWAPI';
import listaResultado from '../components/ListaResultado';
import ListaResultado from '../components/ListaResultado';

export default class TelaResultado extends Component {
    constructor(props){
        super(props);
        this.state = {listaResultado: []};
      
    }
    resultadoPersonagem(nome){

    }
    componentWillMount(){
        const resultado = this.props.navigation.getParam('resultado',[])
        this.setState({listaResultado: resultado})
        console.log(resultado)
    }
    render(){
        const {navigate} = this.props.navigation
        return(
            <Container>
                <Header>
                    <Title>Resultado</Title>
                </Header>
                <Content>
                    {this.state.listaResultado.map( personagem =>
                            <ListaResultado key={personagem.name} dados={personagem} navigate={navigate}/>                    
                         )}
                </Content>
            </Container>
        );
    }
}