import { SetStateAction, useEffect, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import styles from './Search.module.scss';
import { Row } from '../../../types';
import { getSearchResults } from './Search.helpers';

interface SearchProps {
  store?: Row[];
  data: Row[];
  updateStore?: (val) => void;
}

export function Search({ store, data, updateStore }: SearchProps) {
  const [searchedValue, setSearchedValue] = useState<string>('');

  const onChange = (value: SetStateAction<string>) => {
    setSearchedValue(value);
  };

  useEffect(() => {
    searchedValue ? updateStore(getSearchResults(store, searchedValue)) : updateStore(store);
  }, [searchedValue, store, updateStore]);

  return (
    <OutlinedInput
      className={styles.input}
      placeholder='Search by country/name/username'
      value={searchedValue}
      type='search'
      onChange={(e) => onChange(e.target.value)}
      startAdornment={
        <InputAdornment position='start'>
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
}
