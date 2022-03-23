import { useEffect, useState } from 'react';
import { fetchBoard } from '../services/bulletinboard';
import { useParams } from 'react-router-dom';

function BulletinBoard() {
  const params = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBoard();
      setPosts(data);
    };
    fetchData();
  }, [params.name]);

  return (
    <div>
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}

export default BulletinBoard;
