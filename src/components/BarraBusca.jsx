import React from 'react';

const BarraBusca = ({ valor, aoMudar }) => (
  <input 
    className="busca"
    type="text" 
    placeholder="Buscar por nome..." 
    value={valor} 
    onChange={(e) => aoMudar(e.target.value)} 
  />
);

export default BarraBusca;