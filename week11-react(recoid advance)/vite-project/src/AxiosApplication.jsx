import { useEffect } from "react";
import axios from "axios"
import { atom, RecoilRoot, selector, useRecoilState, useRecoilValue } from "recoil"


//creating the atom
// const NotificationsAtom = atom({
//     key:"All notification",
//     default:{
//         network:100,
//         jobs:1,
//         notifications:6,
//         messages:5,
//     }
// })


//Async data queries
const NotificationsAtom = atom({
    key: "All notification",
    default: selector({
        key: "this selector can be asunc",
        get: async () => {
            const res = await axios.get("")
            return res.data
        }
    })
})

//creating the selector
const NotificationSelector = selector({
    key: "All notification selectors",
    get: ({ get }) => {
        const totalFeilds = get(NotificationsAtom)

        return totalFeilds.jobs + totalFeilds.messages + totalFeilds.network + totalFeilds.notifications;
    }
})

export default function AxiosApp() {
    return (
        <>
            <RecoilRoot>
                <MainApp />
            </RecoilRoot>
        </>
    )
}

function MainApp() {
    const [notification, setNotification] = useRecoilState(NotificationsAtom);
    const totalNotification = useRecoilValue(NotificationSelector);


    return (
        <>
            <button>Home</button>
            <button >My Network  {notification.network > 99 ? "99+" : notification.network}</button>
            <button>Jobs {notification.jobs}</button>
            <button>Messages {notification.messages}</button>
            <button>Notification {notification.notifications}</button>
            <button>me {totalNotification} </button>
        </>
    )
}