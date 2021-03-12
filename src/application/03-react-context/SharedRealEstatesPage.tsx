import React from 'react';
import { Card, Row, Col } from 'antd';

import FetchRealEstatesWrapper from 'src/domain/shared-real-estates-ctx/FetchRealEstatesWrapper';
import RealEstatesList from 'src/domain/shared-real-estates-ctx/RealEstatesList';
import RealEstateForm from 'src/domain/shared-real-estates-ctx/RealEstateForm';

export default function SharedRealEstatesPage(): React.ReactElement {
  return (
    <FetchRealEstatesWrapper>
      <div style={{ width: '75%', margin: '0 auto' }}>
        <h3>SharedRealEstatesPage</h3>

        <Row>
          <Col span={8}>
            <Card style={{ width: 300 }}>
              <RealEstatesList />
            </Card>
          </Col>
          <Col span={14} offset={2}>
            <Card>
              <RealEstateForm />
            </Card>
          </Col>
        </Row>

      </div>
    </FetchRealEstatesWrapper>
  );
}
