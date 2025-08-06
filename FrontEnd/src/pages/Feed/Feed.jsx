import {Header} from '@components/Header/Header';
import PostCardComment from '@components/PostCard/PostCardComment'
import PostCardDelete from '@components/Postcard/PostCardDelete'



const Feed = () => {
  return (
    <div>
      <Header />
      <PostCardComment />
      <PostCardDelete />
    </div>
  )
}

export default Feed
