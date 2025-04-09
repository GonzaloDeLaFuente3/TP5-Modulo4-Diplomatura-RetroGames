// src/router/AppRouter.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemList from '../pages/ItemList';
import ItemDetail from '../pages/ItemDetail';
import ItemCreate from '../pages/ItemCreate';
import ItemEdit from '../pages/ItemEdit';
import NotFound from '../pages/NotFound';
import Header from '../components/Header';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/items" element={<ItemList />} />
        <Route path="/items/:id" element={<ItemDetail />} />
        <Route path="/items/create" element={<ItemCreate />} />
        <Route path="/items/:id/edit" element={<ItemEdit />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
};

export default AppRouter;
