import React from 'react'

import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.Header}>
            <div className={styles.HeaderText}>
                <h1 className={styles.HeaderLogo}>foodie</h1>
                <p>make your favorite recpie</p>
            </div>
        </header>
    )
}

export default Header
