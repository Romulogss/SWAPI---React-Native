import React, { Component } from 'react';
import { View } from 'react-native';
import TelaBusca from './src/telas/TelaBusca';
import TelaResultado from './src/telas/TelaResultado';
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
    }
  },{
    navigationOptions:{
      header: null
    }
  }
);