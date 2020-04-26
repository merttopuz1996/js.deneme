import React,{Component} from 'react';
import axios from 'axios';
//context oluşturmak için
const UserContext=React.createContext();

const reducer= (state,action) => {
switch(action.type) {
case "DELETE_USER":
  return{
//split operatörü ...eski state i yerleştirdik, es6 yeni özellik eski statei ayırdık yeni users ı güncelledik
    ...state,
    users:state.users.filter(user=>action.payload !== user.id)
  }
  //users: state.users.push(action.payload) push array dönmüyor
  //ekleme işlemi için önceki users ın bigilerini aıp yeniyi yanına eklemek lazım split öprt kullanıcaz
  case "ADD_USER":
    return{
      ...state,
      users: [...state.users,action.payload]
    }
 
   case "UPDATE_USER":
   return{
     ...state,
     //her bir user üzerinde gezin user id si güncellenmiş user idsine eşitse updateliyi koy eşit değilse user kalsın
     users: state.users.map(user=>user.id === action.payload.id ? action.payload : user)
   }
   default:
   return state

}

}
//bu bize provider ve conusmer verir bununla işlelerimizi yaparız
//bu contextte verilen verileri kullanmak için consumer objesi kullanıcaz provider ve consumer
//provider ilk olarak oluştur componenttır.
//div dönmicez providerı dönücez aşağıdaki şekilde
 //children user provider ın child com. gösterir
    //uygulamaya bir state göndermek için  
export  class UserProvider extends Component {
    state= {

        users: [],
        dispatch:action=>{
          this.setState(state=>reducer(state,action))
        }
       }
       //axios u import ettik ve axios üzerinde localhostumuza getrequest yapıcaz
       //async es7 formatı await kullanmamızı sağlar,veriler bekledikten sonra responsun içinden alabilicez
       //await sadece async fonk ile kullanılır
       componentDidMount = async () => {
     const response = await axios.get("http://localhost:3003/users")
     this.setState({
       users:response.data
     })
    //responsu alıyor fakat  verileri görüntülemiyor
      }
      
    render()
    {
        return (
        <UserContext.Provider value={this.state}>
            {this.props.children}
        </UserContext.Provider>
        )
    }
}
  //uygulamanın  value yu kulanması için
  //consumer oluşturmamız gerekiyor
  //value her bir com. dağıttık
  const UserConsumer = UserContext.Consumer;
 // diğer dosyalarda kullanmak için export ettik
  export default UserConsumer ;
  //action 2 property barındıırr provider com.iiçinde hangi işlemin gerçekleşeceğini ver
  //hangi verilerin göndericeğini belirtir
  //1type:hangi işlemin gerçkeleşceği
  //2payload:hangi verinin gönderilceği
  //dispath: actionları contexe göndermekle sorumlu fonksiyon
  //reducer: gönderilen action tipine göre stati değiştirecek işlemlerden sorumlu fonk