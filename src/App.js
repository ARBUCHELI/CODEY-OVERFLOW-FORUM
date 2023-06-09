import React from 'react';
import {comments} from './commentData';
import Card from './Card';

const App = () => {
  return (
    <div style={{border: "1px solid transparent", width: "50%", marginLeft: "28%", padding: "1em"}}>
      {
        comments.map(comment => 
          <Card commentObject={comment} />
      )}
    </div>
    )
}

export default App;