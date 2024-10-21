const imageStyle = { width: 50, height: 50, borderRadius: 50, paddingTop: 5, paddingLeft: 5 };
const rightChild = { marginLeft: 8 };
const parentDiv = { width: "20rem", backgroundColor: "white", borderRadius: 8, display: "flex" };
const upperparentDiv = { backgroundColor: "white", width: "20rem", borderRadius: 8, margin: "0 auto" };

function PostComponent({name , subtitle , time , image , description , working , apply}) {      //as a props
  return <div style={{ backgroundColor: "gray", width: "100%", height: "11rem" }}>
    <div style={upperparentDiv}>
      <div style={parentDiv}>
        <div>
          {/* image */}
          <img style={imageStyle} src={image} />
        </div>
        <div style={rightChild}>
          {/* content */}
          <b style={{ fontSize: 17 }}>{name}</b>
          <div>{subtitle}</div>
          <div style={{ display: "flex" }}>
            <div>{time}</div>

            {/* conditional rendering */}
            {time !== undefined && <div>
              <img style={{ width: 13, height: 13, marginLeft: 3, marginTop: 3 }} src='https://media.istockphoto.com/id/1389937723/vector/cartoon-planet-earth-3d-vector-icon-on-white-background.jpg?s=612x612&w=0&k=20&c=hntEYVS5xepGQi1AIpRipUTYnH2Tp_S1TXS5M-pQe3A=' />
            </div>}

            {/* {working !== undefined && <div>{working}</div>} */}
            {(working !== undefined) ? <div>{working} <button style={{color:"white" , backgroundColor:"red"}}>apply</button></div> : null}

          </div>
        </div>
      </div>
      <div style={{ padding: 12 }}>
        <b>
          {description}
        </b>
      </div>
    </div>
  </div>
}

export default PostComponent;