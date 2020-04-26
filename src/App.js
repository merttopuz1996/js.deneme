import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Admin from   './component/Admin';
import Users from './component/Users';
import AddUser from './Forms/AddUser';
import UpdateUser from './Forms/UpdateUser';
import Test from './component/Test';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import NotFound from './pages/NotFound'; 
import Contribute from './pages/Contribute';
//jsx formatı sadece bir tane parent(div input h1)dönebilir.
    // html özl keywordleri kullanımı farklı
    //classname label htmlfor gibi..
    //{1+1} jsx içinde bu şekide java scrpt kullanabilirsin
    //{"murat".toUpperCase()}
    //rcc tab kısa şekilde oluşturma
    //oluşturulan User com. kullanmak için app te import etmeyi unutma 
    //<h1 style = {{color:"blue",fontSize:"30px"}}>App com</h1> css ekleme
    // sayfaya bootstrap dahil etme index.cstml e linki koy
    //2 tür component var clasbase ve functional(props sadece) component 
   //func. component navbar oluşturduk render olmaz
   /*  Navbar =()=>{
return(
<div>
<form>
    <br></br>
    <input type="text"></input>
   
        <button>yolla</button>
    
</form>
</div>

)
}export default Navbar;
 arrow yazımını kullandık*/ 
  
 //propslar la bir com. başka com. veri aktarırız(name,form,email,salary..)
 //navbar titledaki objeyi almak için navbar a func.oldu için this.props
 
//name,dp,sl çekmek için props kullanıcaz
//proptype kullanmak için ilk olarak import et
//eğer veri göndermezsen defaulprop ile default değer verebilrisin
//impt proptypes importu
//componentin o anki durumunu gösteren js. objesi:state set edilebilir



 //users array üzerinde filter fonk kullanıcaz 1 olmayanları filrele ve users ı güncelle
 
//gönderdiğimiz id ==! user ın id sine eşit değilse kalabilir eşitse  filtrelere listeden arrayden at
//şimdi delete usera props olarak burdaki users a geçiricez
/*
 <Test test ="deneme"/>
  <h1>App components </h1>
<Navbar title="Navbar" />
<hr/>

<AddUser/>
<Users />
<Admin 
 isim="adminim"/>
*/
class App extends Component{


  render()  {
  return (
  //route kütüphanesini kullanıcaz
  //<Route component={NotFound}/> aşağıdaki slahslar harici hata vermesi için
<Router> 
   <div className="container" > 
   <Test test ="deneme"/>
  <h1>App components </h1>
<Navbar title="Navbar" />
<hr/>

<Switch>
<Route exact path ="/" component={Users}/>
<Route exact path ="/add" component={AddUser}/>
<Route exact path = "/github" component={Contribute}/>
<Route exact path="/edit/:id" component = {UpdateUser} />
<Route component={NotFound}/>
</Switch>


<Admin 
 isim="adminim"/>
 </div>
 </Router>
//"/edit/:id" ile  diğer tarafa bizim gönderdiğmiz değer id olarak geçicek
   
  );
  
}
}
export default App;
