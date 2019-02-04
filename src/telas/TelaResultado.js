import React,{Component} from 'react';
import {Header, Title, Container, Content} from 'native-base';
import { ImageBackground } from 'react-native';

import ListaResultado from '../components/ListaResultado';
const fundo = require('../imgs/fundo2.2.png');

export default class TelaResultado extends Component {
    constructor(props){
        super(props);
        this.state = {listaResultado: []};
    }
    componentWillMount(){
        const resultado = this.props.navigation.getParam('resultado',[])
        this.setState({listaResultado: resultado})
    }
    render(){
        const {navigate} = this.props.navigation
        return(
            <Container>
                <Header style={{backgroundColor:'#2E2E2E'}}>
                    <Title style={Estilos.txtTitulo}>Resultado</Title>
                </Header>
                    <ImageBackground source={fundo} style={Estilos.imgFundo}>
                        <Content>
                            {this.state.listaResultado.map( personagem =>
                                <ListaResultado key={personagem.name} dados={personagem} navigate={navigate}/>                    
                            )}
                        </Content>
                    </ImageBackground>
            </Container>
        );
    }
}

const Estilos = {
    txtTitulo:{
        fontSize:25,
        fontWeight:'bold',
        paddingTop:10,
        color: 'yellow'
    },
    imgFundo:{
        width:360,
        height: 560
    }
}