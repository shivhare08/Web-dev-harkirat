import { useState} from 'react'
import {atom, RecoilRoot, selector, useRecoilValue, useSetRecoilState} from 'recoil';
import './App.css'



//defining all atoms for network , notification , message and jobs
const networkAtom = atom({
  key : "my network",
  default : 13
})  

const notificationAtom = atom({
  key : "Notification",
  default : 20,
})

const messageAtom = atom({
  key : "messages",
  default : 15
})  

const jobsAtom = atom({
  key : "jobs",
  default : 2
})  


//defining a selector
const selectorTotal = selector({
  key:"total Selector",
  get : ({get})=>{
    const networkCount = get(networkAtom)
    const notiCount = get(notificationAtom)
    const jobsCount = get(jobsAtom)
    const msgCount = get(messageAtom)

    return networkCount + notiCount + jobsCount + msgCount;
  }
})

function App() {
  return(
    <>
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
    </>
  )  
}


function MainApp(){
  const NotificationCount = useRecoilValue(notificationAtom)
  const JobsCount = useRecoilValue(jobsAtom)
  const MessageCount = useRecoilValue(messageAtom)
  const MyNetwork = useRecoilValue(networkAtom)
  // const TotalNotification = NotificationCount + JobsCount + MessageCount + MyNetwork

  const TotalNotification= useRecoilValue(selectorTotal)



  return (
    <>
      <button>Home</button>
      <button >My network ({MyNetwork})</button>
      <button>Jobs ({JobsCount})</button>
      <button>Messaging ({MessageCount})</button>
      <button>Notification ({NotificationCount}) </button>
      <button>Me ({TotalNotification})</button>
    </>
  )
}

export default App
