import React from 'react';
import { Slide2 } from '../../components/slide/Slide'
import InformationModal from '../../components/rule/InformationModal'
import UseModal from '../../components/rule/UseModal'
function Footer() {
  return (
    <>
      <div className="Footer">
        <Slide2 />
        <div className="rule">
          <InformationModal />
          <UseModal />
        </div>

      </div>
    </>
  );
}

export default Footer;
