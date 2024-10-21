function NotificationComponent({props}){
    return <div>
        <div style={{display:"flex"}}>
            <div><img style={{cursor:"pointer"}} src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-bell-icon-png-image_927119.jpg" width={40} /></div>
            <div style={{width:20, height:20, backgroundColor:"red" , borderRadius:30}}>
                <span style={{paddingLeft:6 , color:"white"}}>{props}</span>
            </div>
        </div>
    </div>
}


export default NotificationComponent