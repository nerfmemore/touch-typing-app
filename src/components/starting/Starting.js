import React from "react";
import s from './Starting.module.scss'; 

export const StartingWindow = (props) => {
    return <section className={s.main}>
        <div className={s.container}>
            <div className={s.opener}>
                <div className={s.message}>Приготовься печатать, поехали!</div>
                <button className={s.button} onClick = {() => props.setReady(true)}>НАЧАТЬ ПЕЧАТАТЬ</button>
            </div>
        </div>
        <div className={s.empty}></div>
    </section>
}