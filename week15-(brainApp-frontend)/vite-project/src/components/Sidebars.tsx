import Sidebarcompitems from "./Sidebarcompitems";
import { Tweetsicon } from "../icons/Tweet"
import { Videoicon } from "../icons/Videoicon"

export default function Sidebar() {
    return (
        <div className="bg-white fixed rounded-r border-r border-gray-400 shadow-md max-w-80 min-h-full min-w-64 pl-2 pt-2">
            <p className="text-slate-800 flex gap-2 items-center text-2xl font-semibold ml-3 pt-3">
                <p className="text-purple-900 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                </p>

                <p>Your Brain</p>
            </p>
            <hr className="mt-3 border border-1 border-gray-700"></hr>
            <div className="min-h-full p-5">
                <Sidebarcompitems startIcon={<Tweetsicon size={"md"} />} content={"Twitter"} size={"md"} />
                <Sidebarcompitems startIcon={<Videoicon size={"md"} />} content={"Youtube"} size={"md"} />
            </div>
        </div>
    )
}