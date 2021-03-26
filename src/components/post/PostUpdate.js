import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useBeforeunload } from 'react-beforeunload';

import { withRouter } from 'react-router-dom';
import { postUpdate } from '../../_actions/post_action';
import axios from 'axios';
// 상세 게시글 보기
// 게시글 내용 불러오기 ->
let wholeImg = []; // 처음 이미지 + 업로드 되는 이미지 모두
let uploadedImg = [];
function PostUpdate({ match, history }) {
  const dispatch = useDispatch();
  const [updated, setUpdated] = useState(false);
  useBeforeunload((e) => {
    e.preventDefault();
    window.onunload = function () {
      axios.delete('/post/back', uploadedImg);
    };
  });

  useEffect(async () => {
    const request = await axios
      .get(`/post/${+match.parmas.id}`)
      .then((response) => response.data);
    const firstImg = Array.from(
      new DOMParser()
        .parseFromString(request.content, 'text/html')
        .querySelectorAll('img'),
    ).map((img) => img.getAttribute('src'));
    setUpdated({ title: request.title, content: request.content });
    wholeImg = wholeImg.concat(firstImg);
  }, []);

  const onUpdate = () => {
    // 처음 이미지 url과 최종 제출 url 비교해서 삭제해야 할 이미지 url 찾기
    let afterEdit = Array.from(
      new DOMParser()
        .parseFromString(updated.content, 'text/html')
        .querySelectorAll('img'),
    ).map((img) => img.getAttribute('src'));

    const needDelete = getUnused(wholeImg, afterEdit); // return : 삭제해야 할 이미지 url

    dispatch(postUpdate(updated, needDelete, +match.params.id))
      .then((response) => {
        if (response.updateSuccess) {
          history.goBack();
        } else {
          alert('수정에 실패했습니다. / ');
        }
      })
      .catch((error) => console.log(error));
  };
  const onExit = () => {
    const answer = window.confirm('진짜?');
    if (answer) {
      axios.delete('/post/back', uploadedImg).then(history.goBack());
    }
  };

  useEffect(() => {
    console.log(updated);
  }, [updated]);

  return (
    <div>
      {updated ? (
        <div>
          <p>글 번호: {updated.id}</p>
          <input
            type="text"
            placeholder="제목"
            value={updated.title}
            onChange={(e) => setUpdated({ ...updated, title: e.target.value })}
          />
          <ReactQuill
            className="1"
            placeholder="하이"
            theme="snow"
            value={updated.content}
            onChange={(content, delta, source, editor) => {
              setUpdated({ ...updated, content: editor.getHTML() });
            }}
            modules={modules}
            formats={formats}
          ></ReactQuill>

          <button onClick={onUpdate}>수정하기</button>
          <button onClick={onExit}>취소하기</button>
        </div>
      ) : (
        'isLoading'
      )}
    </div>
  );
}

export default withRouter(PostUpdate);

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

      axios
        .post('/post/img', { img: formData })
        .then((response) => {
          this.quill.enable(true);
          this.quill.editor.insertEmbed(range.index, 'image', response.data);
          wholeImg = wholeImg.concat(response.data);
          uploadedImg = uploadedImg.concat(response.data);

          this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
          fileInput.value = '';
        })
        .catch((error) => {
          console.log('업로드 실패');
          console.log(error);
          this.quill.enable(true);
        });
    });
    this.container.appendChild(fileInput);
  }
  fileInput.click();
}

function getUnused(wholeImg, submittedImg) {
  const unused = wholeImg;
  for (let i = 0; i < submittedImg.length; i++) {
    unused.splice(unused.indexOf(submittedImg[i]), 1);
  }
  console.log(`need to delete: ${unused}`);
  return unused;
}
