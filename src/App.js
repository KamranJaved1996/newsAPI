import React, { Component } from 'react'
import AllRoute from './AllRoute';
import axios from 'axios'

 class App extends Component {

    state={
        username:'admin',
        password:'admin',
        redirect: false,
       
    
    }
    handleUserName=(e)=>{
        this.setState({ username :e.target.value })
      }
    handlePassword=(e)=>{
        this.setState({ password :e.target.value })
      }
      
      
    componentDidMount(){
          this.refs.username.focus()
      }

      handleSubmit=(e)=>{
        e.preventDefault();


        // if (this.state.username==='admin' && this.state.password==='admin') {
        // alert('login succesfull')
        // this.setState({ redirect:true , username:'', password:'',})
            
        // } else if (this.state.username==='' || this.state.password==='')
        // alert('Please Enter UserName & Password')  
        // this.refs.username.focus()



       const obj={
           username: this.state.username,
           password: this.state.password,
       }

       axios.post('http://localhost/api/login.php', obj)
        .then(response=>{
            if (response.data.result==='success'){
                //alert("Login Successfully")
                this.setState(
                    {redirect:true,
                     username:'',
                     password:'',
                    })
            } else{
                this.setState({redirect:false,})
                alert ('Please enter valid username & Password')
                this.refs.username.focus()
            }
        })
      }



    render() {

        const {redirect}=this.state;
        console.log(redirect)
     
        if (redirect) {
         
         return <AllRoute  logout={this.state.redirect}/> // Calling Component After Succesfull Login & Setting Props For Logout
        }

        return (
            <div>

            <div className="header_top">
          <div className="container">
              <div className="row">
                  <div className="col-sm-6">
                      <div className="contactinfo">
                          <ul className="nav nav-pills">
                              <li><a href=""><i className="fa fa-phone"></i> +2 95 01 88 821</a></li>
                              <li><a href=""><i className="fa fa-envelope"></i> info@domain.com</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="social-icons pull-right">
                          <ul className="nav navbar-nav">
                              <li><a href=""><i className="fa fa-facebook"></i></a></li>
                              <li><a href=""><i className="fa fa-twitter"></i></a></li>
                              <li><a href=""><i className="fa fa-linkedin"></i></a></li>
                              <li><a href=""><i className="fa fa-dribbble"></i></a></li>
                              <li><a href=""><i className="fa fa-google-plus"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>


      <div className="container">
              <div className="row">
                  <div className="col-sm-4">
                      <div className="logo pull-left">
                          <a href="#"><img src="images/home/logo.png" alt="" /></a>
                      </div>
                      <div className="btn-group pull-right">
                          <div className="btn-group">
                              <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                                  USA
                                  <span className="caret"></span>
                              </button>
                              <ul className="dropdown-menu">
                                  <li><a href="">Canada</a></li>
                                  <li><a href="">UK</a></li>
                              </ul>
                          </div>
                          
                          <div className="btn-group">
                              <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                                  DOLLAR
                                  <span className="caret"></span>
                              </button>
                              <ul className="dropdown-menu">
                                  <li><a href="">Canadian Dollar</a></li>
                                  <li><a href="">Pound</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                 
              </div>
          </div>


            <section id="form">
            <div class="container">
            
            <div class="row">
             <div class="col-sm-4 col-sm-offset-1">
                        <div class="login-form">
                            <h2>Login to your account</h2>
                            <form onSubmit={this.handleSubmit} >
                               
                                <input type="text" placeholder="Username"
                                ref="username"
                                value={this.state.username}
                                onChange={this.handleUserName}/>

                                <input type="password" placeholder="Password" 
                                ref="password"
                                value={this.state.password}
                                onChange={this.handlePassword} />
                                <span>
                                    <input type="checkbox" class="checkbox" /> 
                                    Keep me signed in
                                </span>
                                <button type="submit" class="btn btn-default">Login</button>
                            </form>
                        </div>
                    </div>




                    <div class="col-sm-1">
                        <h2 class="or">OR</h2>
                    </div>
                    <div class="col-sm-4">
                        <div class="signup-form">
                            <h2>New User Signup!</h2>
                            <form action="#">
                            <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email Address"/>
                                <input type="password" placeholder="Password"/>
                                <button type="submit" class="btn btn-default">Signup</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </div>
        )
    }
}
export default App;