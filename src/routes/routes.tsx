import { Home } from '../pages/home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};
