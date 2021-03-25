import { Select } from 'antd';

import React from 'react';

function MajorSelect({ onChange, defaultMajor }) {
  const { Option } = Select;

  return (
    <>
      <div style={{ margin: '8px 0' }}>
        <Select
          defaultValue={defaultMajor}
          style={{ width: 170 }}
          onChange={onChange}
        >
          <Option value="주전공1">1</Option>
          <Option value="주전공2">2</Option>
          <Option value="주전공3">3</Option>
          {/* <Option value="disabled" disabled>
          Disabled
        </Option> */}
        </Select>
      </div>
    </>
  );
}

export default MajorSelect;
