import React,  { Component } from "react";
import * as emailjs from "emailjs-com";
import './contact.css';
import Banner from '../src/laptop.jpg';

export class Contact extends Component{
constructor(props){
    super(props);
    this.state ={
        name:"",
        phone:"",
        email:"",
    };
    this.handleChange =this.handleChange.bind(this);
    this.handleSubmit =this.handleSubmit.bind(this);
}
handleChange =(e) =>
{
    this.setState({[e.target.name]:e.target.value});

};
handleSubmit = (e) =>{
    e.preventDefault();
    emailjs.sendForm(
        "service_b2169zl",
        "template_mx2yokf",
        ".contact_form_class",
        "user_zRFDRhQq7PZk9e8P6K5FF",
    )
    .then()
    .catch();
this.setState({
    name:"",
    phone:"",
    email:"",
});
};
render(){
    return(
        <div>
  <img src= {Banner} className="img" height="348px"  width="1333px" />
            <div className="block-1">
            <form
            onSubmit ={ this.handleSubmit.bind(this)} 
            className="contact_form_class" 
            >
        
<div>
    <label className="reg">Register</label>
<label style={{    display: "none"}}>Name :</label>
<i class="fa fa-user fa-lg user" aria-hidden="true"></i>
<input  
type="text"
id="name"
name="name"
className="form-control uname"
placeholder="Enter name"
value={this.state.name}
onChange={this.handleChange.bind(this)}></input>
</div>

<div>
{/* <label>Phone:</label> */}
<i class="fa fa-phone fa-lg phonee" aria-hidden="true"></i>
<input  
type="text"
id="phone"
name="phone"
className="form-control phone"
placeholder="Enter phone"
value={this.state.phone}
onChange={this.handleChange.bind(this)}></input>
</div>




<p></p>
{/* <label>Email :</label> */}
<i class="fa fa-envelope fa-lg envelope" aria-hidden="true"></i>
<input
type="text"
id="email"
name="email"
className="form-control email"
placeholder="Enter email"
value={this.state.email}
onChange={this.handleChange.bind(this)}>
</input>

<p></p>
<input type="submit" className="btn btn-sm btn-primary button"></input>
</form>
 </div>
 </div>     
        
    );
}
}

export default Contact;