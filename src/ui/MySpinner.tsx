import { Spin, Space } from 'antd';

export default function MySpinner(): React.ReactElement {
  return (
    <Space size="middle">
      <Spin />
    </Space>
  );
}
