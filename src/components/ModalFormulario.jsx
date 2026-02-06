import React, { useState, useEffect } from 'react';

const ModalFormulario = ({ produto, aoSalvar, aoFechar }) => {
  const [form, setForm] = useState({ nome: '', quantidade: '', categoria: '', preco: '' });

  useEffect(() => {
    if (produto) setForm(produto);
  }, [produto]);

  const enviar = (e) => {
    e.preventDefault();
    aoSalvar(form);
  };

  return (
    <div className="modal-fundo">
      <div className="modal-caixa">
        <h2>{produto ? 'Editar Item' : 'Novo Item'}</h2>
        <form onSubmit={enviar}>
          <input placeholder="Nome" value={form.nome} onChange={e => setForm({...form, nome: e.target.value})} required />
          <input type="number" placeholder="Quantidade" value={form.quantidade} onChange={e => setForm({...form, quantidade: e.target.value})} required />
          <input placeholder="Categoria" value={form.categoria} onChange={e => setForm({...form, categoria: e.target.value})} required />
          <input type="number" placeholder="Preço" value={form.preco} onChange={e => setForm({...form, preco: e.target.value})} required />
          
          <div className="botoes">
            <button type="button" onClick={aoFechar}>Cancelar</button>
            <button type="submit" className="btn-sucesso">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalFormulario;