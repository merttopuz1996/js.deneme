import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from "../context";
import axios from "axios";
// server string bir id atıcak gerek kalmadı var uniqid = require('uniqid');

//animation box oluşturucaz
//oppacity görünürlüklerini ayarladık 
const Animation= posed.div({
visible:{
oppacity:1,
//appltatstart:visible olduğu zaman display block etmemizi sağlıyor
//hemen başla bunu devreye sok eğer none sa block et
applyAtStart:{
display:"block"

}
},
hidden:{

    oppacity:0,
    //applyatend:animation ı görüp kaybetmemiz için burda display none diyerek sayfadan kaybedicez
    applyAtEnd:{
        display:"none"
    }
}
});

//name,salary,departman propertylerini eklicez
//visible i aldığımız gibi bunlarıda alıcaz render altında
//daha sonra inputlara value vericez 
//value değiştirmemiz için onchange eventini yazmamız gerekiyor
//e.target.value ile içine yazdıpımız deperi aldık
/*kısaca tek fonksiyona indirgdik 
 changeInput=(e)=>{
    this.setState({
        //name="name"
        [e.target.name]:e.target.value
    })
     }
         const{name,departman,salary} = this.state;
      const newUSer = {
     name:name,
     salary:salary,
     departman:departman
   }
   console.log(newUSer);
   uygulamada farklı devamlı unique ıd oluşturmak için 
id:uniqid(),     üstte import edip kullandık
 id:uniqid(),     
     name:name,
     salary:salary,
     departman:departman 
     yerine es6 formatinda minimize ettim   
     adduserr actionu oluşturdum delete user gibi görünmesi için
     dispatch({type:"ADD_USER",paylaod:newUSer})
     dispatch ide form on submitte göndermemiz gerekiyor 
     ama contexten geldiği için consumer  import ettik
     return <userconsumer> aynı şekilde kullandık
      value u almak için
      <UserConsumer>
   {
      value =>{ return ü çinde aldık ve ardından value içindeki dispatch i almak için}
 const{dispatch}=value;
   }


    </UserConsumer>
{this.AddUser.bind(this,dispatch)} dispatch i gönderdik
 AddUser =(dispatch,e)=>{ aldık
    artık action ı alıp reducer işlemini yapmak için context js e gidicez
*/
class AddUser extends Component {
     state={
         visible:false,
         name :"",
         departman:"",
         salary:"",
         //form validation 
         error : false
     }
     changeVisibility = (e) =>{
      this.setState({
          visible: !this.state.visible
      })
     }
     validateForm =()=>{

        const{name,salary,departman} =this.state;
        if(name === ""|| salary === ""|| departman === ""  ){

            return false;
        }
        return true;
     }
     changeInput=(e)=>{
    this.setState({
        //name="name"
        [e.target.name]:e.target.value
    })
     }
     AddUser = async(dispatch,e)=>{
         e.preventDefault();
         const{name,departman,salary} = this.state;
      const newUSer = {
     //id:uniqid(),     
     name,
     salary,
     departman
   }
   if(!this.validateForm()){
       this.setState({
           error:true
       })
       //döngünün sonlanması için return verdik true dönmesini engelledik
       return;
   }
   //hem post işlemi yapıp new usera verimizi gönderdik
   const response = await axios.post("http://localhost:3003/users",newUSer);

  //response.dataya  verimizi gönderdik
   dispatch({type:"ADD_USER",payload:response.data})
       //redirect
       //routea gitmek için / koyduk
   this.props.history.push("/"); 


}
    
     
        /*
     changeName = (e)=>{
        this.setState({
            name:e.target.value
        })
     }
     changeDepartman = (e)=>{
 this.setState({
     departman:e.target.value
 })
     }
     changeSalary = (e)=>{
 this.setState({
     salary:e.target.value
 })
     }
     form a eklemek için önce
     <form onSubmit={this.AddUser}>
     adduser fnk yazıcaz 
     add user a bastığımıda sayanın yenilenemesi için
     
         e.preventDefault();
     submitten sonra içindeki değerleri almamız gerekiyor
 npm install uniqid projeye ekledik
     
     */
    render() {
        const{visible,name,salary,departman,error}=this.state;
       return(
    <UserConsumer>
   {
      value =>{
          const{dispatch}=value;
        return (
             
            //card  ve card body oluşturduk bootstrap card kullandık
            <div className="col-md-8 mb-4">
                <button onClick={this.changeVisibility}  className="btn btn-dark btn-block mb-4">{visible ? "Hide Form" :"Show Form"}</button>
                <Animation pose ={visible ? "visible" :"hidden"}>
                <div className="card">
            <div className="card-header">
            <h4>Add User form</h4>

            </div> 
            <div className ="card-body">
             {
                 error ?
                <div className="alert alert-danger"> Lütfen bilgilerni kontrol et
                </div>
                 :null 
             
            }
            
            <form onSubmit={this.AddUser.bind(this,dispatch)}>
           
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
           <button className="btn btn-danger btn-block" type="submit">AddUser</button>
            </form>

            
            </div>
            
                </div>
                </Animation>   
            </div>
            
        )

      }

   }

    </UserConsumer>

       )
       
       
       
       
    }
}
export default AddUser;