import { useState } from "react"
import Button from "../components/Button"
import Card from "../components/Card"
import CreateContentCreator from "../components/CreateContentModel"
import { Plusicon } from "../icons/Plusicon"
import { ShareIcon } from "../icons/Share"
import Sidebar from "../components/Sidebars"
import  useContent  from "../hooks/useContent"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function Dashboard() {
  const [modalOpen, setModelOpen] = useState(false)
  const contents = useContent();
  const navigate = useNavigate();
  return (

    <div className="sm:flex">
      <CreateContentCreator open={modalOpen} onClose={() => {
        setModelOpen(false)
      }} />

      <div>
        <Sidebar />
      </div>

      {/* button start */}

      {/* <div className="flex justify-center sm:position sm:fixed sm:top-0 sm:right-1 sm:justify-end gap-2 sm:mt-5 ">
        <div className="flex justify-between items-center gap-2">
          <div>
            <Button onClick={async () => {
              const response = await axios.post("http://localhost:2560/api/v1/share/brain", {
                share: true
              }, {
                headers: {
                  "Authorization": localStorage.getItem("token")
                }
              });
              const url = `http://localhost:2560/api/v1/share/brain/${response.data.hash}`
              alert(url)
            }} startIcon={<ShareIcon size="md" />} size="md" variant="primary" text="Share" />
          </div>

          <div>
            <Button onClick={() => {
              setModelOpen(true)
            }} startIcon={<Plusicon size="md" />} size="md" variant="secondry" text="Add" />
          </div>

          <div className="sm:hidden" onClick={() => {
            try {
              localStorage.removeItem("token")
              navigate("/")
            } catch (err) {
              console.log(err);
            }
          }}>
            <Button text={"Logout"} variant={"dark"} size={"md"} />
          </div>
        </div>
      </div> */}
      {/* buttone end */}

      {/* button start */}

      <div className="flex justify-center sm:position sm:fixed sm:top-0 sm:right-1 sm:justify-end gap-2 sm:mt-5 ">
        <div className="flex justify-between items-center gap-2">
          <div>
            <Button onClick={async () => {
              const response = await axios.post("https://mybrain-backend-h8my.onrender.com", {
                share: true
              }, {
                headers: {
                  "Authorization": localStorage.getItem("token")
                }
              });
              const url = `https://mybrain-backend-h8my.onrender.com/${response.data.hash}`
              alert(url)
            }} startIcon={<ShareIcon />} size="md" variant="primary" text="Share" />
          </div>

          <div>
            <Button onClick={() => {
              setModelOpen(true)
            }} startIcon={<Plusicon />} size="md" variant="secondry" text="Add" />
          </div>

          <div className="sm:hidden" onClick={() => {
            try {
              localStorage.removeItem("token")
              navigate("/")
            } catch (err) {
              console.log(err);
            }
          }}>
            <Button text={"Logout"} variant={"dark"} size={"md"} />
          </div>
        </div>
      </div>
      {/* buttone end */}

      <div className="w-full min-h-screen sm:ml-52">
        <div className="flex justify-center sm:pt-16" >
          <div className="flex gap-4 flex-wrap justify-center">
            {contents.map(({ type, link, title }) => <Card type={type} link={link} title={title} />)}
          </div>
        </div>
      </div>

    </div>


  )
}

export default Dashboard