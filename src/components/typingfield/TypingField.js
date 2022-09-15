import React, { useState, useEffect } from "react";
import s from './TypingField.module.scss';

export function TypingField(){
    const [allKeydown, setKeydown] = useState(0);
    const [successfullKeydown, setSuccess] = useState(0);
    const [parsedText, setText] = useState('');

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

    return (
        <section className={s.main}>
            <div className={s.container}>
                <div className={s.text}>
                    
                </div>
            </div>
            <div className={s.empty}></div>
        </section>
    )

}

