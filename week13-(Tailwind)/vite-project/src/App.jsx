import { useRef, useState } from 'react'
import './App.css'
import { Button} from './components/Button'
import { Text} from './components/Text'
import { OTP } from './OTP'

function App() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  const [disabled , setDisabled] = useState(true);
  
  return (
    <>
    <div className='flex justify-center mt-20'>
      <OTP referenc={ref1} onDone={()=>{
        ref2.current.focus()
      }} onBack={()=>{
      }}/>

      <OTP reference={ref2} onDone={()=>{
        ref3.current.focus()
      }} onBack={()=>{
        ref1.current.focus();
      }}/>

      <OTP reference={ref3} onDone={()=>{
        ref4.current.focus()
      }} onBack={()=>{
        ref2.current.focus()
      }}/>

      <OTP reference={ref4} onDone={()=>{
        ref5.current.focus()
      }} onBack={()=>{
        ref3.current.focus()
      }}/>

      <OTP reference={ref5} onDone={()=>{
        ref6.current.focus()
      }} onBack={()=>{
        ref4.current.focus()
      }}/>

      <OTP reference={ref6} onDone={()=>{
        setDisabled(x => !x);
      }} onBack={()=>{
        ref5.current.focus()
      }}/>
    </div>

    <Button disabled={disabled} children={"verify"}></Button>



      {/* <Text type="text" placeholder="write something"/> */}
      {/* <Button children="submit"/> */}
    </>
  )
}

// const OTP =({reference , onDone})=>{
//   return(
//       <>
//           <input ref={reference} onChange={()=>{
//               onDone()
//           }} placeholder="" type="text" className="bg-blue-400 outline-none text-white pl-4 ml-1 w-10 h-10 rounded"/>
//       </>
//   )
// }

export default App




{/* <div className='flex justify-center'>
        <div className='md:bg-green-500 sm:bg-blue-300 bg-red-500 w-full h-80 '>

        </div>
      </div>
      <br />
      <br />
      <div className='flex'>
        <div className='w-80 opacity-55 rounded-lg  hover:rounded-full  shadow-2xl shadow-red h-80 bg-blue-600'>
          hey
        </div>

        <div className='w-80 pt-20 h-80 bg-green-600'>
          hey
        </div>
      </div>

      <br />
      <div className='grid grid-cols-12 text-right mt-5'>
        <div className='bg-green-500 md:col-span-4 col-span-12 text-center italic'>Home</div>
        <div className='bg-red-500 md:col-span-4 col-span-12 text-3xl'>About</div>
        <div className='bg-blue-500 md:col-span-4 col-span-12  font-bold'>Contact</div>
      </div>

      <p className='font-bold text-3xl bg-indigo-500 font-serif'>hey</p>
      <div className='font-serif flex flex-row-reverse'>
        <div className='bg-green-500 basis-2/6'>Home</div>
        <div className='bg-rose-500 basis-2/6'>About</div>
        <div className='bg-blue-500 basis-2/6'>Contact</div>
      </div>
      <br /> */}
      {/* hover */}
      // <div className='font-serif flex flex-col hover:flex-row bg-red-600'>
      //   <div>Home</div>
      //   <div className='basis-2/6'>About</div>
      //   <div className='basis-2/6'>Contact</div>
      // </div>
      // <br />
      {/* wrap */}
      // <div className='bg-green-500 font-serif flex justify-around'>
      //   <div className='bg-zinc-500'>Home</div>
      //   <div className='bg-zinc-500'>About</div>
      //   <div className='bg-zinc-500'>Contact</div>
      // </div>
      // <br />
      {/* justify-items-start ,end , center , stretch */}
      // <div className='font-serif grid justify-items-center'>
      //   <div>01</div>
      //   <div>02</div>
      //   <div>03</div>
      //   <div>04</div>
      //   <div>05</div>
      //   <div>06</div>
      // </div>

      //<br />
      {/* grids */}
      // <div className='grid grid-cols-6 gap-4 hover:grid-cols-2'>
      //   <div className='bg-red-500 col-span-5'>01</div>
      //   <div className='bg-green-500'>02</div>
      //   <div className='bg-yellow-500'>03</div>
      //   <div className='bg-zinc-500'>04</div>
      //   <div className='bg-blue-500'>05</div>
      //   <div className='bg-orange-500'>06</div>
      //   <div className='bg-rose-300'>07</div>
      //   <div className='bg-red-500 col-span-2'>01</div>
      //   <div className='bg-green-500'>02</div>
      //   <div className='bg-yellow-500'>03</div>
      //   <div className='bg-zinc-500 col-span-2'>04</div>
      //   <div className='bg-blue-500'>05</div>
      //   <div className='bg-orange-500'>06</div>
      //   <div className='bg-rose-300'>07</div>
      // </div>

      // <br /><br />
      // <div className='grid grid-cols-10'>
      //   <div className='bg-blue-600 col-span-3'>
      //     hey this is col-span-5
      //   </div>

      //   <div className='bg-green-600 col-span-2'>
      //     hey this is col-span-4
      //   </div>

      //   <div className='bg-blue-600 col-span-1'>
      //     hey this is col-span-4
      //   </div>

      //   <div className='bg-red-600 col-span-4'>
      //     hey this is col-span-5
      //   </div>
      // </div>