import React from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout/Layout"
import { IndexPage } from "./components/Pages/IndexPage"
import { LoginPage } from "./components/Pages/LoginPage"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}> 
                    <Route index element={<IndexPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>

            </Routes>
        </Router>
    )
}

export default App
