import { useState, Component, useEffect } from 'react';
import { ReactDOM } from 'react';
import './App.css';
import Header from "./containers/Header/Header";
import Card from "./containers/Card/Card"
import "./assets/fonts/PlusJakartaSans-VariableFont_wght.ttf";

function App() {
  const [count, setCount] = useState(0)

  const [notificationList, setNotificationList] = useState([
    {
    avatar : "src/assets/images/avatar-mark-webber.webp",
    name : "Mark Webber",
    event : "reacted to your recent post",
    post : "My first tournament today!",
    unread : true
    }
  ])

  const [data, setData] = useState([]);

  const getData = () => {
    fetch("posts.json", {
      headers : {
        'Content-type' : 'application/json',
        'Accept' : 'application/json'
      }
    })
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(myjson) {
      console.log(myjson);
      setData(myjson.posts);
    });
  }

  useEffect(() => {
    
    getData()
    console.log(data.length);
  }, []);

  return (
    <div className='main w-md-75 m-auto pt-4 pb-4 ps-3 pe-3'>
      <Header title="Notifications" nbr="3" read="Mark all as read"/>
      {
        data.map(post => {
          return(
            <Card 
                avatar={post.avatar} 
                name={post.name} 
                event={post.event} 
                post={post.post} 
                group={post.group}
                message={post.message}
                picture={post.picture}
                time={post.time}
                unread={post.unread}
            />
          )
        })
      }
    </div>
  )
}

export default App
