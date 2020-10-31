import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";

import { useSelector } from "react-redux";

const Posts = () => {
  const classes = useStyles();
  /*
    See reducers/index.js to see the state of redux
  */
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
