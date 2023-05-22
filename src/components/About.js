import React, {useState} from 'react'
import PropTypes from 'prop-types'
export const About = (props) => {
    const [myStyle, setMyStyle] = useState({
        backgroundColor:"white",
        color:"black"
    });
    const [defaultMood,UserMood] = useState("Enable Dark Mood")
    const toggleMood=()=>{
        if (myStyle.color==="black"){
            setMyStyle({
                color:"white",
                backgroundColor:"black"
            });
            UserMood("Enable Light Mood");
        }
        else{
            setMyStyle({
                color:"black",
                backgroundColor:"white"
            })
            UserMood("Enable Dark Mood");
        }
    }

  return (
    <div className='container my-3' style={myStyle}>
        <h1 className='text-center my-3' style={myStyle}>{props.header}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat sit repudiandae facilis, provident maxime quam magnam, asperiores ex reiciendis beatae quia. Amet, dolor culpa rerum ea illo aliquam expedita. At reiciendis facere in voluptates quaerat ea maiores. Iusto odit fuga corrupti, ipsa, modi aspernatur voluptatem eveniet obcaecati quibusdam suscipit distinctio enim nihil atque fugit? Saepe minus maxime a voluptatum. Saepe laboriosam, magnam voluptatum labore molestias non vel. Non animi adipisci reprehenderit, omnis laudantium ea laborum ex fugiat, ipsam illo odio?
        </p>
        <button className="btn btn-primary my-5" onClick={toggleMood}>{defaultMood}</button>
    </div>
  )
}
About.Prototypes={
    header:PropTypes.string,
};