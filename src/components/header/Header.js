import React from "react";
import s from './Header.module.scss';

export const Header = () => {
    return <section className={s.header}>
        <div className={s.container}>
            <div className={s.logo}>Best Typing App</div>
            <ul className={s.menu}>
                <li className={s.point}>ТРЕНАЖЕР</li>
                <li className={s.point}>ТЕСТИРОВАНИЕ</li>
                <li className={s.point}>ОБУЧЕНИЕ</li>
                <li className={s.point}>КУРСЫ</li>
            </ul>
            <ul className={s.menu}>
                <li className={s.sign}>Вход</li>
                <span className={s.sign}>или</span>
                <li className={s.sign}>Регистрация</li>
            </ul>
        </div>
    </section>
}