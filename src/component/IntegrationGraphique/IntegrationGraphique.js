import React, { Component } from 'react';
import './IntegrationGraphique.css';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import images from '../images/image.jpg'
class IntegrationGraphique extends Component {
  constructor(props){
    super(props);
     this.state = {

images:[],
name:'',
firstname:''
     };
   }

 //componentWillMount(){}
  
 componentDidMount(){
  
  const images = JSON.parse(localStorage.getItem('user'));
  axios.get('http://jsonplaceholder.typicode.com/posts').then((response) => {
    this.setState({
      images : response.data
    })
  })
   
   }



  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    const info = localStorage.getItem('name')
    console.log('info',info);
    return (
      <div >
        <p> {}</p>
        <Table class="table table-bordered">
        <Thead>
        <Tr>
          <Th>UserID</Th>
          <Th>ID</Th>
          <Th>Title</Th>
          
        </Tr>
      </Thead>
      <Tbody>
        
     <Td> {this.state.images.map((image) => (
      <Tr >
           <div class="card-group">
  <div class="card">
    <div class="card-body">
 
                    <Td>  <img src={images}  /> <br />
                     {image.userId} <br/>
                      {image.id}  <br/>
                    {image.title} <br />
                     {image.body} </Td>
        </div>
                     </div>
        </div>
 
                     </Tr> ))} </Td>
                      <Td> {this.state.images.map((image) => (
      <Tr >
           <div class="card-group">
  <div class="card">
    <div class="card-body">
                    <Td>  <img src={images}  /> <br />
                     {image.userId} <br/>
                      {image.id}  <br/>
                    {image.title} <br />
                     {image.body} </Td>
        </div>
                     </div>
        </div>
 
                     </Tr> ))} </Td>
                    
      </Tbody>  
</Table>



      </div>
    );
  }
}

export default IntegrationGraphique;