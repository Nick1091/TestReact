import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout';
import { Main } from '../Main';
import PageNotFound from '../Other/PageNotFound';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
