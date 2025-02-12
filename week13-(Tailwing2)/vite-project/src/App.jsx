function App() {
  return (
    <div>
      <FullApp />
    </div>
  )
}

function Screen() {
  return <div className="flex">
    <div className="bg-red-200 w-0 h-72 transition-all delay-0 duration-500  md:w-48">sidebar</div>
    <div className="bg-red-800 w-full md:bg-violet-600">content</div>

    {/* <button class="bg-blue-500 transition delay-1000 duration-1000 ease-in-out hover:-translate-y-10 hover:scale-110 hover:bg-indigo-500 ...">
      Save Changes
    </button> */}
  </div>
}

function FullApp() {
  return (
    <>
      <div className="">
        {/* <Card/> */}
        <Screen />
        {/* <Center/>
      <RigthBox/> */}
      </div>
    </>
  )
}

function Card() {
  return (
    <>
      <div className="bg-blue-50 border rounded-lg w-48 h-72 border-l-cyan-950">
        <div className="bg-green-50 border mx-12 mt-12 rounded-lg w-24 h-24 border-cyan-950"></div>
        <p className="text-sm font-semibold text-center mt-3">Shashank Shivhare</p>
        <p className="text-xs text-center  mt-3">shivhares2002@gmail.com</p>
        <p className="text-xs text-center">6269084857</p>
        <p className="text-xs text-center mt-3">Gwalior, india</p>
      </div>
    </>
  )
}

export default App