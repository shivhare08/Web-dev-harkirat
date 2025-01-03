function Children() {

    const todo = [{
        title:"go to gym",
        done : true
    },{
        title:"eaten food",
        done : false
    },{
        title:"playing cricket",
        done : false
    }]
 
    return (
        <>

            {/* TODO */}
            {todo.map(todos => <Todo title={todos.title} done={todos.done}></Todo>)}
            {/* TODO */}

            {/* <Card innerContent={"hey there"}></Card> */}
            {/* <Card innerContent={<div style={{color:"black"}}>
                <h3>How are you</h3>
            </div>}></Card> */}
            {/* <Card>
                <div style={{ color: "black" }}>
                    <h3>How are you</h3>
                </div>
            </Card>

            <Card>
            <div style={{ color: "blue" }}>
                    <h3>Im good</h3>
                </div>
            </Card> */}
        </>
    )
}

function Card({ children }) {
    return (

        <div style={{ background: "orange", padding: 15, margin: 15, color: "white", borderRadius: 12 }}>
            {children}
        </div>

    )
}

//TODO EXAMPLE

function Todo(props){
    return(
        <>  
        <div style={{background:"green" , color:"whitesmoke" , borderRadius:12 , padding : 10 , margin:10}}>
            <h3>{props.title + " => "} {(props.done ? "done" : "not done")}</h3>
        </div>
        </>
    )
}

export default Children