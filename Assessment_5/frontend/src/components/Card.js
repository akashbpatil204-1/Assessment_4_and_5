import React,{Component} from 'react'
import {Link} from 'react-router-dom'

export default class Card extends Component {
    constructor() {
        super()
        // console.log('before binding: ' + this)
        // this.details = this.details.bind(this)
        // console.log('after binding: ' + this)
    }
    // details() {
    //     console.log(this)
    //     console.log('in details func')
    // }
    render(){
        console.log("props: " + this.props)
        return  (
            <div className="card" style={{width: 18 +'rem', margin: 10+'px'}}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.body}</p>
                    {/* <a className="btn btn-primary" onClick = {() => {this.props.selected(this.props)}}>Details</a> */}
                    <Link className="btn btn-primary" to="/user/2">Details</Link>
                </div>
                </div>
        );
    }
}