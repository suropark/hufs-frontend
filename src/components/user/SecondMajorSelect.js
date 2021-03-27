import { Select } from 'antd';

import React from 'react';

function SecondMajorSelect({ list, onChange, defaultSecondMajor }) {
  const { Option } = Select;

  return (
    <>
      <div style={{ margin: '8px 0' }}>
        <Select
          defaultValue={defaultSecondMajor}
          style={{ width: 170 }}
          onChange={onChange}
        >
          {list ? (
            list.map((major) => {
              return (
                <Option key={major.id} value={major.id}>
                  {major.name}
                </Option>
              );
            })
          ) : (
            <></>
          )}
          {/* <Option value="disabled" disabled>
          Disabled
        </Option> */}
        </Select>
      </div>
    </>
  );
}

export default SecondMajorSelect;
