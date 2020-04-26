import React, { Component } from 'react'
import UserConsumer from '../context';
import PropTypes from 'prop-types'
import axios from 'axios';
import {Link} from 'react-router-dom';
/* <div>
            <ul>
        <li> isim:{name}<i className="fas fa-trash-alt"></i></li>
         <li>Bölüm:{departman}</li>
        <li>maas:{salary}</li>
            </ul>
            </div>
            önceki bölümü biraz daha değiştirdik
 */
 class User extends Component {
     state = {
         isVisible:false
     }
     //static default props
     /*static defaultProps={
        name:"bilgi yok",
        salary:"bilgi yok",
        departman:"bilgi yok"
     }*/


    //önce bind ile gönderdiğin number yaz sonra event bind in ilk anahtar kelimesi this olmalı
     onClickEvent=(e)=>{
       this.setState({
    //state sset etme ilk basınca true card body görünür sonra görünmez
        isVisible:!this.state.isVisible
       })

    }
     //this neyi gösteriyor onclickte çalışması için
     //benim user objeme göre çalışması için .bind kullanıcaz
    //tıkladığında test veren click fonksiyonu
//onClick={this.onClickEvent.bind(this)}>{name} yapılır
// constructorla yapılabilir !!!!!arrow func. bind işlemini otomatik olarak yapar
/** constructor(props){
         super(props)
         this.onClickEvent=this.onClickEvent.bind(this);
   
     } */
   
     //destructing
     //state 2 yolla verilir constructor içinde yada class ın en tepesinde
    /* constructor(props){
         super(props);

        this.state={
         isVisible: false


      }
      
     }*/
     onDeleteUser = async (dispatch,e) =>{  
//delete usera id geçirmemiz gerekiyor
//destructing ile id ve delete user fonk u aldık i aldık
const {id}= this.props;
//Delete request response silindiği için boş gelicek bşouna yazmaya gerek yok 
//await i kullanıp slip dispatch i çalıştırcaz
//end point vericez ;id eklemek için teplate ltril kullanıcaz altgr +2virgülle oluşturduk userslinkini verdik
await axios.delete(`http://localhost:3003/users/${id}`);
//consumer dispatch
dispatch({type:"DELETE_USER",payload:id});
//şuanki user ın id neyse vredik
//consumer dan kullanıcağımız  dispatch
     } 
    
    render() {
       
        const {id,name,departman,salary}=this.props;
       return (
<UserConsumer>
{
value =>{
const {dispatch}= value;
//{is visible ?{backgroundColor:"#6ea5ee"}:null}
//diyerek  false olduğunda çalışmasını sağlayabilrsin
return (
    <div className="col-md-8 mb-4">
     <div className="card"  style={{backgroundColor:"#3399FF"}}>
<div className="card-header d-flex justify-content-between">
<h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4>
  <i onClick={this.onDeleteUser.bind(this,dispatch)} className="far fa-trash-alt" style={{cursor:"pointer"}}></i>
</div>

<div className="card-body">
<p className="card-text">Maaş :{salary}</p>
<p className="card-text">Bölüm:{departman}</p>
<Link to = {`edit/${id}`} className="btn btn-dark btn-block">Update User</Link>

</div>


     </div>
    </div>
    )



}

}


</UserConsumer>


       )
        /* return (
            <div className="col-md-8-4">
             <div className="card">
       <div className="card-header d-flex justify-content-between">
        <h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4>
          <i onClick={this.onDeleteUser} className="far fa-trash-alt" style={{cursor:"pointer"}}></i>
       </div>

<div className="card-body">
        <p className="card-text">Maaş :{salary}</p>
        <p className="card-text">Bölüm:{departman}</p>
        
      </div>

    
             </div>
            </div>
            )
    */
        }


}
 

User.propTypes ={
  name: PropTypes.string.isRequired,
  salary:PropTypes.string.isRequired,
  departman:PropTypes.string.isRequired,
  id:PropTypes.string.isRequired
}
/*
yukarıda static olarak tanımladık
User.defaultProps={
    name:"bilgi yok",
    salary:"bilgi yok",
    departman:"bilgi yok"
}  
*/
export default User;