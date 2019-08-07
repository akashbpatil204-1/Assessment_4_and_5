import React from 'react';
import axios from 'axios';

export default class UserDetails extends React.Component{

    constructor(){
        super();
        this.state = {
            users:{}
        }
    }

    componentDidMount(){
        console.log(`Component is mounted on the DOM`)
        const {id} = this.props.match.params;
        axios.get('http://localhost:4000/movies/5d4681d33ae48709a4d60124')
        .then(res =>{ const users = res.data;
            console.log(users);
            this.setState({
                user:users.data      
                      
            })
    
        })
    
    }

    render(){

        const {id} = this.props.match.params;
        console.log(`id12 is ${id}`)
       // const filteredList = this.state.users.filter(phone => phone.id ==id);
      //  console.log(filteredList[0]["name"])     <h2>{this.state.users.name}</h2>
    
        return (
           
            
            <div>
            <h1>Movie Details</h1>
       
    <h2>{this.state.users.name}</h2>   
           
            </div>
        )




}
}