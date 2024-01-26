import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
  return (
    <h1>hlo guys</h1>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
0    <MyApp/>
  </React.StrictMode>,
)
