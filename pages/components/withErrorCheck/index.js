import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import ErrorPanel from '../ErrorPanel'


const mapStateToProps = state => ({
    error: state.default.error,
})

/**
 * HOC, проверяющий на ошибки (действия, имеющие в типе FAIL|SUCCESS)
 * @param Component
 */
const withErrorCheck = Component => ({error, ...props}) => {
    if (error)
        return <ErrorPanel text={error} />
    return <Component {...props} />
}

export default compose(
    connect(mapStateToProps, null),
    withErrorCheck,
);