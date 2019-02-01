import axios from 'axios';
export default class Acesso{
    constructor(_component){
        this.component = _component
        this.acessar()
    }
    acessar(){
        axios.get('https://swapi.co/api/people/1')
        .then(response => { this.component.setState({dadosPersonagem: response.data}) })
        .catch(() => {console.log("Erro ao carregar dados");})
    }
}