import NewsItem from './NewsItem';
import axios from 'axios';
import React, {useEffect, useState} from 'react'
import AddCatogary from './AddCatogary';
import  {Button} from 'react-bootstrap';
import './NewsList.css'; 
import { IoAdd } from "react-icons/io5";

const NewsList = () => {

    const [articles, setArticles]  = useState([]);
    const [currentCat, setCurrentCat]  = useState({
        catogary:"Techkrunch",
        apiUrl:'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a5cf886a8dd84801a01c8b5bd0da1b0d '

    });
    
    const [cat,setCat] = useState([{
        catogary:"Techkrunch",
        apiUrl:'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a5cf886a8dd84801a01c8b5bd0da1b0d '

    },{
        catogary:"Business",
    apiUrl:' https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a5cf886a8dd84801a01c8b5bd0da1b0d'}]);

    useEffect(()=>{
        const getCurrentArticles = async () =>{
            const res = await axios.get(`https://${currentCat.apiUrl.substring(8)}`);
    
            setArticles(res.data.articles);
            console.log(res);
        }
        getCurrentArticles();
        
    },[currentCat]);

    const getArticles = (catt,e) =>{
        
        setCurrentCat((currentCat)=>catt)
        console.log(catt.catogary);
        
    }

    const onFocus = (e)=>{
        
        e.target.style.backgroundColor = '#00F0C2';
        e.target.style.color = 'black';

    }
    const onBlur = (e)=>{
        
        e.target.style.backgroundColor = '#EAEAEA';
        e.target.style.color = '#7E7E7E';

    }

  const [modalShow, setModalShow] = React.useState(false);

  const handleCallback = (childData) =>{
    setCat(cat => cat.push(childData))
    console.log(childData);
    console.log(cat);
}

const [input,setInput] = useState("");

const[filteredResults, setFilteredResults]= useState([]);

const handleChange=(search)=>{
    setInput(search)
    if(input!==''){
        const filteredData = articles.filter((item)=>{
            return Object.values(item).join(' ').toLowerCase().includes(input.toLowerCase())
        })
        setFilteredResults(filteredData)
    }
    else{
        setFilteredResults(articles)
    }
    
}


    return (
        <div>
            {cat.map((catt)=>(
                <button className="catButton" onBlur={(e)=>onBlur(e)} onFocus={(e)=>onFocus(e)} onClick={()=>getArticles(catt) }>{catt.catogary}</button>
            ))}
            
            <>
        <button className="catButton" variant="primary" onClick={() => setModalShow(true)}>
          <IoAdd />
        </button>
  
        <AddCatogary handleCallback = {handleCallback}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
     
            <input className="searchBar" type="text"  placeholder="Search for keywords, author" onChange={(e)=> handleChange(e.target.value)} value={input} />
           
            <div>
            {input.length > 1 ? (
                    filteredResults.map(({title,description,url,urlToImage,author,publishedAt}) => { return <NewsItem title={title} description={description} url={url} urlToImage={urlToImage} author={author} publishedAt={publishedAt} />}
                        )):
            (articles.map(({title,description,url,urlToImage,author,publishedAt}) => {
                return <NewsItem title={title} description={description} url={url} urlToImage={urlToImage} author={author} publishedAt={publishedAt} />
            }))} 
            </div> 
                 
        </div>
    );
        
    
};

export default NewsList;