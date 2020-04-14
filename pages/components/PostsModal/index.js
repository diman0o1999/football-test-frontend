import React from "react";
import {Modal} from "react-bootstrap";
import {AgGridReact} from "ag-grid-react";


/**
 * Тблица статей определенного автора
 * @param author
 * @param clearAuthor
 */
export default ({author, clearAuthor}) => {
    const columnDefs = [
        { headerName: "title", field: "title" },
        { headerName: 'text', field: 'body' }
    ]
    return (
        <Modal size='lg' show centered onHide={clearAuthor}>
            <Modal.Header closeButton>
                <Modal.Title>Статьи {author.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="ag-theme-balham" style={{height: 400}}>
                    <AgGridReact
                        columnDefs={columnDefs}
                        rowData={author.posts}>
                    </AgGridReact>
                </div>
            </Modal.Body>
        </Modal>
    )
}