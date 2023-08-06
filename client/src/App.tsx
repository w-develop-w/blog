import React from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Post } from "./components/Post/Post"
import { Header } from "./components/Header/Header"

function App() {
  return (
    <Router>
      <Routes>
        <Route
          index
          element={
            <main>
              <Header />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
            </main>
          }
        />

        <Route path={'/login'} element={
            <div>login</div>
        }/>
      </Routes>
    </Router>
  )
}

export default App
