import React, { useState, useEffect, useMemo, useCallback} from 'react';

function App() {

  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  const handleAdd = useCallback(() => {
    setTechs([...techs, newTech]);
    setNewTech('');
  }, [newTech, techs]);

  useEffect(() => {
    const storageTech = localStorage.getItem('techs');

    if(storageTech) {
      setTechs(JSON.parse(storageTech))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs))
  }, [techs]);

  const techSize = useMemo(() => techs.length, [techs])

  return (
    <>
      <ul>
        { techs.map(tech => (<li key={tech}> {tech} </li>)) }
      </ul>
      <p> Você tem <strong>{techSize}</strong> tecnologias!! </p>
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}> Adicionar </button>
    </>
  );
}

export default App;
