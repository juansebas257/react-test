import React from 'react';

function Button({ children, onClick, styles }) {
    return (
        <button style={styles} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;