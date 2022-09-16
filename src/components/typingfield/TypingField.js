import React, { useState, useEffect } from "react";
import s from './TypingField.scss';


export function TypingField(){
    const [parsedText, setText] = useState([]);
    const [mountedDate, setDate] = useState(new Date());
    const [allKeydowns, setKeydown] = useState(0);
    const [successfullKeydowns, setSuccess] = useState(0);

    useEffect(() => {
        const ParsingText = async() => {
            const response = await fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=1');
            if (response.status === 200) {
                const message = await response.json();
                setText(message[0].split(''));
            } else {
                console.log('An error occurred');
            }
        }
        ParsingText();        
    }, [])

    useEffect(() => {

    })

    useEffect(() => {
        function typing(event){
            console.log(event);
                setKeydown(allKeydowns + 1);
                if(event.key === parsedText[successfullKeydowns]){
                    setSuccess(successfullKeydowns + 1);
                }
        }
        window.addEventListener('keypress', typing);
        return () => window.removeEventListener('keypress', typing);
    }, [allKeydowns, successfullKeydowns])

    return (
        <section className='main'>
            <div className='container'>
                <div className='text'>
                    <LetterList parsedText = {parsedText} successfullKeydowns = {successfullKeydowns}/>
                </div>
            </div>
            <div className='empty'></div>
        </section>
    )

}


function LetterList(props){
    const activeStatus = props.successfullKeydowns;
    const letters = props.parsedText;
    const listLetters = letters.map((letter, index) => {
        if (index < activeStatus){
            return <span className='kpressed' key={index}>{letter}</span>
        } else if (index == activeStatus){
            return <span className='kactive' key={index}>{letter}</span>
        } else if (index > activeStatus){
            return <span className='kwaiting' key={index}>{letter}</span>
        }}
    )
    return listLetters;
}

function Accuracy(props){
    const successes = props.successfullKeydowns;
    const keyPresses = props.allKeydowns;
    let calculatedAccuracy = successes / keyPresses * 100;

    return <div className="static">{calculatedAccuracy}%</div>
}
//                <Accuracy successfullKeydowns = {successfullKeydowns} allKeydowns = {allKeydowns}/>