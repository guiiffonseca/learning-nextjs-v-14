import React from 'react'

const UserId = ({ params }: { params: { userId: string } }) => {
  return (
    <div>UserId: {params.userId}</div>
  )
}

export default UserId