import React from 'react';

const TabelaProdutos = ({ lista, aoExcluir, aoEditar }) => {
  return (
    <div className="tabela-container">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Qtd</th>
            <th>Categoria</th>
            <th>Preço (R$)</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {lista.map(p => (
            <tr key={p.id}>
              <td>{p.nome}</td>
              <td>{p.quantidade}</td>
              <td>{p.categoria}</td>
              <td>{p.preco}</td>
              <td>
                <button className="btn-edit" onClick={() => aoEditar(p)}>Editar</button>
                <button className="btn-del" onClick={() => aoExcluir(p.id)}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaProdutos;