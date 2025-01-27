import React, { useEffect, useState } from 'react';
import NewsItem from '../Components/NewsItem'; // Assuming you have this component


const NewBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const apiKey = import.meta.env.VITE_API_KEY; // Assuming you have set your API key in an .env file
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch articles');
                }
                return response.json();
            })
            .then(data => {
                console.log("Fetched data:", data); // Log the API response
                setArticles(data.articles);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, [category]);

    return (
        <div>
            <h2 className="text-center">
                Latest <span className="badge bg-danger">News</span>
            </h2>
            {articles && articles.length > 0 ? (
                articles.map((news, index) => (
                    <NewsItem
                        key={index}
                        title={news.title}
                        description={news.description}
                        src={news.urlToImage}
                        url={news.url}
                    />
                ))
            ) : (
                <p>No articles available</p>
            )}
        </div>
    );
};

export default NewBoard;
