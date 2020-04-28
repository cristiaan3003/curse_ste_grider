import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
import faker from 'faker'

const App = () =>{
  return (
  <div className="ui container comments">
    <ApprovalCard>
        <CommentDetail author='Sam' 
                      timeAgo='Today at 8:00 PM' 
                      content='my personal blog!'
                      avatar={faker.image.avatar()}
                      />
    </ApprovalCard>
    <ApprovalCard>
          <CommentDetail author='Cristian' 
                        timeAgo='Today at 2:00 PM' 
                        content='Nice blog post!'
                        avatar={faker.image.avatar()}
                        />
    </ApprovalCard>
  </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
