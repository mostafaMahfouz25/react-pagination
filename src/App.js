import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Post from './components/Post';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  const [posts,setPosts] = useState([]);
  const [loading,setLoading] = useState(false);
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage,setPostsPerPage] = useState(10);

  useEffect(()=>{


    const fetchPosts = async ()=>{
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    }


    fetchPosts();

  },[]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);

  const paginate =  pageNumber => setCurrentPage(pageNumber);


  return (
    <div className="">
      <h1>New React App</h1>
      <h1>Custome Pagination</h1>
      <hr />
      <Post  posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
}

export default App;
