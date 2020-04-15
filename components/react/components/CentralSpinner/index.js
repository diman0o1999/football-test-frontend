import {Spinner} from "react-bootstrap";
import React from "react";

import styles from './styles'


/**
 * Спиннер загрузки по центру
 */
export default () => (
    <Spinner style={styles.central}
             animation="border"
             variant="primary" />
)