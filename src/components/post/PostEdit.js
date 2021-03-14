import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import { useDispatch } from 'react-redux';
import 'react-quill/dist/quill.snow.css';
import { postSave } from '../../_actions/post_action';
import { useBeforeunload } from 'react-beforeunload';
import { withRouter } from 'react-router-dom';
let uploadedImg = [];
function PostEdit(props) {
  const dispatch = useDispatch();
  useBeforeunload((e) => {
    e.preventDefault();
    window.onunload = function () {
      // 취소 시 발생되는 function = 올려둔 이미지 보내기
    };
  });
  const [value, setvalue] = useState({ title: '', content: '' });

  const testhandler = () => {
    const submittedImg = Array.from(
      new DOMParser()
        .parseFromString(value.content, 'text/html')
        .querySelectorAll('img'),
    ).map((img) => img.getAttribute('src'));
    console.log(submittedImg);
    console.log(uploadedImg);
    // 두 배열 비교해서 백엔드로 보내야 함 +  전체 내용까지
    getUnused(uploadedImg, submittedImg);

  };
  // useInput 커스텀 훅으로 줄이기
  const submitHandler = (e) => {
    e.preventDefault();

    let body = {
      title: value.title,
      content: value.content,
    };
    // 제출할 때도 두가지 보내야함 1.내용 2.중간에 삭제한 사진 url
    //   // axios멀티 요청
    //   console.log(value.text);
    //   // axios.delete('url', [changedImg])
    //   // axios.post('url', value);
    //   // props.histroy.push('/list')

    dispatch(postSave(body)).then((res) => {
      if (res) {

        props.history.push('/list');
      } else {
        alert('error');
      }
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="제목"
        value={value.title}
        onChange={(e) => setvalue({ ...value, title: e.target.value })}
      />
      <ReactQuill
        placeholder="하이"
        theme="snow"
        onChange={(content, delta, source, editor) => {
          console.log(value);
          setTimeout(() => {
            setvalue({ ...value, content: editor.getHTML() });
          });
        }}
        modules={modules}
        formats={formats}
      ></ReactQuill>

      <button onClick={submitHandler}>제출</button>
    </div>
  );
}

export default withRouter(PostEdit);

const myToolbar = [
  [{ header: [1, 2, false] }],
  ['bold', 'italic', 'underline', 'strike', 'blockquote'],
  [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
  ['image'],
];
const modules = {
  toolbar: {
    container: myToolbar,
    handlers: { image: imageHandler },
  },
};
const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
];

function imageHandler() {
  let fileInput = this.container.querySelector('input.ql-image[type=file]');

  if (fileInput == null) {
    fileInput = document.createElement('input');
    fileInput.setAttribute('type', 'file');
    fileInput.setAttribute(
      'accept',
      'image/png, image/gif, image/jpeg, image/bmp, image/x-icon',
    );
    fileInput.classList.add('ql-image');
    fileInput.addEventListener('change', () => {
      const files = fileInput.files;
      const range = this.quill.getSelection(true);

      if (!files || !files.length) {
        console.log('No files selected');
        return;
      }

      // // 테스트 공간 base64로 출력
      // let reader = new FileReader();
      // reader.readAsDataURL(files[0]);
      // reader.onload = () => {
      //   this.quill.insertEmbed(range.index, 'image', reader.result);
      // };
      //

      const formData = new FormData();
      formData.append('file', files[0]);
      console.log(formData);
      // this.quill.enable(false);

      // axios.post('/api/image', formData).then((response) => {
      this.quill.enable(true);
      this.quill.editor.insertEmbed(
        range.index,
        'image',
        'https://ckeditor.com/assets/images/bg/volcano-8967c4575e.jpg',
        // response.data.url_path,
        // dispatch로 url을 스토어에 보내서 보관하면 어떨까?
      );
      uploadedImg = uploadedImg.concat(
        'https://ckeditor.com/assets/images/bg/volcano-8967c4575e.jpg',
      );
      // response.data.url_path

      this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
      fileInput.value = '';
      // });
      // .catch((error) => {
      //   console.log('quill image upload failed');
      //   console.log(error);
      //   this.quill.enable(true);
      // });
    });
    this.container.appendChild(fileInput);
  }
  fileInput.click();
}

function getUnused(uploadedImg, submittedImg) {
  const unused = uploadedImg;
  for (let i = 0; i < submittedImg.length; i++) {
    unused.splice(unused.indexOf(submittedImg[i]), 1);
  }
  console.log(unused);
}

