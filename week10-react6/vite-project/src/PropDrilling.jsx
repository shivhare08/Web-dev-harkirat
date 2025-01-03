import { useContext, useState, createContext } from "react"



//Step 1 => defining the context
const BulbContext = createContext();

//yha pr CONTEXT KA PROVIDER ALGA HI USE KRLIA...
function BulbProvider({ children }) {   //this children represents the light because im wrapped the light btw the BulbProvider
    const [bulbOn, setBulbon] = useState(true);

    return (
        <BulbContext.Provider value={{
            bulbOn: bulbOn,
            setBulbon: setBulbon,
            anything : "i'm anything"
        }}>
            {children}
        </BulbContext.Provider>
    )
}

export default function PropDrilling() {
    return (
        <>
            <BulbProvider>
                <Light />
            </BulbProvider>


            {/*Step 2 => wraping the components */}
            {/* <BulbContext.Provider value={{
                bulbOn:bulbOn,
                setBulbon:setBulbon
            }}>
                <Light/>
            </BulbContext.Provider> */}
        </>
    )
}


function Light() {
    return (
        <>
            <LightBulb />
            <LightSwitch />
        </>
    )
}

function LightBulb() {
    //step 3 => consuming the things
    const { bulbOn , anything } = useContext(BulbContext);
    return (
        <>
            <h2>{anything}</h2>
            {bulbOn ? <h1 style={{ backgroundColor: "green", color: "white" }}>on</h1> : <h1 style={{ backgroundColor: "red", color: "white" }}>off</h1>}
        </>
    )
}

function LightSwitch() {
    const { bulbOn, setBulbon } = useContext(BulbContext);
    function click() {
        setBulbon(!bulbOn);
    }
    return (
        <>
            <button onClick={click}>button</button>
        </>
    )
}


