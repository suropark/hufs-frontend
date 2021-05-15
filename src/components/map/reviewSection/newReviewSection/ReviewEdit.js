import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import { useDispatch } from 'react-redux';
import 'react-quill/dist/quill.snow.css';
import { postSave } from '../../../../_actions/reviewPost_action';
import { useBeforeunload } from 'react-beforeunload';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { PUBLIC_IP } from '../../../../config';
import imageCompression from 'browser-image-compression';
import { Button, Rate, message, Input } from 'antd';

let uploadedImg = [];
function ReviewEdit(props) {
  const dispatch = useDispatch();
  useBeforeunload((e) => {
    e.preventDefault();
    window.onunload = function () {
      axios.post(`${PUBLIC_IP}/post/back`, uploadedImg);
    };
  });
  const [value, setvalue] = useState({ title: '', content: '', score: 0 });
  const onSubmit = (e) => {
    e.preventDefault();
    if (value.title.trim().length === 0) {
      // 공백 제목 검사
      message.info('제목을 적어주세요');
      return;
    }

    let submittedImg = Array.from(
      new DOMParser()
        .parseFromString(value.content, 'text/html')
        .querySelectorAll('img'),
    ).map((img) => img.getAttribute('src'));

    const needDelete = getUnused(uploadedImg, submittedImg); // return : 삭제해야 할 이미지 url
    let rstrnId = props.location.state.id;
    let body = {
      title: value.title,
      content: value.content,
      score: value.score,
    };
    dispatch(postSave(body, needDelete, rstrnId))
      .then((response) => {
        if (response.status === 200) {
          props.history.goBack();
        }
      })
      .catch((error) => {
        switch (error.response?.status) {
          case 401:
            message.error('로그인이 필요합니다.');
            props.history.push('/');
          case 403:
            message.error('접근 권한 오류');
            props.history.push('/');
            break;
          default:
            break;
        }
      });
  };
  const onExit = () => {
    const answer = window.confirm(
      '작성하던 글은 저장되지 않습니다. 그래도 나가시겠습니까?',
    );
    if (answer) {
      axios
        .post(`${PUBLIC_IP}/post/back`, uploadedImg)
        .then(props.history.goBack())
        .catch(props.history.goBack());
    }
  };

  return (
    <>
      <div id="community-main">
        <Input
          className="title-bar"
          type="text"
          placeholder="제목"
          value={value.title}
          onChange={(e) => {
            setvalue({ ...value, title: e.target.value });
          }}
        />
        <div style={{ padding: '5px 5px' }}>
          <label style={{ fontWeight: 'bold' }}>평점 </label>
          <Rate allowHalf value={value.score} onChange={(e) => {
            setvalue({ ...value, score: e });
          }} />
        </div>

        <ReactQuill
          id="quill-editor"
          placeholder="하이"
          theme="snow"
          style={{
            height: '77%',
          }}
          onChange={(content, delta, source, editor) => {
            setvalue({ ...value, content: editor.getHTML() });
          }}
          onChangeSelection={(range, source, editor) => {
            setvalue({ ...value, content: editor.getHTML() });
          }}
          modules={modules}
          formats={formats}
        ></ReactQuill>
        <hr />
        <div
          id="button-bar"
          style={{
            top: '-5%',
          }}
        >
          <Button type="primary" onClick={onSubmit}>
            등록
          </Button>
          <Button
            type="primary"
            onClick={onExit}
            style={{
              marginLeft: '10px',
            }}
          >
            취소
          </Button>
        </div>
      </div>
    </>
  );
}

export default withRouter(ReviewEdit);

const myToolbar = [
  [{ header: [1, 2, false] }],
  [
    'bold',
    'italic',
    'underline',
    'strike',
    // 'blockquote'
  ],
  // [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
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
  // 'blockquote',
  // 'list',
  // 'bullet',
  // 'indent',
  'link',
  'image',
];

function imageHandler() {
  let fileInput = this.container.querySelector('input.ql-image[type=file]');

  if (fileInput == null) {
    fileInput = document.createElement('input');
    fileInput.setAttribute('type', 'file');
    fileInput.setAttribute('name', 'img');
    fileInput.setAttribute(
      'accept',
      'image/png, image/gif, image/jpeg, image/bmp, image/x-icon',
    );
    fileInput.classList.add('ql-image');
    fileInput.addEventListener('change', async () => {
      const files = fileInput.files;

      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 200,
        useWebWorker: true,
      };
      const compressedFile = await imageCompression(files[0], options);
      const formData = new FormData();
      formData.append('img', compressedFile);
      const range = this.quill.getSelection(true);

      if (!files || !files.length) {
        return;
      }

      await axios
        .post(`${PUBLIC_IP}/post/img`, formData, {
          header: {
            'Content-Type': 'multipart/form-data',
          },
        })

        .then((response) => {
          this.quill.editor.insertEmbed(
            range.index,
            'image',
            response.data.data[0],
          );
          uploadedImg = uploadedImg.concat(response.data.data[0]);
          this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
          fileInput.value = '';
        })
        .catch((error) => {
          fileInput.value = '';
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
  return unused;
}
