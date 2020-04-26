import React, { Component } from 'react'
import UserConsumer from "../context";
import axios from 'axios';

class UpdateUser extends Component {
     state={
         name :"",
         departman:"",
         salary:""
     }
     changeInput=(e)=>{
    this.setState({
        //name="name"
        [e.target.name]:e.target.value
    })
     }
     componentDidMount = async () => {
         //api isteği
         const {id} = this.props.match.params;
         const response = await axios.get(`http://localhost:3003/users/${id}`)
     const {name,salary,departman} = response.data;
     this.setState({
         name,
         salary,
         departman,
         error: false
         
     });
        }
        validateForm =()=>{

            const{name,salary,departman} =this.state;
            if(name === ""|| salary === ""|| departman === ""  ){
    
                return false;
            }
            return true;
         }
    UpdateUser = async(dispatch,e)=>{
         e.preventDefault();
         //updateuser
       const{name,salary,departman}=this.state;
       const {id} = this.props.match.params;
       const updatedUser ={
       name,
       salary,
       departman

   };
   if(!this.validateForm()){
    this.setState({
        error:true
    })
    //döngünün sonlanması için return verdik true dönmesini engelledik
    return;
}
   const response = await axios.put(`http://localhost:3003/users/${id}`,updatedUser);
      //yeni verimizi uptadeduser ile gönderdik yukarıda
        //redirect
     dispatch({type:"UPDATE_USER",payload:response.data});
   //context e case şekilinde updateuser ı ekledik
   
        this.props.history.push("/"); 

       
        }
     
    render() {
        const{name,salary,departman,error}=this.state;
       return(
    <UserConsumer>
   {
      value =>{
          const{dispatch}=value;
        return (
             
            //card  ve card body oluşturduk bootstrap card kullandık
            <div className="col-md-8 mb-4">
                <div className="card">
            <div className="card-header">
            <h4>Update User Form</h4>

            </div> 
            <div className ="card-body">
            {
                 error ?
                <div className="alert alert-danger"> Lütfen bilgilerni kontrol et
                </div>
                 :null 
             
            }
            <form onSubmit={this.UpdateUser.bind(this,dispatch)}>
        
           <div className ="form-group">
            <label htmlFor="name">Name</label>
            <input 
             type="text"
             name="name"
             id="id"
             placeholder="Enter Name"
             className="form-control"  
             value={name} 
             onChange={this.changeInput}        
            />
           </div>
           <div className ="form-group">
            <label htmlFor="departman">Departman</label>
            <input 
             type="text"
             name="departman"
             id="departman"
             placeholder="Enter departman"
             className="form-control"            
             value={departman}
            onChange={this.changeInput}
            />
           </div>
           <div className ="form-group">
            <label htmlFor="salary">Salary</label>
            <input 
             type="text"
             name="salary"
             id="salary"
             placeholder="Enter salary"
             className="form-control"            
             value={salary}
             onChange={this.changeInput}
           />
           </div>
           <button className="btn btn-danger btn-block" type="submit">Update User</button>
            </form>
            </div>
                </div>
            </div>   
        )
      }
   }
    </UserConsumer>
       )   
    }
}
export default UpdateUser;