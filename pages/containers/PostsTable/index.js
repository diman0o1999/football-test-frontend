import {connect} from "react-redux";
import {AgGridReact} from "ag-grid-react";
import React, {useEffect} from "react";
import CentralSpinner from "../../components/CentralSpinner";
import {getPosts} from "./actions";


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

    const defaultColDef = {
        flex: 1,
        autoWidth: true,
        cellStyle: {whiteSpace: 'normal !important'},
        autoHeight: true,
        resizable: true,
    }

    const columnDefs = [
        { headerName: "Название", field: "title" },
        { headerName: "Автор", field: 'author.name' },
        { headerName: 'Текст', field: 'body', resizable: true }
    ]

    if (isLoading)
        return <CentralSpinner />

    return (
        <>
            <h4 className='p-3 font-weight-bold text-center'>Список статей:</h4>
            <div className="ag-theme-balham">
                <AgGridReact
                    gridAutoHeight
                    defaultColDef={defaultColDef}
                    columnDefs={columnDefs}
                    rowData={posts}>
                </AgGridReact>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    posts: state.postsTable.posts,
    isLoading: state.postsTable.isLoading
})

export default connect(mapStateToProps)(PostsTable)