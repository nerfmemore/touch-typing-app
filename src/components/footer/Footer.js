import React from "react";
import s from './Footer.module.scss'

export function Footer(){
    return <section className={s.footer}>
        <ul className={s.menu}>
            <li className={s.point}>О нас</li>
            <li className={s.point}>Рейтинги</li>
            <li className={s.point}>Помощь</li>
            <li className={s.point}>Контакты</li>
            <li className={s.point}>Поддержать проект</li>
        </ul>
    </section>
}