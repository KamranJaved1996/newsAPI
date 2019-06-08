import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import BlogSingle from './components/blog-single';
import NotFound from './components/Error';
import Contact from './components/Contact';
import blog from './components/blog';
import Login from './Admin/Login';


const AllRoute=(props)=>{
  
    return (
      <Router>

      <div className="App">
      <header id="header"> 
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
      
      <div className="header-middle">
          <div className="container">
              <div className="row">
                  <div className="col-sm-4">
                      <div className="logo pull-left">
                          <Link to="/Blog"><img src="images/home/logo.png" alt="" /></Link>
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
                  <div className="col-sm-8">
                      <div className="shop-menu pull-right">
                          <ul className="nav navbar-nav">
                              <li><Link onClick={props.logout}><i className="fa fa-lock"></i> Log-Out</Link></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  
      <div className="header-bottom">
          <div className="container">
              <div className="row">
                  <div className="col-sm-9">
                      <div className="navbar-header">
                          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                              <span className="sr-only">Toggle navigation</span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                          </button>
                      </div>
                      <div className="mainmenu pull-left">
                          <ul className="nav navbar-nav collapse navbar-collapse">
                              <li><Link to={"/Blog"} className="active">Blog</Link></li>
                              <li><Link to={"/BlogSingle"} >Blog Single</Link></li>
                               <li><Link to={"/NotFound"}>404</Link></li>
                              <li><Link to={"/Contact"}>Contact</Link></li> 
                          </ul>
                      </div>
                      </div>
                  <div className="col-sm-3">
                      <div className="search_box pull-right">
                          <input type="text" placeholder="Search"/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </header>   
  
     <Switch>
       <Route exact path={'/Blog'} component={blog}/>
       <Route path={'/BlogSingle'} component={BlogSingle} />
       <Route path={'/NotFound'} component={NotFound} />
       <Route path={'/Contact'} component={Contact} />
      <Route path={'/Login'} component={Login} />
     </Switch>
           
           
     
      </div>
      </Router>
    );
  
}

export default AllRoute;
