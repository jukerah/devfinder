import { useEffect, useState } from 'react';
import './App.css';

import { SearchBar } from './components/SearchBar';
import { ProfileCard } from './components/ProfileCard';
import { ThemeColorButton } from './components/ThemeColorButton';

function App() {
  const [ user, SetUser ] = useState(null);
  const [ isLoading, SetIsLoading ] = useState(false);
  const [ hasError, SetHasError ] = useState(false);

  useEffect(() => {
    fetchUser('github');
  }, []);

  const fetchUser = async(username) => {
    SetIsLoading(true);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error();

      const data  = await response.json();
      SetUser(data);
      SetHasError(false);
    } catch(err) { SetHasError(true); }
    
    SetIsLoading(false);
  }

  const handleSearchButton = (username) => fetchUser(username);
  
  return (
    <div className='bg-zircon dark:bg-cloudBurst w-screen h-screen flex justify-center items-center flex-col'>
      <div>
        <h1 className='text-3xl font-bold'>
          devfinder
        </h1>
        <ThemeColorButton />
      </div>

      <SearchBar
        searchButton={handleSearchButton}
        userFound={!hasError}
        onClearError={() => SetHasError(false)}
      />

      {isLoading && <p>Loading...</p>}

      {(user && !hasError)
        ? <ProfileCard user={user} notFound={false} />
        : <ProfileCard user={user} notFound={true} />
      }
    </div>
  );
}

export default App;
