import './style.css';
import { Component } from 'react';

import { loadPosts } from '../../components/ApiCli';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import { Wrapper } from './styles';

class Home extends Component {

  state = {
    posts : [ ],
    allPosts: [],
    page:0,
    postsPerPage: 50,
    searchValue:''
  }; 

  async componentDidMount(){
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page,postsPerPage),
      allPosts: postsAndPhotos,
    });
  }

  loadMorePosts = () => {
    const {
      allPosts,
      page,
      postsPerPage,
      posts
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({posts, page:nextPage});    
  } 

  handleChange = (e) => {
    const { value } = e.target;
    this.state({searchValue: value});
  }

  render(){    
    const  { posts, page, postsPerPage, allPosts, searchValue }  = this.state;
    const { noMorePosts } = page + postsPerPage >= allPosts.length; 

    const filteredPosts = !!searchValue ? 
                          allPosts.filter(post => {
                            return post.title.toLowerCase().includes(searchValue.toLowerCase);
                          }) 
                          : 
                          posts;

    return (
      <section className="container">
      
      <div className="search-container">
        <TextInput searchValue={searchValue} handleChange={this.handleChange} />
      </div>

      <Wrapper background="pink">
       <h1>Hello</h1>
      </Wrapper>
      
        {filteredPosts.length > 0 &&(
          <Posts posts={posts} />
        )}       

      <Button text="Load more posts" 
              onclick={this.loadMorePosts} 
              disabled={noMorePosts} />
      </section>
    );
  }  
}

export default Home;
