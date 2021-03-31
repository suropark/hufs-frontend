import React from 'react';
import { Anchor } from 'antd';

function Quick() {
  const { Link } = Anchor;
  return (
    <Anchor>
      <Link
        href="https://wis.hufs.ac.kr/src08/jsp/index.jsp"
        target="_blank"
        title="종합정보시스템"
      />
      <Link href="#components-anchor-demo-static" title="시간표" />
      <Link href="#Anchor-Props" title="장학 게시판" />
      <Link href="#Link-Props" title="과 게시판" />
    </Anchor>
  );
}

export default Quick;
