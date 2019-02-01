import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

export default props => (
        <TouchableHighlight
            onPress={() => { props.navigate('Detalhes', {dados: props.dados});} }
        >
           <Text style={Estilos.txtInfo}>{props.dados.name}</Text>
        </TouchableHighlight>
        );

const Estilos = {
    txtInfo:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        paddingTop: 10
    }
}

