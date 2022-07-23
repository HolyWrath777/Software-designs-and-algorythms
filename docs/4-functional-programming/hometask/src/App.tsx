import { useState, useEffect } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

import { Table, Filters, Sort, Search } from './components';
import { getImages, getUsers, getAccounts } from './mocks/api';

import styles from './App.module.scss';

import type { Image, User, Account, Row } from '../types';

import rows from './mocks/rows.json';
import { dataConverter, getLastPayment } from './helpers';

// mockedData has to be replaced with parsed Promises’ data
const mockedData: Row[] = rows.data;

function App() {
  const [data, setData] = useState<Row[]>(undefined);
  const [updatedStore, updateStore] = useState(data);
  const [searchResults, setSearchResults] = useState<Row[]>(undefined);

  useEffect(() => {
    Promise.all([getImages(), getUsers(), getAccounts()]).then(
      ([images, users, accounts]: [Image[], User[], Account[]]) => {
        setData(dataConverter(users, accounts, images));
        updateStore(dataConverter(users, accounts, images));
      }
    );
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <div className='App'>
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters data={data} updateStore={updateStore} />
            <Sort store={updatedStore} updateStore={updateStore} />
          </div>
          <Search store={updatedStore} updateStore={setSearchResults} data={data} />
        </div>
        <Table rows={searchResults || updatedStore || mockedData} />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
