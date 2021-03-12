import React, { useEffect } from 'react';

import { createRealEstatesContainer } from './hooks/createRealEstatesContainer';
import useRealEstates from './hooks/useRealEstates';
import { fetchRealEstates } from './api/real-estates-api';

const { Provider, useRealEstatesContainer } = createRealEstatesContainer(useRealEstates);

interface Props {
  children: React.ReactElement;
}

function RealEstatesFetcher(props: Props): React.ReactElement {
  const { setMany } = useRealEstatesContainer();
  useEffect(() => {
    fetchRealEstates().then((relEstatesData) => setMany(relEstatesData));
  }, [setMany]);

  return props.children;
}

export { useRealEstatesContainer };

export default function FetchRealEstatesWrapper(props: Props): React.ReactElement {
  return (
    <Provider initialState={[]}>
      <RealEstatesFetcher>
        {props.children}
      </RealEstatesFetcher>
    </Provider>
  );
}
