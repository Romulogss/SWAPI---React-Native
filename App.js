import React, { Component } from 'react';
import { View } from 'react-native';
import TelaBusca from './src/telas/TelaBusca';
import TelaResultado from './src/telas/TelaResultado';
import TelaDetalhes from './src/telas/TelaPersonagem';
import { createStackNavigator } from 'react-navigation';

export default class App extends Component {
  render() {
    return (
      <Rotas/>
    );
  }
}

const Rotas = createStackNavigator(
  {
    Busca:{
      screen: TelaBusca,
      
    },
    Resultado:{
      screen: TelaResultado
    },
    Detalhes:{
      screen: TelaDetalhes
    }
  },{
    navigationOptions:{
      header: null
    }
  }
);