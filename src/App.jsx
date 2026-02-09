import React, { useState, useEffect } from 'react';
import TabelaProdutos from './components/TabelaProdutos';
import ModalFormulario from './components/ModalFormulario';
import BarraBusca from './components/BarraBusca';
import './App.css';

function App() {
  // Armazenam os dados 
  const [produtos, setProdutos] = useState([]);
  const [termoBusca, setTermoBusca] = useState('');
  const [exibirModal, setExibirModal] = useState(false);
  const [produtoParaEditar, setProdutoParaEditar] = useState(null);

  // Carrega os dados salvos 
  useEffect(() => {
    const dadosSalvos = localStorage.getItem('estoque_dados');
    if (dadosSalvos) {
      setProdutos(JSON.parse(dadosSalvos));
    } else {
      // Dados iniciais 
      setProdutos([
        { id: 1, nome: 'Exemplo Produto', quantidade: 10, categoria: 'Geral', preco: 50 }
      ]);
    }
  }, []);

  // Salva automaticamente no navegador sempre que a lista muda
  useEffect(() => {
    localStorage.setItem('estoque_dados', JSON.stringify(produtos));
  }, [produtos]);

  // Lógica de busca
  const produtosFiltrados = produtos.filter(p => 
    p.nome.toLowerCase().includes(termoBusca.toLowerCase())
  );

  const excluirProduto = (id) => {
    setProdutos(produtos.filter(p => p.id !== id));
  };

  const salvarProduto = (dados) => {
    if (produtoParaEditar) {
      setProdutos(produtos.map(p => p.id === dados.id ? dados : p));
    } else {
      setProdutos([...produtos, { ...dados, id: Date.now() }]);
    }
    fecharModal();
  };

  const abrirModalParaEditar = (produto) => {
    setProdutoParaEditar(produto);
    setExibirModal(true);
  };

  const fecharModal = () => {
    setExibirModal(false);
    setProdutoParaEditar(null);
  };

  return (
    <div className="container">
      <h1>LogiStock</h1>
      
      <div className="acoes-topo">
        <BarraBusca valor={termoBusca} aoMudar={setTermoBusca} />
        <button className="btn-novo" onClick={() => setExibirModal(true)}>
          + Novo Item
        </button>
      </div>

      <TabelaProdutos 
        lista={produtosFiltrados} 
        aoExcluir={excluirProduto} 
        aoEditar={abrirModalParaEditar} 
      />

      {exibirModal && (
        <ModalFormulario 
          produto={produtoParaEditar} 
          aoSalvar={salvarProduto} 
          aoFechar={fecharModal} 
        />
      )}
    </div>
  );
}

export default App;