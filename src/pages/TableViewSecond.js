import React, { useMemo } from 'react'
import DataTable from '../components/DataTable'
import MyInnerRenderer from '../helper/MyInnerRenderer'

const TableViewSecond = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), [])

  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), [])

  const rowData = [
    {
      root: 'root',
      DIR1: 'F1',
      DIR2: 'F11',
      count: 1
    },
    {
      root: 'root',
      DIR1: 'F1',
      DIR2: 'F12',
      count: 1
    },
    {
      root: 'root',
      DIR1: 'F2',
      DIR2: 'F21',
      count: 1
    },
    {
      root: 'root',
      DIR1: 'F2',
      DIR2: 'F22',
      count: 1
    },
    {
      root: 'root',
      DIR1: 'F2',
      DIR2: 'F22',
      DIR3: 'F221',
      count: 1
    }
  ]

  const columnDefs = [
    { field: 'root', rowGroup: true, hide: true },
    { field: 'DIR1', rowGroup: true, hide: true, enableRowGroup: true },
    {
      field: 'DIR2',
      minWidth: 250,
      rowGroup: true,
      showRowGroup: true,
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: {
        footerValueGetter: MyInnerRenderer
      },
      headerName: 'Row Levels',
      enableRowGroup: true
    },
    {
      field: 'DIR3',
      minWidth: 250,
      rowGroup: true,
      hide: true,
      showRowGroup: true,
      enableRowGroup: true
    },
    { headerName: 'Count of File', field: 'count', aggFunc: 'sum' }
  ]

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 150,
      sortable: true,
      resizable: true
    }
  }, [])

  const autoGroupColumnDef = useMemo(() => {
    return {
      minWidth: 250
    }
  }, [])

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className="ag-theme-alpine">
        <DataTable
          columnDefs={columnDefs}
          rowData={rowData}
          defaultColDef={defaultColDef}
          autoGroupColumnDef={autoGroupColumnDef}
          groupIncludeTotalFooter
          groupDisplayType={'groupRows'}
        />
      </div>
    </div>
  )
}
export default TableViewSecond
