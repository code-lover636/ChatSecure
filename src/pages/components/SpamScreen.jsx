import {useRef, useState} from 'react'

import '../../styles/spamPage.scss'


const SpamScreen = () => {
  const text = useRef(0);
  const [prediction, setPrediction] = useState("Type in a message to check for spam");
  return (
    <div className="spam-screen">
        <div className="spam-classifier">
        <div className="background-image"></div>
        <div className="content">
            <h1 className="heading">Spam Classifier</h1>
            <p>EXAMPLE:  WINNER!! As a valued network customer you have been selected to received $900 prize reward!</p>
            <div className="text-area">
                <textarea ref={text} className="input-area" placeholder="Enter text here..." />
                <button className="predict-button" onClick={()=>predictSpam(text.current.value,setPrediction)}>Predict</button>
            </div>
            <p className="subtitle">{prediction}</p>
        </div>
        </div>
    </div>
  )
}

const predictSpam = (text, setPrediction) => {
  text.length === 0 ? setPrediction("Please type a message to check"):
  fetch('http://127.0.0.1:8000/predict', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': "*"
  },
  body: JSON.stringify({text}),
  })
  .then(res => res.json()).then(res=>{
    console.log(res);
    setPrediction(res.prediction);
  })
  .catch(error => {console.error('Error:', error); });
}

export default SpamScreen;
