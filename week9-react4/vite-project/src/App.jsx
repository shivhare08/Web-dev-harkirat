//here children me jo bhi card ke bich me likha h vo aayega

const Card =({children})=>{
  return(
    <div style={{
      border:'1px solid black',
      borderRadius:'5px',
      padding:'20px',
      margin:'10px',
      boxShadow:'2px 2px 8px black',
    }}>
      {children}
    </div>
  )
}

const Another =({children})=>{
  return(
    <div style={{
      border:'1px solid black',
      borderRadius:'5px',
      padding:'20px',
      margin:'10px',
      boxShadow:'2px 2px 8px black',
    }}>
      {children}
      <textarea cols={20}></textarea>
    </div>
  )
}

const AnyElment =()=>{
  return(
    <div>
      <h2>hlo how are you</h2>
    </div>
  )
}



function App(){
  return(
    <>
      <Card>
        <h3>CARD</h3>
        <AnyElment></AnyElment>
      </Card>

      <Another>
        <h3>ANOTHER CARD</h3>
      </Another>
    </>
  )
}
export default App;
