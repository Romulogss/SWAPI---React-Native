import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
console.disableYellowBox = true
export default props => (
        <TouchableHighlight
        style={Estilos.botao}
            underlayColor={'#E6E6E6'}
            onPress={() => { props.navigate('Detalhes', {dados: props.dados});} }
        >
           <Text style={Estilos.txtInfo}>{props.dados.name}</Text>
        </TouchableHighlight>
        );

const Estilos = {
    txtInfo:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    botao:{
        marginTop: 10,
        backgroundColor:'transparent',
        paddingVertical: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        borderWidth:1,
        borderRadius:10,
        alignItems: 'center',
        borderColor: '#fff'
    }
}

