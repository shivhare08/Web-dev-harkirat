import { useEffect, useState } from 'react'
import State from './state'
import PostComponent from './Post'
import NotificationComponent from './Notification';
import Automatic from './AutoNoti';


function App() {
  const [posts, setPosts] = useState([]);    //empty array

  const postcomponents = posts.map(p =>
    <PostComponent
      name={p.name}
      working={p.working}
      subtitle={p.subtitle}
      time={p.time}
      image={p.image}
      description={p.description}
    ></PostComponent>)

  //let name = document.querySelector("input").value
  function AddPost() {
    setPosts([...posts, {
      name: "shashank",
      working: "Fresher",
      // subtitle: "23,866 followers",
      time: "12m",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQHEPSIxrL8j2Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728110178705?e=1734566400&v=beta&t=9UwZqU2XZkkCW2uyprzi9xzH_wODfOyE0Xu7Jvryhyc",
      description: " business landscape and beyond. He was not just a businessman but a man of deep integrity",
    }])
  }


  // Notification section
  const AddLike = ()=>{
    const [liked, setLiked] = useState(0);
    function like() {
      setLiked(liked + 1);
    }
    return (
      <div>
        <NotificationComponent props={liked}></NotificationComponent>
        <button onClick={like}>like</button>
        <button onClick={like}>comment</button>
      </div>
    )
  }

  function AutomaticNotification(){
    const [auto , setAuto] = useState(0);
    
    // setInterval(useEffect(()=>{
    //   setAuto(auto+1)
    // },[]),1000)
  //console.log("im outside");
  
    // useEffect(()=>{
      
    //   let time = setInterval(()=>{
    //     setAuto((anything) => anything+1)
    //   },1000)

    //   return function(){
    //     setAuto(time)
    //   } 
    // },[])

    useEffect(()=>{
      setInterval(increment,1000)
      return console.log("hey");      //this return triggers when the value of auto == 5
    },[auto == 5])
//yha pr 5 sec baad return trigger hua

    useEffect(()=>{
      console.log("increasing " + auto);
    },[auto == 2])

    function increment(){
      //like => setAuto(auto == 0) then auto as a reference then increment
      setAuto(anything => anything+1)

      //or

      // setAuto(function(x){
      //   return x+1
      // })
    }

    // if(auto==10){
    //   console.log("saale");
    // }
    
    // setInterval(()=>{
    //   setAuto(auto+1);
    // },1000)

    return (
      <div>
        <Automatic props={auto}></Automatic>
      </div>
    )
  }


  return (
    <>

    <div>
    {<AutomaticNotification/>}
    <div style={{margin:"10%"}}>{<AddLike/>}</div>
      

      
    </div>
      {/* <ToggleMessage></ToggleMessage> */}
      {/* components */}

      {/*       
      <PostComponent
        name ="Shashank Shivhare"
        subtitle = "23,866 followers"
        time ="12m"
        image = {"https://media.licdn.com/dms/image/v2/D4D03AQHDJ89uPToJJw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718306080095?e=1734566400&v=beta&t=4kSgiPlBcv8nwpiqtc6Oa6yJwyN7LSjoAgq_mw-qdWU"}

        description = " business landscape and beyond. He was not just a businessman but a man of deep integrity"
      ></PostComponent>

      <PostComponent
      name ="Aman Gupta"
      subtitle = "Promoted"
      // time ="12m"
      image = {"https://media.licdn.com/dms/image/v2/D4D03AQFVEEFxxCQMVQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1689877352229?e=1734566400&v=beta&t=9u2_zEcOo27lTj6oVWbD3C9e8UcHTEVUrkSjvajbuM0"}
      description = "Ratan Tata, a visionary leader, left an indelible mark on India's business landscape and beyond. He was not just a businessman but a man of deep integrity"
      ></PostComponent>

    <PostComponent
      name ="Wipro"
      subtitle = "company"
      // working = "A software company"
      time ="2 days ago"
      image = {"https://media.licdn.com/dms/image/v2/D560BAQEyHRAMazda_g/company-logo_200_200/company-logo_200_200/0/1727788622013/wipro_logo?e=1736985600&v=beta&t=ZhOWWkbkSph40yKDKnLh0NHiX-1xi34l2QKR5_j0lpc"}
      description = "Are you passionate about technology and innovation? Start your career with Accenture and own your career journey by bringing your skills, curiosity and best true self to work.">
    </PostComponent> */}
  
      <input placeholder='write' name="name" />
      <button onClick={AddPost}>Add post</button>
      <div>
        {postcomponents}
      </div>

      {/* <State/> */}
    </>
  )
}


// something different
const ToggleMessage = () => {
  const [isVisible, setisVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setisVisible(!isVisible)}>Toggle Message</button>
      {isVisible && <p>bhia mere</p>}
    </div>
  )
}

export default App