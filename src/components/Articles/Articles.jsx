import React , { useEffect, useState } from 'react';
import axios from 'axios';
import './Articles.css'

function Articles(){

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const apiUrl = 'https://dev.to/api/articles?username=antoniorws';

        axios.get(apiUrl)
        .then(response => {
            // Armazene todos os objetos de artigo
            const articleData = response.data;

            // Atualize o estado com os dados dos artigos
            setArticles(articleData);
        })
        .catch(error => {
            console.error('Erro ao buscar artigos:', error);
        });
    }, []);

    return <ul class="articles">
         {articles.map(article => (
            <li class="article" key={article.id}>
                <a href={article.url}>
                    <img src={article.cover_image} alt="" />
                    <strong>{article.title}</strong>
                    <p>{article.description}</p>
                </a>
            </li>
        ))}
    </ul>
};

export default Articles;