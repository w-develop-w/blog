import {Link} from 'react-router-dom'
import './Header.css'

export function Header() {
    return (
        <header>
        <Link to="/" className="logo">
            Blog
        </Link>
        <nav>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </nav>
    </header>
    )
} 