import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={""} />
                <Route path="*" element={""} >
                    <Navigate to="/" />
                </Route>
            </Routes>
        </Router>
    );
};
