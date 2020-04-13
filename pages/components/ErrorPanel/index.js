import React from "react";
import {Alert} from "react-bootstrap";
import styles from './styles'


/**
 * Alert с сообщением об ошибке по центру экрана
 * @param text
 */
export default ({text}) => (
    <Alert variant='danger' style={styles.center}>{text}</Alert>
)