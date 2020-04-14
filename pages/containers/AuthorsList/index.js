import {Button, Col, Container, ListGroup, Row} from "react-bootstrap";
import {connect} from "react-redux";
import React, {useEffect} from "react";
import {clearAuthor, getAuthor, getAuthors} from "./actions";
import CentralSpinner from '../../components/CentralSpinner'
import ErrorPanel from '../../components/ErrorPanel'
import PostsTable from '../../components/PostsTable'


/**
 * Список авторов статей с их кол-вом
 * @param isLoading
 * @param authors
 * @param author
 * @param error
 * @param dispatch
 */
const AuthorsList = ({isLoading, authors, author, error, dispatch}) => {
    useEffect(() => {
        dispatch(getAuthors())
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
                        <Button variant='dark'
                                onClick={() => dispatch(getAuthor(author.id))}>
                            Статей: {author.posts.length}
                        </Button>
                    </Col>
                </Row>
            </Container>
        </ListGroup.Item>)
    return (
        <>
            {author && <PostsTable author={author} clearAuthor={() => dispatch(clearAuthor())} />}
            <ListGroup style={{width: 40 + '%'}}>
                {authorsListGroup}
            </ListGroup>
        </>
    )
}

const mapStateToProps = state => ({
    authors: state.authorsList.authors,
    author: state.authorsList.authorDetail,
    error: state.authorsList.error,
    isLoading: state.authorsList.isLoading,
})

export default connect(mapStateToProps)(AuthorsList)