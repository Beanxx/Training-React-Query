import { useState } from "react";
import { PostDetail } from "./PostDetail";
import { useQuery } from "react-query";

const maxPostPage = 10;

// 데이터를 가져오는 비동기 함수
// JSON server에서 게시물을 가져오는 함수
async function fetchPosts() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0"
  );
  return response.json();
}

export function Posts() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);

  // replace with useQuery
  const { data, isError, error, isLoading } = useQuery("posts", fetchPosts, {
    staleTime: 2000, // 2초마다 만료되도록 설정 (2초 동안 fresh 상태였다가 stale 상태로 바뀜)
  }); // (query name, query function-쿼리에 대한 데이터를 가져오는 방법)

  if (isLoading) return <h3>Loading...</h3>;
  if (isError)
    return (
      <>
        <h3>Oops, something went wrong</h3>
        <p>{error.toString()}</p>
      </>
    );

  return (
    <>
      <ul>
        {data.map((post) => (
          <li
            key={post.id}
            className="post-title"
            onClick={() => setSelectedPost(post)}
          >
            {post.title}
          </li>
        ))}
      </ul>
      <div className="pages">
        <button disabled onClick={() => {}}>
          Previous page
        </button>
        <span>Page {currentPage + 1}</span>
        <button disabled onClick={() => {}}>
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}
