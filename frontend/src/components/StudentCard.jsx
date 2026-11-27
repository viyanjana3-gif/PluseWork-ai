import React from 'react'

function StudentCard(props) {
  return (
    <div>
      <h2 className="text-lg font-bold">
        {
          props.Name
        }
      </h2>
      <p className="mt-2 text-3xl text-purple-600">
        {
          props.RollNo
        }
      </p>
        
    </div>
  )
}

export default StudentCard