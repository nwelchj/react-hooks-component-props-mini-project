import React from "react";
import Article from "./Article";

const ArticleList = ({posts}) => {
    console.log (posts)
    return (
        <main>
            {posts.map((post, index) =>(
                <Article
                key={index}
                date ={post.date}
                preview={post.preview}
                title={post.title}
                />
            ))}
        </main>
    );
};

export default ArticleList;