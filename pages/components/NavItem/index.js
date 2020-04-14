import React from "react";
import {Nav} from 'react-bootstrap'
import Link from "next/link";
import styles from './styles'


/**
 * Элемент навигационной панели
 * @param Icon
 * @param href
 * @param children
 */
export default ({Icon, href, children}) => {
    return (
        <Nav.Link>
            <Link href={href}>
                <div style={styles.wrapper}>
                    <Icon style={styles.icon} />
                    <span>{children}</span>
                </div>
            </Link>
        </Nav.Link>
    )
}