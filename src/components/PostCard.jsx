import React, { useState } from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, Featured_Image }) {

  return (
    <>
      {console.log(`starting :${$id}`)}
      <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
          <div className='w-full justify-center mb-4'>
            {/* {console.log($id)} */}
            {console.log(`title is: ${title}`)}

            {console.log(`featureImage : ${Featured_Image}`)}

            <img src={appwriteService.getFilePreview(Featured_Image)} alt={title} className='rounded-xl' />

          </div>
          <h2
            className='text-xl font-bold'
          >{title}</h2>
        </div>
      </Link>
    </>
  )
}


export default PostCard