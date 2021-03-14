import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useBeforeunload } from 'react-beforeunload';

import { withRouter } from 'react-router-dom';
import { postUpdate } from '../../_actions/post_action';
// 상세 게시글 보기
// 게시글 내용 불러오기 ->
let uploadedImg = [];
function PostUpdate({ match, history }) {
  const dispatch = useDispatch();
  useBeforeunload((e) => {
    e.preventDefault();
    window.onunload = function () {
      // 취소 시 발생되는 function = 올려둔 이미지 보내기
    };
  });
  const { posts } = useSelector((state) => state.post);
  const post = posts.find((posts) => posts.id === +match.params.id);
  const [updated, setUpdated] = useState(post);

  useEffect(() => {
    // 여기서 처음 이미지 url 다 받아둬야 할 듯.
    console.log(post);
  }, []);


  const onUpdate = () => {
    dispatch(postUpdate(updated)).then(history.goBack());
  };

  return (
    <div>
      {post ? (
        <div>
          <p>글 번호: {post.id}</p>
          <input
            type="text"
            placeholder="제목"
            value={updated.title}
            onChange={(e) => setUpdated({ ...updated, title: e.target.value })}
          />
          <ReactQuill
            placeholder="하이"
            theme="snow"
            value={updated.content}
            onChange={(content, delta, source, editor) => {
              console.log(updated);
              setTimeout(() => {
                setUpdated({ ...updated, content: editor.getHTML() });
              });
            }}
            modules={modules}
            formats={formats}
          ></ReactQuill>

          <button onClick={onUpdate}>수정하기</button>
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

