import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import { useDispatch } from 'react-redux';
import 'react-quill/dist/quill.snow.css';
import { postSave } from '../../_actions/post_action';
import { useBeforeunload } from 'react-beforeunload';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

let uploadedImg = [];
function PostEdit(props) {
  const dispatch = useDispatch();
  useBeforeunload((e) => {
    e.preventDefault();
    window.onunload = function () {
      axios.delete('img/delete', uploadedImg);
    };
  });
  const [value, setvalue] = useState({ title: '', content: '' });

  const onSubmit = (e) => {
    e.preventDefault();

    let submittedImg = Array.from(
      new DOMParser()
        .parseFromString(value.content, 'text/html')
        .querySelectorAll('img'),
    ).map((img) => img.getAttribute('src'));

    const needDelete = getUnused(uploadedImg, submittedImg); // return : 삭제해야 할 이미지 url

    let body = {
      title: value.title,
      content: value.content,
    };

    dispatch(postSave(body, needDelete))
      .then((response) => {
        if (response.saveSuccess) {
          props.history.push('/list');
        } else {
          alert('저장 실패');
        }
      })
      .catch((error) => console.log(error));
  };
  const onExit = () => {
    const answer = window.confirm(
      '작성하던 글은 저장되지 않습니다. 그래도 나가시겠습니까?',
    );
    if (answer) {
      axios.delete('post/delete', uploadedImg).then(props.history.goBack());
    }
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
          setvalue({ ...value, content: editor.getHTML() });
        }}
        modules={modules}
        formats={formats}
      ></ReactQuill>
      <button onClick={onSubmit}>제출</button>
      <button onClick={onExit}>취소</button>
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
    fileInput.addEventListener('change', async () => {
      const files = fileInput.files;
      const formData = new FormData();

      formData.append('file', files[0]);

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

      // this.quill.enable(false);

      await axios
        .post('/api/image', formData)
        .then((response) => {
          this.quill.editor.insertEmbed(
            range.index,
            'image',
            response.data.url_path,
            // 'https://ckeditor.com/assets/images/bg/volcano-8967c4575e.jpg',
          );
          uploadedImg = uploadedImg.concat(
            // 'https://ckeditor.com/assets/images/bg/volcano-8967c4575e.jpg',
            response.data.url_path,
          );

          this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
          fileInput.value = '';
        })
        .catch((error) => {
          console.log('quill image upload failed');
          console.log(error);
          this.quill.enable(true);
        });
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
  console.log(`unused : ${unused}`);
  return unused;
}
