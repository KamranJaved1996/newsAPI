import React, { Component } from 'react'
import axios from 'axios';

export default class Business extends Component {
  
    
    constructor(props) {
        super(props)
        this.state = {
          articles: [],
          source: props.source
        }
      }

    componentDidMount(){
        axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=08881402d4fe4ddd8e45fe05ceadbdbe').then(response=>{
            console.log(response.data.articles)
            this.setState({
                articles:response.data.articles
            })

        }).catch(function(error){
            console.log(error)
        });
    }
    render() {
        let { articles,source} = this.state
        const { classes } = this.props
        return (
            <div>
              
            <h2 className="title text-center">Latest Business News</h2>
           {articles.map(article=>(
             
            <div className="col-sm-9">
					<div className="blog-post-area">
						
						<div className="single-blog-post">
							
							    <h4>{article.title}</h4>
								<img src={article.urlToImage} alt={article.title} />
						
							    <p>{article.description}</p>
							
                        </div>
            
					</div>
				</div>
           ))} 
            


            </div>
        )
    }
}
