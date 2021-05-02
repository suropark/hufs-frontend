import { Select } from 'antd';

import React from 'react';

function MajorSelect({ list, onChange, defaultMajor }) {
  const { Option } = Select;

  return (
    <>
      <div>
        <Select
          defaultValue={defaultMajor}
          style=
          {{
            width: '200px',
            height: '30px'
          }}
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
