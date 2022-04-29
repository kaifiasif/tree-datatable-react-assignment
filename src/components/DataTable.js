import React from 'react'
import { AgGridReact } from 'ag-grid-react'

import 'ag-grid-enterprise'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

const DataTable = ({
  rowData,
  columnDefs,
  defaultColDef,
  autoGroupColumnDef,
  groupIncludeFooter,
  groupIncludeTotalFooter,
  groupDisplayType
}) => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <div
        id="data-table"
        style={{
          height: '100%',
          width: '100%'
        }}
        className="ag-theme-alpine"
      >
        <AgGridReact
          defaultColDef={defaultColDef}
          columnDefs={columnDefs}
          autoGroupColumnDef={autoGroupColumnDef}
          rowData={rowData}
          groupDisplayType={groupDisplayType}
          immutableData={true}
          groupIncludeTotalFooter={groupIncludeTotalFooter}
          groupIncludeFooter={groupIncludeFooter}
        />
      </div>
    </div>
  )
}
export default DataTable
