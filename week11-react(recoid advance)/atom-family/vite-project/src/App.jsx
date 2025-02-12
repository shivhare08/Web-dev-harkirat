import { RecoilRoot, useRecoilValue } from "recoil"
import { todosatomfamily } from "./atom"

function App() {

  return (
    <>
      <RecoilRoot>
        <TODO id={1} />
        {/* <TODO id={2} /> */}
      </RecoilRoot>
    </>
  )
}

function TODO({id}){
  const specificTodo = useRecoilValue(todosatomfamily(id))

  return(
    <>
    <h2> {specificTodo.title}</h2>
    </>
  )
}

export default App
