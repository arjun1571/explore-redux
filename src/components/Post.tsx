import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../featuers/posts/postSlice";

const Post = () => {
  const { posts, loading, error, isError } = useSelector((state) => state?.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  let content;

  if (loading) {
    content = <p>Loading...</p>;
  }
  if (!loading && isError) {
    content = <p>{error}</p>;
  }
  if (!loading && !isError && posts.length === 0) {
    content = <p>No posts available</p>;
  }
  if (!loading && !isError && posts.length > 0) {
    content = (
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  }

  return <div>{content}</div>;
};

export default Post;
