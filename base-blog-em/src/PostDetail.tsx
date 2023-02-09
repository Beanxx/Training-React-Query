async function fetchComments(postId: number) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    return response.json();
  }
  
  async function deletePost(postId: number) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/postId/${postId}`,
      { method: "DELETE" }
    );
    return response.json();
  }
  
  async function updatePost(postId: number) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/postId/${postId}`,
    //   { method: "PATCH", data: { title: "REACT QUERY FOREVER!!!!" } }
    );
    return response.json();
  }

  type PostType = {
    title: string;
    body: string;
  }

  interface PostProps {
    post: PostType
  }
  
  export function PostDetail({ post}: PostProps) {
    // replace with useQuery
    const data: any[] = [];
  
    return (
      <>
        <h3 style={{ color: "blue" }}>{post.title}</h3>
        <button>Delete</button> <button>Update title</button>
        <p>{post.body}</p>
        <h4>Comments</h4>
        {data.map((comment) => (
          <li key={comment.id}>
            {comment.email}: {comment.body}
          </li>
        ))}
      </>
    );
  }