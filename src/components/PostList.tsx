import { useGetPostsQuery } from "@/services/postApi";

function PostList() {
    const { data:posts, isFetching } = useGetPostsQuery(null);
    if(isFetching) return <>Loading</>;
    return (
        <ul>
            {posts?.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}

export default PostList;
