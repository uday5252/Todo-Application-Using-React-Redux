import React from 'react'

import { useSelector } from 'react-redux'

export default function First() 
{
  const result = useSelector(function(output)//output --> will store the data present
//   in redux store
  {
    return output.allTasks
  })

  return (
    <div>
        {
            result.map(function(i)
            {
                return <li>{i}</li>
            })
        }
    </div>
  )
}


// If any component has to access the data from the redux store, first that data which is
// there in the redux store should be given to the parent most component ==> App

// Now once the redux store data is given to the parent most component <App/>,
// then any other react component can access the data from the redux store

// useSelector()