
import React, { Component } from 'react'

 class Test extends Component {
constructor(props){
    super(props);
  this.state ={
      a :10
  }
  console.log("constructor")
}
  componentDidMount(){
console.log("didmount");
   this.setState({
       a:20
   })
  }
  shouldComponentUpdate(){
       console.log("shouldcom.update");
       return false;
  }

componentDidUpdate(prevProps, prevState) {
    console.log("com.update");
}



    render() {
        console.log("render")
        return (
            <div>
                
            </div>
        )
    }
}
export default Test;
//state i bind ediceksek yada propsları kullanıcaksak constructor kullanabiliriz.
//önce constructor çalışır render ise mount edilirken çalışır
//state değiştirme işlemleri renderda yapılmaz(max update exception)
/*
this.state ={
      a :10
  }
  console.log("constructor")
}
  componentDidMount(){
console.log("didmount");
  
  }



    render() {
        console.log("render")
        return (
            ilk başta constructor sonra render mounnt edildikten sonra didmountt methodu çalışır.
didmount'u api isteklerimizi içinde gerçekleştiririz
            */
           /*
             com.update i ekleyince çalışma öncelikleri
             constructor
              render
            didmount
             render
            com.update:güncelleme işleminden hemen sonra çalşır,
            bazı durumlarda com. rerender edilmesni istemezsek shouldcomponentupdate methodunu kullanırız
          
            constructor
Test.js:29 render
Test.js:12 didmount
Test.js:18 shouldcom.update
Test.js:29 render
Test.js:23 com.update
shouldcom: false dönersek didupdate ve  render çalışmaz
 shouldComponentUpdate(){
       console.log("shouldcom.update");
       return false;           
 eğer com. kaldırılıyorsa kaldırılmadan heen önce com.wıllunmount çalışır user.js 
 componentWillMount(){
        console.log("com.wıllunmount");
    }
    render() {
       
        const {name,departman,salary}=this.props;
       return (
<UserConsumer>
her sildiğimizde çağrıldı     
 */
