import React from 'react'
import './Posts.css'
import {PostsData} from '../../Data/PostsData'

const Posts = () => {
  return (
      <div className="Posts">
      {PostsData.map((post,id) => {
        return <Posts/>
            })}
    </div>
  )
}

export default Posts