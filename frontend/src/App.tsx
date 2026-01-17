import { Routes, Route, Navigate } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import ContactList from './pages';
import AddContact from './pages/AddContact';
import EditContact from './pages/EditContact';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;