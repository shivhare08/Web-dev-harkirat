import { RecoilRoot, useRecoilValue, atom , useSetRecoilState } from 'recoil'
//import { counterAtom } from './store/atoms/counter'

        //or

const counterAtom = atom({
  default : 0,
  key : "counter"
})
//////////////////////////////////////////
export default function App(){
  
  return(
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
  )
}


function Counter(){
  return(
    <>
      <CurrentCount/>
      <Increment/>
      <Decrement/>
    </>
  )
}

function CurrentCount(){
  const count = useRecoilValue(counterAtom) //this is like a getter method
  return(
    <>
      <h2>{count}</h2>
    </>
  )
}

function Increment(){
  const setCount = useSetRecoilState(counterAtom) //it is like setter method

  function increase(){
    setCount(c => c+1)
  }
  return(
    <>
      <button onClick={increase}>Increment</button>
    </>
  )
}


function Decrement(){
  const setCount = useSetRecoilState(counterAtom) //it is like setter method

  function decrease(){
    setCount(c => c-1)
  }
  return(
    <>
      <button onClick={decrease}>Decrement</button>
    </>
  )
}

