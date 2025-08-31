import React, { useEffect, useState } from 'react';
import NewsItem from '../Components/NewsItem';

const NewBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const params = new URLSearchParams({
            country: 'us',
            page: '1',
            pageSize: '20',
        });
        if (category) params.set('category', category);

        fetch(`/api/news?${params.toString()}`)
            .then((response) => {
                if (!response.ok) throw new Error('Failed to fetch articles');
                return response.json();
            })
            .then((data) => setArticles(data.articles || []))
            .catch((error) => console.error('Error fetching data:', error));
    }, [category]);

    return (
        <div className="container container-narrow py-4">
            <h2 className="text-center mb-4">
                Latest <span className="badge bg-danger">News</span>
            </h2>

            {articles?.length ? (
                <div className="row g-4">
                    {articles.map((news, idx) => (
                        <div className="col-12 col-sm-6 col-lg-4" key={idx}>
                            <NewsItem
                                title={news.title}
                                description={news.description}
                                src={news.urlToImage}
                                url={news.url}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <p>No articles available</p>
            )}
        </div>
    );
};

export default NewBoard;
