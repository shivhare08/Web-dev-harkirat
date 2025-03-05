import FormSubmission from "./FormSubmission"

interface user{
  name : string,
  age? : number,
  address? : string,
  action? : ()=> void
}

export default function App(){
  const user1 : user={
    name : "shashank",
    age : 23,
    address : "scindia nagar",
  }

  // const random=(data:user)=>{
  //   return <ShowComp name={data.name} age={data.age}/>
  // }
  return (
    <>
      {/* <ShowComp name={user1.name} age={user1.age}/> */}
      <FormSubmission/>
    </>
  )
}


function ShowComp(prop : user){
  return(
    <>
      <div>
        name : {prop.name}
        age : {prop.age}
        address : {prop.address}
      </div>
    </>
  )
}