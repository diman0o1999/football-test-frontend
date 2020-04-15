import {
    Button,
    Card,
    CardColumns, Modal,
} from "react-bootstrap";
import {connect} from "react-redux";
import React, {useEffect} from "react";
import {clearAuthor, getAuthor, getAuthors} from "./actions";
import CentralSpinner from '../../components/CentralSpinner'
import GridTable from '../../components/GridTable'
import withErrorCheck from '../../components/withErrorCheck'


/**
 * Список авторов статей с их кол-вом
 * @param isLoading
 * @param authors
 * @param author
 * @param error
 * @param dispatch
 */
const AuthorsList = ({isLoading, authors, author, dispatch}) => {
    useEffect(() => {
        dispatch(getAuthors())
    }, [])

    if (isLoading)
        return <CentralSpinner />

    const authorsGroup = authors.map(author =>
        <Card key={author.id} >
            <Card.Body>
                <Card.Title>{author.name}</Card.Title>
                <Card.Body>
                    <Button variant='dark'
                            onClick={() => dispatch(getAuthor(author.id))}>
                        Статей: {author.posts.length}
                    </Button>
                </Card.Body>
            </Card.Body>
        </Card>
    )

    const columnDefs = [
        { headerName: "Название", field: "title" },
        { headerName: 'Текст', field: 'body', resizable: true  }
    ]
    return (
        <>
            {author &&
                <Modal size='lg'
                       show
                       centered
                       onHide={() => dispatch(clearAuthor())}>
                    <Modal.Header closeButton>
                        <Modal.Title>Статьи {author.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <GridTable columnDefs={columnDefs} rowData={author.posts} />
                    </Modal.Body>
                </Modal>
            }
            <div className='text-center'>
                <CardColumns>
                    {authorsGroup}
                </CardColumns>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    authors: state.authorsList.authors,
    author: state.authorsList.authorDetail,
    isLoading: state.authorsList.isLoading,
})

export default connect(mapStateToProps)(withErrorCheck(AuthorsList))