function List(){
    const todos = [{
        title:"go to gym",
        done: false
    },{
        title:"sleeping early",
        done:true,
        desc: "i will work"
    }]

    // const todoComponents = todos.map(data => <Todo
    // title = {data.title} done={data.done}/>)

    const todoComponents = todos.map(data => <Todo title={data.title}
    done = {data.done} desc={data.desc}/>)
    return(
        <>
            {todoComponents}
        </>
    )
}

function Todo({title , done , desc}){
    return(
        <>
            {title} - {done ? "Done" : "please do it bro ,"} - {desc}
        </>
    )
}

export default List;