import React from 'react'
import './Posts.css'
import {PostsData} from '../../data/PostsData'

const Posts = () => {
  return (
      <div className="Posts">
      {PostsData.map((post, id) => {
        return <Post />
            })}
    </div>
  )
}

export default Posts