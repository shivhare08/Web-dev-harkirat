import Button from "./components/Button"
import { Plusicon } from "./icons/Plusicon"
import { ShareIcon } from "./icons/Share"


function App() {
  return (
    <>
      <div>
        {/* <Button size="sm" variant="primary" text="Share" onClick={()=>{}}/> */}
        <Button startIcon={<ShareIcon size="md"/>} size="md" variant="primary" text="Share" onClick={()=>{}}/>
        <Button startIcon={<Plusicon size="md"/>} size="md"  variant="secondry" text="Add Content" onClick={()=>{}}/>
      </div>
    </>
  )
}

export default App
