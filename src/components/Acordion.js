import React,{Component} from 'react';
import Axios from 'axios';
import { Accordion } from 'native-base';

export default class Teste extends Component {
    constructor(props){
        super(props);
        this.state = {filme: ''}
    }
    componentWillMount(){
        Axios.get(this.props.filme)
        .then(response => this.setState({filme: response.data}))
        .catch(() => console.log(this.props.filme));
    }
    
    render(){
        const dadosFilmes = [
            {title: this.state.filme.title, content: this.state.filme.opening_crawl} 
        ]
        return(
            <Accordion dataArray={dadosFilmes} icon='remove' expandedIcon='remove' iconStyle={{color:'transparent'}} expandedIconStyle={{color: 'transparent'}}/>
        );
    }
}

