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
        resizable: true,
    }

    const getRawHeight = (params) =>
        params.api.getSizesForCurrentTheme().rowHeight

    return (
        <div className='ag-theme-material'>
            <AgGridReact
                domLayout='autoHeight'
                getRowHeight={getRawHeight}
                defaultColDef={defaultColDef}
                columnDefs={columnDefs}
                rowData={rowData}>
            </AgGridReact>
        </div>
    )
}