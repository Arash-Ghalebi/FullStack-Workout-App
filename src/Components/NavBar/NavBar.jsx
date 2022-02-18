import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav className='topnav'>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/workout-schedule'>
                    <li>Workout Schedule</li>
                </Link>
                <Link to='/personal-records'>
                    <li>Personal Records</li>
                </Link>
                <Link to='/weight-tracker'>
                    <li>Weight Tracker</li>
                </Link>
                <Link to='/exercise-list'>
                    <li>Exercise Lists</li>
                </Link>
            </ul>
        </nav>
    );
}

export default NavBar;