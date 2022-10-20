import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { SearchPage } from 'pages/SearchPage/SearchPage';
import { CountryPage } from 'pages/CountryPage/CountryPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="country/:id" element={<CountryPage />} />
        <Route path="country" element={<SearchPage />} />
      </Route>
    </Routes>
  );
};
