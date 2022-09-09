import { useRef } from 'react';

export const SearchBar = (props) => {
  const searchInputRef = useRef();

  const handleClickButton = () => {
    if (searchInputRef.current.value.trim() !=='' ) {
      props.searchButton(searchInputRef.current.value);
    }
    searchInputRef.current.value = '';
  }

  return (
    <>
      <input type="text" ref={searchInputRef} placeholder="Search Github username..."/>
      <button onClick={handleClickButton}>buscar</button>
    </>
  );
}
