import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Sidebar } from './sidebar.jsx';
import { Cadastro } from './cadastro.jsx';
import { Gerenciamento } from './gerenciamento.jsx';
import { Analise } from './analise.jsx';
import { Inicio } from './inicio.jsx';
//import { Mapa } from './mapa.jsx';

import styles from './app.module.css';
import './global.css';

function App() {
  return (
   <Router>
      <div className={styles.wrapper}>
        
      <Sidebar />
        <main>
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/pedidos" element={<Gerenciamento />} />
            <Route path="/analise" element={<Analise />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/inicio" element={<Inicio />} />
        </Routes>
        

        </main>
      </div>
      </Router>
  
  );
}

export default App;
