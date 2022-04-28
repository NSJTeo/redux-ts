import { useState } from 'react';
import { useTypedSelector } from '../utils/hooks/useTypedSelector';
import { useActions } from '../utils/hooks/useActions';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, loading, error } = useTypedSelector(
    (state) => state.repositories
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchRepositories(term);
    setTerm('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={term} onChange={(e) => setTerm(e.target.value)} />
      <button>Search</button>
    </form>
  );
};

export default RepositoriesList;
