import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    titile: "czym jest teoria strun 1",
    author: "Jan Nowak",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
  },
  {
    id: 2,
    titile: "czym jest teoria strun 2",
    author: "Robert Nowak",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
  },
  {
    id: 3,
    titile: "czym jest teoria strun 3",
    author: "Sebastian Nowak",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));

  return (
    <>
      <div className="home">
        <h1>Strona startowa</h1>
        {artList}
      </div>
    </>
  );
};

export default HomePage;
