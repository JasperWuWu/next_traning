// 動態的MetaData，需要使用generateMetadata function 才可以正常
export function generateMetadata({ params }) {
  return {
    title: `Posts ${params.post_id}`,
    description: `this is about ${params._id}`,
  };
}

// 資料夾名稱[post_id]會變成params中的key，可以取得網址路徑中的值
const Post = ({ params }) => {
  const post_id = params.post_id;
  return <div>post{post_id}</div>;
};

export default Post;
