import React from 'react'

function Footer() {
    const footerStyle = {
        background: '#12171c',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '6rem',
        color: '#ffffffda',

    }
    return (
        <div style={footerStyle}>
            <p>Copyright &copy; 2020 Ahmad Jaber</p>
        </div>
    )
}

export default Footer
