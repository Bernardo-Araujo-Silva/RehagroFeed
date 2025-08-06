import {useState} from 'react'
import './PostCardComment.css'

const PostCardComment = () => {
    const [text, setText] = useState('')

    const handlePost = () => {
        if (text.trim() === '') return
        console.log('Comentario postado:', text)
        setText('')
    }
  return (
    <div className='new-comment'>
        <div className='avatar'>B</div>
          <div className='user-info'>
          <strong>Bernardo</strong>
          <span>Dev Fullstack</span>
        </div> 
        <input
            type='text'
            placeholder='O que você está pensando?'
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
    </div>
    
  )
}

export default PostCardComment