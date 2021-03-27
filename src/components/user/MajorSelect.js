import { Select } from 'antd';

import React from 'react';

function MajorSelect({ list, onChange, defaultMajor }) {
  const { Option } = Select;

  return (
    <>
      <div style={{ margin: '8px 0' }}>
        <Select
          defaultValue={defaultMajor}
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
        </Select>
      </div>
    </>
  );
}

export default MajorSelect;
