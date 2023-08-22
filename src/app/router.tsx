import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from '../layout';
import Login from '../pages/login';
import Contact from '../pages/contact';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Login />} />
      <Route path="contact" element={<Contact />} />
    </Route>,
  ),
);
