import React, { useState, useEffect } from "react";
import './TypingField.scss';

export function TypingField(props){
    const [parsedText, setText] = useState([]);
    const [mountedDate, setDate] = useState(new Date());
    const [allKeydowns, setKeydown] = useState(0);
    const [successfullKeydowns, setSuccess] = useState(0);
    const [lastInput, setLastInput] = useState('');
    const [finalStatus, setFinalStatus] = useState(false);

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
        function typing(event){
                if (finalStatus != true){
                setKeydown(allKeydowns + 1);
                setLastInput(event.key);
                if(event.key === parsedText[successfullKeydowns]){
                    setSuccess(successfullKeydowns + 1);
                    setLastInput('');
                }
            }
        }
        successfullKeydowns === parsedText.length && successfullKeydowns != 0 ? setFinalStatus(true) : setFinalStatus(false);
        window.addEventListener('keypress', typing);
        return () => window.removeEventListener('keypress', typing);
    }, [allKeydowns, successfullKeydowns])

    return ( finalStatus ? <Results successfullKeydowns = {successfullKeydowns} allKeydowns = {allKeydowns} mountedDate = {mountedDate} setReady = {props.setReady}/> :
        <section className='main'>
            <div className='container'>
                <div className='text'>
                    <LetterList parsedText = {parsedText} successfullKeydowns = {successfullKeydowns} lastInput = {lastInput}/>
                </div>
                <div className="statistic">
                    <Accuracy successfullKeydowns = {successfullKeydowns} allKeydowns = {allKeydowns}/>
                    <TypingSpeed successfullKeydowns = {successfullKeydowns} mountedDate = {mountedDate}/>
                    <Restart setReady = {props.setReady}/>
                </div>
            </div>
            <div className='empty'></div>
        </section>
        )
        
    

}

function LetterList(props){
    const activeStatus = props.successfullKeydowns;
    const letters = props.parsedText;
    const lastInput = props.lastInput;
    const listLetters = letters.map((letter, index) => {
        if (index < activeStatus){
            return <span className='kpressed' key={index}>{letter}</span>
        } else if (index == activeStatus){
            if (lastInput != ''){
                return <span className='kerror' key={index}>{letter}</span>
            }
            return <span className='kactive' key={index}>{letter}</span>
        }  else if (index > activeStatus){
            return <span className='kwaiting' key={index}>{letter}</span>
        }}
    )
    return listLetters;
}

function Accuracy(props){
    const successes = props.successfullKeydowns;
    const keyPresses = props.allKeydowns;
    let calculatedAccuracy = successes / keyPresses * 100;

    return (
        <div>
            <div className="name">Точность</div>
            <div className="static">{Math.floor(calculatedAccuracy * 10) / 10}%</div>
        </div>
    )
    
}

function TypingSpeed(props){
    const successes = props.successfullKeydowns;
    const mountingDate = props.mountedDate;
    let calculatedTypingSpeed = successes / (new Date() - mountingDate) * 1000 * 60;

    return (
        <div>
            <div className="name">Скорость</div>
            <div className="static">{Math.floor(calculatedTypingSpeed)} зн/мин</div>
        </div>
    )
}

function Restart(props){
    return <button className="restart" onClick = {() => props.setReady(false)}>Заново</button>
}

function Results(props){
    return (
        <section className='main'>
            <div className='container result'>
                <div className="message">Поздравляем с успешным прохождением теста! Ваши результаты:</div>
                <div className="finalstat">
                <Accuracy successfullKeydowns = {props.successfullKeydowns} allKeydowns = {props.allKeydowns}/>
                <TypingSpeed successfullKeydowns = {props.successfullKeydowns} mountedDate = {props.mountedDate}/>
                <Restart setReady = {props.setReady}/>
                </div>
            </div>
            <div className='empty'></div>
        </section>
    )
}
