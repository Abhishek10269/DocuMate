import React from 'react'

function chatToFile({
    params: {id},
}:{
    params: {
        id:string
    };
}) {
  return (
    <div>chatToFile : {id}</div>
  )
}

export default chatToFile