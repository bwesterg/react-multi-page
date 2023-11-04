import Navbar from '../components/Navbar';


export default function Home() {
    
    const handleClick = () => {
        let currentValue = document.getElementById("my-button").innerText;
        if(currentValue == "Off"){
            console.log("button is on");
            document.getElementById("my-button").innerText = "On";
        } else {
            console.log("button is off");
            document.getElementById("my-button").innerText = "Off";
        }
    }

    return (
        <>
            <Navbar />
            <div className="temp-div">

                <h2>Home Page</h2>
                <p>texty</p>
            </div>
            <div className="paragraph-div">
                <p>this is some stuff on my home page</p>
                <div id="on-off-playground">
                    <button id="my-button" onClick={handleClick}>On</button>
                </div>
                
            </div>
        </>
    )
}