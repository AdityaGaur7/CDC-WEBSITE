import React, { useState } from "react";
import axios from "axios";
const StackOverflowSearch = () => {
  const [query, setQuery] = useState("");
  const [answers, setAnswers] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=relevance&q=${query}&site=stackoverflow`)
      .then((response) => {
        setAnswers(response.data.items);
        console.warn(response);
      })
      .catch((error) => {
        console.error("Error fetching answers:", error);
      });
  };

  return (
    <div className="container mx-auto h-screen" >
     

      <h1 className="text-3xl my-4 font-bold mb-4 ">Search Stack Overflow</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Enter your query..."
          className="border border-gray-400 p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded ml-2">Search</button>
      </form>
      <div className="query" style={{minHeight:'50vh'}}>
        {answers.map((answer) => (
          <div key={answer.question_id} className="bg-gray-200 p-4 rounded mb-4" style={{border:'1px solid white',padding:'4rem'}}>
            <a href={answer.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              <h2 className="text-xl font-bold text">{answer.title}</h2>
            </a>
            <p className="text-gray-600">Score: {answer.score}</p>
            <p className="text-gray-600">Tags: {answer.tags.join(", ")}</p>
            <p className="text-gray-600">Answered By: {answer.owner.display_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackOverflowSearch;
