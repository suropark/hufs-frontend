import React, { useState, useCallback } from 'react';
import axios from 'axios';


export default function FileUpload(props) {
    const [img, setImg] = useState("");
    const [imgUpload, setImgUpload] = useState("");

    const isSelectedImg = (event) => {
        //빈파일이 아닌 경우 함수 진행
         if (event.target.files !== null) {
           //FormData 생성
           const fd = new FormData();
           //FormData에 key, value 추가하기
           fd.append('filename', event.target.files[0]);
           // axios 사용해서 백엔드에게 파일 보내기
           axios
             .post(`https://hufspace.com/post/img`, fd)
             .then(res => {
          //응답으로 받은 url 저장하기 (응답 내용의 표시나 방법은 백엔드와 결정해야한다.)
               setImgUpload(res.data.image_url);
             // 최종적으로 DB에 저장될 url을 보내는 과정이 부모 컴포넌트에 있기 때문에 부모 컴포넌트에 url을 보내는 과정
               props.imgStore(res.data.image_url);
             })
           //에러가 날 경우 처리
             .catch(error => {
               console.log(error.response);
             });
         }
       };

       return (
           <>
           <input
type="file"
accept="image/jpeg, image/jpg"  //업로드 가능한 파일 종류. 
onChange={isSelectedImg} />
	</>
       )
}