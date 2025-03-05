export default function FormSubmission(){
    return(
        <div>
            <Form/>
        </div>
    )
}

function Form(){
    return(
        <div>
            <Input type={"text"} placeholder={"name"}/>
            <Input type={"number"} placeholder={"age"}/>
            <Input type={"text"} placeholder={"address"}/>
            <div className="flex">
                <Button text={"submit"} />
                <Button text={"back"} />
            </div>
        </div>
    )
}

function Input(prop : any){
    return(
        <div>
            <input type={prop.type} placeholder={prop.placeholder}/>
        </div>
    )
}


function Button(prop :any){
    return(
        <div>
            <button>{prop.text}</button>
        </div>
    )
}