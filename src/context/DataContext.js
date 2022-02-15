import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import api from "api/api";
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [postCategory, setPostCategory] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const { data, fetchError, isLoading } = {};
  const doneTasks = {
    backgroundColor: "rgb(76, 247, 96)",
    textDecoration: "line-through",
  };
  const history = useHistory();
  useEffect(() => {
    setPosts(data);
  }, [data]);
  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.category.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;

    const newPost = {
      id: id,
      title: postTitle,
      category: postCategory,
      body: postBody,
      check: false,
    };
    try {
      const response = await api.post("/posts", newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      setPostCategory("");
      history.push("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postLists = posts.filter((post) => post.id !== id);
      setPosts(postLists);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  const filterLow = () => {
    const postLists = posts.filter((post) => post.category === "Low Priority");
    setPosts(postLists);
  };

  const handleEdit = async (id) => {
    const updatedPost = {
      id,
      title: editTitle,
      category: editCategory,
      body: editBody,
    };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id == id ? { ...response.data } : post))
      );
      setEditBody("");
      setEditTitle("");
      setEditCategory("");
      history.push("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  const handleCheck = async (id) => {
    let listPosts = posts.map((post) =>
      post.id === id
        ? {
            ...post,
            checked: !post.checked,
          }
        : post
    );
    setPosts(listPosts);
  };
  const lowPrioLists = posts.filter((post) =>
    post.category.includes("Low Priority")
  );

  const midPrioLists = posts.filter((post) =>
    post.category.includes("Medium Priority")
  );
  const highPrioLists = posts.filter((post) =>
    post.category.includes("High Priority")
  );
  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        searchResults,
        fetchError,
        isLoading,
        postTitle,
        setPostTitle,
        postBody,
        setPostBody,
        postCategory,
        setPostCategory,
        handleSubmit,
        editTitle,
        setEditTitle,
        editBody,
        setEditBody,
        editCategory,
        setEditCategory,
        handleEdit,
        posts,
        lowPrioLists,
        midPrioLists,
        highPrioLists,
        handleDelete,
        setPosts,
        filterLow,
        handleCheck,
        doneTasks,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
