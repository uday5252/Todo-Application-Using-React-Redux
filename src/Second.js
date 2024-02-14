import React from 'react'
import { useSelector } from 'react-redux'

export default function Second() 
{
    const result = useSelector(function(output)//output --> will store the data present
//   in redux store
  {
    return output.allTasks
  })
  
  return (
    <div>
     { result.map(function(i)
            {
                return <li>{i}</li>
            })
     }
    </div>
  )
}
