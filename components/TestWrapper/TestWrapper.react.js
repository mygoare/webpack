import React from 'react'
import styles from './TestWrapper.scss'

function TestWrapper({children})
{
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

function TestContent({content})
{
    return (
        <p>{content}</p>
    )
}

export {TestWrapper, TestContent}
