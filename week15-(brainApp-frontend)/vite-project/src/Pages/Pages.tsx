import { useState } from "react"
import Button from "../components/Button"
import Card from "../components/Card"
import CreateContentCreator from "../components/CreateContentModel"
import { Plusicon } from "../icons/Plusicon"
import { ShareIcon } from "../icons/Share"
import Sidebar from "../components/Sidebars"
import { useContent } from "../hooks/useContent"
import axios from "axios"

function Dashboard() {
  const [modalOpen, setModelOpen] = useState(false)
  const contents = useContent();
  return (

    <div className="flex">
      <CreateContentCreator open={modalOpen} onClose={() => {
        setModelOpen(false)
      }} />

      <div>
        <Sidebar/>
      </div>
      <div className="w-full min-h-screen bg-gray-100">
        <div className="flex ml-72" >
          <div className="flex gap-4 flex-wrap">
            {contents.map(({type , link , title})=><Card type={type} link={link} title={title} />)}
          </div>

          <div className="flex justify-end gap-2 mt-5 ml-48">
            <div>
              <Button onClick={async () => { 
                const response = await axios.post("http://localhost:2560/api/v1/share/brain",{
                  share : true
                },{
                  headers : {
                    "Authorization" : localStorage.getItem("token")
                  }
                });
                const url = `http://localhost:2560/api/v1/share/brain/${response.data.hash}`
                alert(url)
              }} startIcon={<ShareIcon size="md" />} size="md" variant="primary" text="Share Brain" />
            </div>
            <div>
              <Button onClick={() => {
                setModelOpen(true)
              }} startIcon={<Plusicon size="md" />} size="md" variant="secondry" text="Add Content" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard