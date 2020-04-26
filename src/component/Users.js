import React, { Component } from 'react'
import User from "./User";
import UserConsumer from "../context";
 
class Users extends Component {
    render() {
        
return( 

    <UserConsumer>

        {
            //value daki users ı aldık
            value =>{
         const{users}=value;
  return (
            <div>
                {
                    users.map(user=>{
                    return(
                        //map fonksiyonuyla her bir userı render edicez
                        //users.map her objenin üzerinde gezinicek o yüzden her bir user com. return ediyoruz

                        <User
                       //virtual dom key value değerleri olarak objeleri taşır
                       //ancak bunları güncellerken hangi com.güncelliceğini anlamak için key prop verik
                       //iteratör kullanıdğımızda key vermeliyiz
                        //unique olması için id yi key verdik
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        salary={user.salary}
                        departman={user.departman}
                      
                        />
                    )
                    })


                }
         
                </div>
        )

        }
    }
    </UserConsumer>

)


       /* return (
            <div>
                {
                    users.map(user=>{
                    return(
                        //map fonksiyonuyla her bir userı render edicez
                        //users.map her objenin üzerinde gezinicek o yüzden her bir user com. return ediyoruz

                        <User
                        //unique olması için id yi key verdik
                        key={user.id}
                        name={user.name}
                        salary={user.salary}
                        departman={user.departman}
                        
                        />
                    )
                    })


                }
         
                </div>
        )*/
    }
}
export default Users;