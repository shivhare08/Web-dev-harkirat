import { useEffect, useRef, useState } from "react"



function App() {
  const [socket , setSocket] = useState();
  const inputRef = useRef(null);
  
  function sendMessage(){
    if(!socket){
      return;
    }

    //ping bhja

    //@ts-ignore
    const message = inputRef.current.value;
    //@ts-ignore
    socket.send(message)    //yha pr WebSocket ka hi use kia jo niche set kiya tha n server ko bhj dia message
  }

  //it will fetch on 1st mount only 
  //before send the messsage, we have to connect with websocket server here....
  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8800");    //fetching ki trha
    //@ts-ignore
    setSocket(ws);  //iske through weh set the global socket variable
   
    //jese hi message(pong) aaya
    ws.onmessage = (ev)=>{
      alert(ev.data)
    }
  },[])

 
  



  function Input(){
    return(
      <input ref={inputRef} className="rounded w-72 pl-2 h-20 placeholder:text-black" type="text" placeholder="Messages.."></input>
    )
  }
  
  interface sendFun{
    onClick : ()=>void
  }
  
  function Button(prop : sendFun){
    return(
      <button onClick={prop.onClick} className="rounded w-72 h-8 pl-2 text-white bg-purple-600">Send</button>
    )
  }


  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center bg-slate-700">
        <div className="flex justify-center">
          <Input/>
        </div>
        <div className="flex mt-1 justify-center">
          <Button onClick={sendMessage}/>
        </div>
      </div>
    </>
  )
}



export default App
