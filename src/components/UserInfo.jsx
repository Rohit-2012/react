import React from 'react'

const UserInfo = ({userData, goBack}) => {
  return (
    <section className='user--info'>
        <h2>Thankyou {userData.firstName} {userData.lastName} for submiting the form</h2>
          <p>Your data will be mail to your email id : {userData.email}</p>
      <p>Since you are a {userData.gender} {userData.profession}, why don't you checkout some male accessories on Flipkart</p>
      <button className='go-back' onClick={goBack}>⬅ Go Back</button>
    </section>
  )
}

export default UserInfo
