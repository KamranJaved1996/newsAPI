import React, { Component } from 'react'
import Header from './HeadFoot/Header';
import Footer from './HeadFoot/footer';

export default class BlogSingle extends Component {
    render() {
        return (
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
                                  <h4 className="panel-title">
                                      <a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                                          <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                                          Music
                                      </a>
                                  </h4>
                              </div>
                              <div id="sportswear" className="panel-collapse collapse">
                                  <div className="panel-body">
                                      <ul>
                                          <li><a href="">Classic </a></li>
                                          <li><a href="">Sad </a></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="panel panel-default">
                              <div className="panel-heading">
                                  <h4 className="panel-title">
                                      <a data-toggle="collapse" data-parent="#accordian" href="#mens">
                                          <span className="badge pull-right"><i></i></span>
                                          Fashion
                                      </a>
                                  </h4>
                              </div>
                          </div>
                          
                          <div className="panel panel-default">
                              <div className="panel-heading">
                                  <h4 className="panel-title"><a href="#">Foods</a></h4>
                              </div>
                          </div>
                          <div className="panel panel-default">
                              <div className="panel-heading">
                                  <h4 className="panel-title"><a href="#">Travel</a></h4>
                              </div>
                          </div>
                          <div className="panel panel-default">
                              <div className="panel-heading">
                                  <h4 className="panel-title"><a href="#">Technology</a></h4>
                              </div>
                          </div>
                          <div className="panel panel-default">
                              <div className="panel-heading">
                                  <h4 className="panel-title"><a href="#">Photography</a></h4>
                              </div>
                          </div>
                          <div className="panel panel-default">
                              <div className="panel-heading">
                                  <h4 className="panel-title"><a href="#">Real Estate</a></h4>
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
                      <h2 className="title text-center">Latest From our Blog</h2>
                      <div className="single-blog-post">
                          <h3>Girls Pink T Shirt arrived in store</h3>
                          <div className="post-meta">
                              <ul>
                                  <li><i className="fa fa-user"></i> Mac Doe</li>
                                  <li><i className="fa fa-clock-o"></i> 1:33 pm</li>
                                  <li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
                              </ul>
                              <span>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star-half-o"></i>
                              </span>
                          </div>
                          <a href="">
                              <img src="images/blog/blog-one.jpg" alt=""/>
                          </a>
                          <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> <br/>

                          <p>
                              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> <br/>

                          <p>
                              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p> <br/>

                          <p>
                              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                          </p>
                          <div className="pager-area">
                              <ul className="pager pull-right">
                                  <li><a href="#">Pre</a></li>
                                  <li><a href="#">Next</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>

                  <div className="rating-area">
                      <ul className="ratings">
                          <li className="rate-this">Rate this item:</li>
                          <li>
                              <i className="fa fa-star color"></i>
                              <i className="fa fa-star color"></i>
                              <i className="fa fa-star color"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                          </li>
                          <li className="color">(6 votes)</li>
                      </ul>
                      <ul className="tag">
                          <li>TAG:</li>
                          <li><a className="color" href="">Pink <span>/</span></a></li>
                          <li><a className="color" href="">T-Shirt <span>/</span></a></li>
                          <li><a className="color" href="">Girls</a></li>
                      </ul>
                  </div>

                  <div className="socials-share">
                      <a href=""><img src="images/blog/socials.png" alt=""/></a>
                  </div>

                  <div className="media commnets">
                      <a className="pull-left" href="#">
                          <img className="media-object" src="images/blog/man-one.jpg" alt=""/>
                      </a>
                      <div className="media-body">
                          <h4 className="media-heading">Annie Davis</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <div className="blog-socials">
                              <ul>
                                  <li><a href=""><i className="fa fa-facebook"></i></a></li>
                                  <li><a href=""><i className="fa fa-twitter"></i></a></li>
                                  <li><a href=""><i className="fa fa-dribbble"></i></a></li>
                                  <li><a href=""><i className="fa fa-google-plus"></i></a></li>
                              </ul>
                              <a className="btn btn-primary" href="">Other Posts</a>
                          </div>
                      </div>
                  </div>
                  <div className="response-area">
                      <h2>3 RESPONSES</h2>
                      <ul className="media-list">
                          <li className="media">
                              
                              <a className="pull-left" href="#">
                                  <img className="media-object" src="images/blog/man-two.jpg" alt=""/>
                              </a>
                              <div className="media-body">
                                  <ul className="sinlge-post-meta">
                                      <li><i className="fa fa-user"></i>Janis Gallagher</li>
                                      <li><i className="fa fa-clock-o"></i> 1:33 pm</li>
                                      <li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
                                  </ul>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                  <a className="btn btn-primary" href=""><i className="fa fa-reply"></i>Replay</a>
                              </div>
                          </li>
                          <li className="media second-media">
                              <a className="pull-left" href="#">
                                  <img className="media-object" src="images/blog/man-three.jpg" alt=""/>
                              </a>
                              <div className="media-body">
                                  <ul className="sinlge-post-meta">
                                      <li><i className="fa fa-user"></i>Janis Gallagher</li>
                                      <li><i className="fa fa-clock-o"></i> 1:33 pm</li>
                                      <li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
                                  </ul>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                  <a className="btn btn-primary" href=""><i className="fa fa-reply"></i>Replay</a>
                              </div>
                          </li>
                          <li className="media">
                              <a className="pull-left" href="#">
                                  <img className="media-object" src="images/blog/man-four.jpg" alt=""/>
                              </a>
                              <div className="media-body">
                                  <ul className="sinlge-post-meta">
                                      <li><i className="fa fa-user"></i>Janis Gallagher</li>
                                      <li><i className="fa fa-clock-o"></i> 1:33 pm</li>
                                      <li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
                                  </ul>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                  <a className="btn btn-primary" href=""><i className="fa fa-reply"></i>Replay</a>
                              </div>
                          </li>
                      </ul>					
                  </div>
                  <div className="replay-box">
                      <div className="row">
                          <div className="col-sm-4">
                              <h2>Leave a replay</h2>
                              <form>
                                  <div className="blank-arrow">
                                      <label>Your Name</label>
                                  </div>
                                  <span>*</span>
                                  <input type="text" placeholder="write your name..."/>
                                  <div className="blank-arrow">
                                      <label>Email Address</label>
                                  </div>
                                  <span>*</span>
                                  <input type="email" placeholder="your email address..."/>
                                  <div className="blank-arrow">
                                      <label>Web Site</label>
                                  </div>
                                  <input type="email" placeholder="current city..."/>
                              </form>
                          </div>
                          <div className="col-sm-8">
                              <div className="text-area">
                                  <div className="blank-arrow">
                                      <label>Your Name</label>
                                  </div>
                                  <span>*</span>
                                  <textarea name="message" rows="11"></textarea>
                                  <a className="btn btn-primary" href="">post comment</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>	
          </div>
      </div>
  </section>
      <Footer/>
      
      


            </div>
        )
    }
}
