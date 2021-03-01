import React, { Component } from 'react';
import './Accueil.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";


class Accueil extends Component {
  constructor(props){
  super(props);
    this.state = {
      name:'',
      firstname:'',
    
    };
 }


 
 formChange = () =>{
  if(this.state.name=="Ayadi"&&this.state.firstname=="Khaoula"){
    localStorage.setItem("info")
    this.props.history.push('/IntegrationGraphique');
  }else{
    this.props.history.push('/');}
  }

 /*  functionLocalStorage = () => {
    localStorage.getItem('name',this.state.name)
    localStorage.getItem('firstname',this.state.firstname)
  }
   */
handleChange = (e) =>{
  this.setState({
    [e.target.name] : e.target.value
  })
    console.log(this.state.name)
    console.log(this.state.firstname)
  }
  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    
   
    return (
      <div>

<h5 className="h5"> IT meeting guest questionnaire</h5>
    
<form onSubmit={this.formChange}>
  <div className="form-group">
    <label className="label">Last name</label>
    <input type="text" className="form-control" id="name" 
    name="name" 
    value={this.state.name} onChange={this.handleChange} 
    required/>
  </div>
  <div className="form-group">
    <label className="label">First name</label>
    <input type="text" className="form-control" 
    id="firstname" name="firstname"  
    value={this.state.firstname} onChange={this.handleChange} required/>
  </div>
  <div className="form-group">
    <p >Do you want to share your work experience with us</p>
    <label className="label">Work experience</label>
    <input type="text" className="form-control"  />
  </div>
  <div className="form-group">
    <label className="label">Profession</label>
    <select className="form-control" >
      <option>Profession</option>
      <option>Developer</option>
      <option>Product owner</option>
      <option>Project manager</option>
      <option>Businessman</option>
    </select>
  </div>
 
  <div className="form-group">
    <label className="label">Additional info</label>
    <textarea className="form-control" rows="3"></textarea>
  </div>
  <button type="submit" className="btn"  > <Link to='/IntegrationGraphique'> Envoyer </Link></button>
</form>

   

      </div>
    );
  }
}

export default Accueil;