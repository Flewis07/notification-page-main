import { useState, Component, useEffect } from 'react';
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
      return response.json();
    })
    .then(function(myjson) {
      setData(myjson.posts);
    });
  }

  useEffect(() => {
    
    getData()
  }, []);

  const handleUnreadNotifications= () => {
    let nbr = 0;
    for (let i = 0; i < data.length; i++){
      if(data[i].unread){
        nbr++;
      }
    }
    return nbr;
  }

  const handleRead = (index) => {
    let copieData = [...data];
    copieData[index].unread = ! copieData[index].unread;
    setData(copieData);
  }

  const handleAllRead = () => {

    let copieData = [...data];
    for (let i = 0; i < copieData.length; i++){
      if(copieData[i].unread){
        copieData[i].unread = ! copieData[i].unread;
      }
    }
    console.log(copieData);
    setData(copieData);
  }

  return (
    <div className='main w-md-75 m-auto pt-4 pb-4 ps-3 pe-3'>
      <Header 
        title="Notifications" 
        nbr={handleUnreadNotifications()} 
        read="Mark all as read"
        clic={() => handleAllRead()}/>
      {
        data.map((post, index) => {
          return(
            <Card
                key={index}
                avatar={post.avatar} 
                name={post.name} 
                event={post.event}
                index={index} 
                post={post.post} 
                group={post.group}
                message={post.message}
                picture={post.picture}
                time={post.time}
                unread={post.unread}
                clic={handleRead}
            />
          )
        })
      }
    </div>
  )
}

export default App
