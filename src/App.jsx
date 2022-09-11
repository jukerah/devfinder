import { useEffect, useState } from 'react';

import { SearchBar } from './components/SearchBar';
import { ProfileCard } from './components/ProfileCard';
import { ThemeColorButton } from './components/ThemeColorButton';
import { Loading } from './components/Loading';

const App = () => {
  const [ user, SetUser ] = useState(null);
  const [ isLoading, SetIsLoading ] = useState(false);
  const [ hasError, SetHasError ] = useState(false);

  useEffect(() => {
    fetchUser('jukerah');
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
    
    setTimeout(() => {
      SetIsLoading(false);
    }, 1000);
  }

  const handleSearchButton = (username) => fetchUser(username);
  
  return (
    <section className='bg-zircon dark:bg-bigStone w-screen min-h-screen flex items-center flex-col p-6 lg:p-8'>
      <div className='flex flex-col w-full max-w-2xl gap-4'>
        <header className='flex justify-between'>
          <h1 className='text-kashmirBlue dark:text-white flex items-center text-3xl md:text-4xl font-bold'>
            devfinder
          </h1>
          <ThemeColorButton />
        </header>

        <SearchBar
          searchButton={handleSearchButton}
          userFound={!hasError}
          onClearError={() => SetHasError(false)}
        />

        {isLoading && <Loading />}

        {(user && !hasError)
          ? !isLoading && <ProfileCard user={user} notFound={false} />
          : !isLoading && <ProfileCard user={user} notFound={true} />
        }
      </div>
    </section>
  );
}

export default App;
