import React, { Component } from 'react'
import Header from './HeadFoot/Header';
import Footer from './HeadFoot/footer';
import Business from './categories/Business';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'

export default class blog extends Component {
    render() {
        return (

			<Router>
			<div>

      <section>
		<div className="container">
			<div className="row">
				
				<div className="col-sm-3">
					<div className="left-sidebar">
						<h2>Category</h2>
						<div className="panel-group category-products" id="accordian">

							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><Link to="/Business">Business</Link></h4>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><Link to="/Sports">Sports</Link></h4>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><Link to="/Technology">Technology</Link></h4>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><Link to="/Entertainment">Entertainment</Link></h4>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><Link to="/Health">Health</Link></h4>
								</div>
							</div>
							
						</div>
							

						<div className="shipping text-center">
							<img src="images/home/shipping.jpg" alt="" />
						</div>
						<div className="shipping text-center">
							<img src="images/home/shipping2.png" alt="" />
						</div>
					</div>
				</div>
			 
				<div className="col-sm-9">
					<div className="blog-post-area">
					  <Business/>
					</div>
					</div>
				
			</div>
		</div>
	</section>
      
		  
	  <Switch>
       <Route exact path={"/Business"} component={Business}/>
       <Route path={'/Sports'} component={Business} />
       <Route path={'/Technology'} component={Business} />
       <Route path={'/Entertainment'} component={Business} />
      <Route path={'/Health'} component={Business} />
     </Switch>
  
	 <Footer/>
		 </div>
		 </Router>
			
        )
    }
}
