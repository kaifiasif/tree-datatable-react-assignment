import TableView from './pages/TableView'
import TableViewSecond from './pages/TableViewSecond'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TableView />} />
        <Route path="second-view" element={<TableViewSecond />} />
      </Routes>
    </div>
  )
}

export default App
