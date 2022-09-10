import { useRef } from 'react';
import { svg } from '../../data/svgList';

export const SearchBar = (props) => {
  const searchInputRef = useRef();

  const handleClickButton = () => {
    if (searchInputRef.current.value.trim() !=='' ) props.searchButton(searchInputRef.current.value);
    searchInputRef.current.value = '';
  }

  return (
    <div className='flex items-center bg-white dark:bg-cloudBurst pt-2 pr-2 pb-2 pl-4 mt-5 rounded-2xl drop-shadow-md'>
      {svg.icon.magnifyingGlass}
      <input className='w-full h-14 bg-white dark:bg-cloudBurst  outline-0 text-kashmirBlue dark:text-white placeholder:text-xs sm:placeholder:text-base md:text-xl ml-1 sm:ml-2 md:ml-6' type='text' ref={searchInputRef} placeholder='Search Github username...'/>
      <button
        className='bg-azureRadiance hover:bg-malibu pt-3 pl-5 pb-3 pr-5 text-white hover:text-bigStone rounded-lg ml-4 md:text-xl'
        onClick={handleClickButton}
      >
        Search
      </button>
    </div>
  );
}
