import React from "react";
import Feed from "./Feed";
import { useContext } from "react";
import DataContext from "../context/DataContext";
const Home = () => {
  const { searchResults, fetchError, isLoading, setPosts, filterLow } =
    useContext(DataContext);
  return (
    <main className="Home">
      {isLoading && <p>Loading Post...</p>}
      {!isLoading && fetchError && <p>{fetchError}</p>}
      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <section>
            <Feed
              posts={searchResults}
              setPosts={setPosts}
              filterLow={filterLow}
            />
          </section>
        ) : (
          <p>No Posts</p>
        ))}
    </main>
  );
};

export default Home;
