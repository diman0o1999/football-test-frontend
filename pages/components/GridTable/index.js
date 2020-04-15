import React from "react";
import {AgGridReact} from "ag-grid-react";
import styles from "./styles";


/**
 * Компонент Ag-Grid таблицы
 * @param columnDefs
 * @param rowData
 */
export default ({columnDefs, rowData}) => {
    const defaultColDef = {
        flex: 1,
        cellStyle: styles.cell,
        autoHeight: true,
        resizable: true,
    }

    return (
        <div className='ag-theme-bootstrap'>
            <AgGridReact
                domLayout='autoHeight'
                defaultColDef={defaultColDef}
                columnDefs={columnDefs}
                rowData={rowData}>
            </AgGridReact>
        </div>
    )
}