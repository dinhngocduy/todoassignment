import React from "react";
import { Link } from "react-router-dom";
import Feed from "./Feed";
import { useContext } from "react";
import DataContext from "./context/DataContext";
const Home = () => {
  const { searchResults, fetchError, isLoading } = useContext(DataContext);
  return (
    <main className="Home">
      {isLoading && <p>Loading Post...</p>}
      {!isLoading && fetchError && <p>{fetchError}</p>}
      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p>No Posts</p>
        ))}
    </main>
  );
};

export default Home;
