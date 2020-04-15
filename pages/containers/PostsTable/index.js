import {connect} from "react-redux";
import React, {useEffect} from "react";
import CentralSpinner from "../../components/CentralSpinner";
import {getPosts} from "./actions";
import withErrorCheck from '../../components/withErrorCheck';
import GridTable from '../../components/GridTable';


/**
 * Таблица всей загруженных статей
 * @param posts
 * @param isLoading
 * @param dispatch
 */
const PostsTable = ({posts, isLoading, dispatch}) => {
    useEffect(() => {
        dispatch(getPosts())
    },[])

    if (isLoading)
        return <CentralSpinner />

    const columnDefs = [
        { headerName: "Название", field: "title" },
        { headerName: "Автор", field: 'author.name' },
        { headerName: 'Текст', field: 'body', resizable: true }
    ]
    return (
        <>
            <h4 className='p-3 font-weight-bold text-center'>Список статей:</h4>
            <GridTable columnDefs={columnDefs} rowData={posts} />
        </>
    )
}

const mapStateToProps = state => ({
    posts: state.postsTable.posts,
    isLoading: state.postsTable.isLoading,
})

export default connect(mapStateToProps)(withErrorCheck(PostsTable))