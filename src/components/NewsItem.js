import React from 'react'
import './NewsItem.css';

const NewsItem = ({title,description,url,urlToImage,author,publishedAt}) => {
    return (<div className="article">
        <img className="news-image" src={urlToImage} alt="News Image" />
        <a href={url} className="news-title">
           {title} 
        </a>
        <p> 
        <span className="news-author">{author} &nbsp;</span>
        <span class="dot"></span>
        <span className="news-time"> &nbsp;{publishedAt}</span>
        </p>
        <p className='news-description'>
            {description}
        </p>        
    </div>);
        
    
}

export default NewsItem;