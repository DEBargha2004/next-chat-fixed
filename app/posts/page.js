'use client'

import PostAppreciations from '@/components/Posts/PostAppreciations'
import PostCreation from '@/components/Posts/PostCreation'
import PostDescription from '@/components/Posts/PostDescription'
import PostEngage from '@/components/Posts/PostEngage'
import PostImage from '@/components/Posts/PostImage'
import PostWrapper from '@/components/Posts/PostWrapper'
import { firestoreDB } from '@/firebase.config'
import { getImage } from '@/functions/getImage'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'

function page () {
  const [posts, setPosts] = useState([])

  async function getPosts () {
    setPosts([])
    const posts_firestore = await getDocs(collection(firestoreDB, `posts`))
    for (const doc of posts_firestore.docs) {
      const post = doc.data()
      setPosts(prev => [...prev, post])
    }
  }

  useEffect(() => {
    getPosts()
  }, [])
  return (
    <div className='w-[calc(100%-80px)] h-full flex items-start justify-center overflow-auto'>
      <div className='w-[40%] '>
        {posts.map(post => {
          return (
            <PostWrapper className={`w-full`}>
              <PostCreation createdAt={post.createdAt} creator={post.creator} />
              <PostDescription description={post.postDescription} />
              <PostImage address={post.postImageAddress} className={``} />
              <PostAppreciations
                commentsCount={post.commentsCount}
                likesCount={post.likesCount}
                shareCount={post.shareCount}
              />
              <PostEngage post={post} />
            </PostWrapper>
          )
        })}
      </div>
    </div>
  )
}

export default page
