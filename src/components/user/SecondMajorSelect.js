import { Select } from 'antd';

import React from 'react';

function SecondMajorSelect({ onChange, defaultSecondMajor }) {
  const { Option } = Select;

  return (
    <>
      <div style={{ margin: '8px 0' }}>
        <Select
          defaultValue={defaultSecondMajor}
          style={{ width: 170 }}
          onChange={onChange}
        >
          <Option value="이중1">1</Option>
          <Option value="이중2">2</Option>
          <Option value="이중3">3</Option>
          {/* <Option value="disabled" disabled>
          Disabled
        </Option> */}
        </Select>
      </div>
    </>
  );
}

export default SecondMajorSelect;
