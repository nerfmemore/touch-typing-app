import React from "react";
import styles from './Header.module.scss';

export const Header = () => {
    return <section className={styles.header}>
        <div className={styles.container}>
            <div className={styles.logo}>Лого</div>
            <ul className={styles.menu}>
                <li className={styles.point}>Тренажер</li>
                <li className={styles.point}>Тестирование</li>
                <li className={styles.point}>Обучение</li>
                <li className={styles.point}>Курсы</li>
            </ul>
            <ul className={styles.login}>
                <li className="signin">Вход</li>
                <span className="or">или</span>
                <li className="signin">Регистрация</li>
            </ul>
        </div>
    </section>
}