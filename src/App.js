import React from 'react';
import {comments} from './commentData'

const App = () => {
  return (
    <div>
      {
        comments.map(comment => 
          <Card commentObject={comment} />
      }
    </div>
    )
  )
}

export default App;