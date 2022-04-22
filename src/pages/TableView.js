import React, { useMemo } from 'react'
import DataTable from '../components/DataTable'

const TableView = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), [])

  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), [])

  const rowData = [
    {
      root: 'Root',
      DIR1: 'F1',
      DIR2: 'F11',
      count: 1
    },
    {
      root: 'Root',
      DIR1: 'F1',
      DIR2: 'F12',
      count: 1
    },
    {
      root: 'Root',
      DIR1: 'F2',
      DIR2: 'F21',
      count: 1
    },
    {
      root: 'Root',
      DIR1: 'F2',
      DIR2: 'F22',
      count: 1
    },
    {
      root: 'Root',
      DIR1: 'F2',
      DIR2: 'F22',
      DIR3: 'F221',
      count: 1
    }
  ]

  const columnDefs = [
    { field: 'root', rowGroup: true, hide: true },
    { field: 'DIR1', rowGroup: true, hide: true },
    { field: 'DIR2', rowGroup: true, hide: true },
    { field: 'DIR3', rowGroup: true, hide: true },
    { headerName: 'Count of File', field: 'count', aggFunc: 'sum' }
  ]
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
      sortable: true,
      resizable: true
    }
  }, [])

  const autoGroupColumnDef = {
    cellRendererParams: {
      footerValueGetter: params => {
        const isRootLevel = params.node.level === -1
        if (isRootLevel) {
          return 'Grad Total'
        }
        return `Total (${params.value})`
      }
    }
  }
  return (
    <div style={containerStyle}>
      <div style={gridStyle} className="ag-theme-alpine">
        <DataTable
          columnDefs={columnDefs}
          rowData={rowData}
          defaultColDef={defaultColDef}
          autoGroupColumnDef={autoGroupColumnDef}
          groupIncludeTotalFooter
        />
      </div>
    </div>
  )
}
export default TableView
