import {Button, Col, Container, ListGroup, Row} from "react-bootstrap";
import {connect} from "react-redux";
import React, {useEffect} from "react";
import {getAuthors} from "./actions";
import CentralSpinner from '../../components/CentralSpinner'
import ErrorPanel from '../../components/ErrorPanel'


/**
 * Список авторов статей с их кол-вом
 * @param isLoading
 * @param authors
 * @param error
 * @param getAuthors
 */
const AuthorsList = ({isLoading, authors, error, getAuthors}) => {
    useEffect(() => {
        getAuthors()
    }, []);


    if (isLoading)
        return <CentralSpinner />

    if (error)
        return <ErrorPanel text={error} />

    const authorsListGroup = authors.map(author =>
        <ListGroup.Item key={author.id}>
            <Container fluid>
                <Row>
                    <Col className='my-auto'>{author.name}</Col>
                    <Col className='text-right'>
                        <Button variant='dark'>Статей: {author.postsCount}</Button>
                    </Col>
                </Row>
            </Container>
        </ListGroup.Item>)
    return (
        <ListGroup style={{width: 40 + '%'}}>
            {authorsListGroup}
        </ListGroup>
    )
}

const mapStateToProps = state => ({
    authors: state.authorsList.authors,
    error: state.authorsList.error,
    isLoading: state.authorsList.isLoading,
})

const mapDispatchToProps = dispatch => ({
    getAuthors: () => dispatch(getAuthors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsList)