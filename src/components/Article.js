import React from "react";

const Article = ({ id, title, author, text }) => {
  const article_titile_styles = {
    marginBottom: 20,
  };
  const article_author_styles = {
    display: "block",
    marginBottom: "10px",
    fontSize: "12px",
  };
  const article_text_styles = {
    fontSize: "16px",
    fontWeight: "300",
  };

  return (
    <article className={"article_item id_" + id} style={article_titile_styles}>
      <h3 className="article_titile">{title}</h3>
      <span className="article_author" style={article_author_styles}>
        {author}
      </span>
      <p className="article_text" style={article_text_styles}>
        {text}
      </p>
    </article>
  );
};

export default Article;
