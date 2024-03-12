import React, {useState} from 'react'

export default function About() {

    const [myStyle, setmyStyle]=useState({

        color: "white",
        backgroundColor: "black",
        border: '2px solid white'
    });

    const [btnText, setbtnText] = useState("Enable Light Mode")

    const toggleStyle = ()=>{
        if(myStyle.color === 'black'){
            setmyStyle ({
                color: "white",
        backgroundColor: "black"
            })
            setbtnText("Enable Light Mode")
        }
        else{
            setmyStyle ({
            color: "black",
    backgroundColor: "white"
            })
            setbtnText("Enable Dark Mode")
        }
    }
  return (
    <div>
        <h1 className="container my-3">About TextVan </h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <b>how it is useful?</b>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <b> How to use?</b> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  </div>
  <div className="container">
    <button onClick={toggleStyle} className="btn btn-primary my-3" type='button'>
       {btnText}
    </button>
  </div>
</div>
  )
}
