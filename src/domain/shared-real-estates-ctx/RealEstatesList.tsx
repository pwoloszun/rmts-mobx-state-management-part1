import React from 'react';
import { List } from 'antd';

import { formatDate } from 'src/utils/formatDate';

import { useRealEstatesContainer } from './FetchRealEstatesWrapper';
import { RealEstate } from './types/real-estate';

function descriptionFor(realEstate: RealEstate): string {
  const { builtAt, price } = realEstate;
  const formattedPrice = Math.round(price);
  const date = formatDate(new Date(builtAt).getTime()).substr(0, 10);
  return `Price: ${formattedPrice}, built on: ${date}`;
}

export default function RealEstatesList(): React.ReactElement {
  const { realEstates } = useRealEstatesContainer();

  return (
    <List
      itemLayout="horizontal"
      dataSource={realEstates}
      renderItem={(realEstate) => (
        <List.Item>
          <List.Item.Meta
            title={realEstate.street}
            description={descriptionFor(realEstate)}
          />
        </List.Item>
      )}
    />
  );
}
