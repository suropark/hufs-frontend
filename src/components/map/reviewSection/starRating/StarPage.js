import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const StarPage = () => {
  const [value, setValue] = useState(3);

  setValue(value);
  return (
    /* jshint ignore:start */
    <>
      <span>
        <Rate tooltips={desc} onChange={() => setValue(value)} value={value} />
        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
      </span>
    </>
    /* jshint ignore:end */
  );
};

export default StarPage;
