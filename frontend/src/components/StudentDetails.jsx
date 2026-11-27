import React from 'react'

const StudentDetails = ({name, email, age, course}) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
    </div>
  )
}

export default StudentDetails