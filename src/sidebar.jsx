import { useState } from "react";
import { Menu, X } from "lucide-react"; // Ícones
import { Link } from "react-router-dom";


export function Sidebar(prop) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Botão de abrir/fechar */}
      <button
        onClick={toggleSidebar}
        className="toggle-button"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar */}
      {isOpen && (
        <aside className="sidebar">
          <h1>ORIGENS</h1>
          <nav>
            <p>MENU</p>
            <ul>
              <li><Link to="/inicio" className="button button-light">Início</Link></li>
              <li><button className="button button-light">Buscar</button></li>
              <li><button className="button button-light">Explorar</button></li>
              <li><button className="button button-light">Carrinho</button></li>
              <li><button className="button button-light">Favoritos</button></li>
            </ul>
            <p>BRASIL</p>
            <ul>
              <li><button className="button button-light">Listar Categorias</button></li>
              <li><button className="button button-light">Personalizar Gostos</button></li>
              <li><button className="button button-light">Filtrar Regiões</button></li>
            </ul>
            <p>ÁREA DO ARTESÃO</p>
            <ul>
              <li><Link to="/cadastro" className="button button-light">Perfil Vendedor</Link></li>
              <li><Link to="/analise" className="button button-light">Análise de Vendas</Link></li>
              <li><button className="button button-light">Estoque</button></li>
              <li><Link to="/pedidos" className="button button-light">Pedidos</Link></li>
              <li><button className="button button-light">Avaliações</button></li>
            </ul>
            <ul>
              <li><button className="button button-light">Listar Categorias</button></li>
              <li><button className="button button-light">SAC</button></li>
            </ul>
          </nav>
        </aside>
      )}
    </div>
  );
}
