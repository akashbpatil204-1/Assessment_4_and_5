import React from 'react';
import Card from './Card';
import axios from 'axios';

export default class Main extends React.Component {
    constructor(){
        super();
        this.state={
            phones:[]
        }
        this.selectedProduct = this.selectedProduct.bind(this);
    }

    selectedProduct({id,title, body}){
        //console.log(phones.name)
         const i = 12;
         console.log(`Inside the selectedProduct function111: ${i}`);
         console.log(id);
      const filteredList = this.state.phones.filter(phone => phone._id ==id);
      
       
        this.setState({
            phones:filteredList
        })
    }
 
    componentDidMount(){

       
        console.log(`Component is mounted on the DOM12`)
        axios.get('http://localhost:4000/movies')
        .then(res =>{ const users = res.data;
            console.log(users.data);
            this.setState({
                phones:users.data    

                
            })
           // console.log(users.data[1]);

    
        })
    
       
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                {
                    this.state.phones.map((phone,index) => <Card 
                                                key={index} 
                                                title={phone.name} 
                                                body={phone._v}
                                                id = {phone._id}

                                                selected={this.selectedProduct}/>)
                }
                </div>
            </div>
        );
    }
}