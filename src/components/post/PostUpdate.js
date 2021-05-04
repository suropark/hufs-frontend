import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useBeforeunload } from 'react-beforeunload';

import { withRouter } from 'react-router-dom';
import { postUpdate, postView } from '../../_actions/post_action';
import axios from 'axios';
import { PUBLIC_IP } from '../../config';
import Footer from '../../views/Footer/Footer';
import Header from '../../views/Header/Header';
import Quick from '../../views/Quick/Quick';
import { Skeleton, Button } from 'antd';

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
      axios.post(`${PUBLIC_IP}/post/back`, { url: uploadedImg });
    };
  });
  useEffect(() => {
    dispatch(postView(+match.params.id))
      .then((response) => {
        if (response.status === 200) {
          const firstImg = Array.from(
            new DOMParser()
              .parseFromString(response.payload.content, 'text/html')
              .querySelectorAll('img'),
          ).map((img) => img.getAttribute('src'));
          setUpdated({
            title: response.payload.title,
            content: response.payload.content,
          });
          wholeImg = wholeImg.concat(firstImg);
        }
      })
      .catch((error) => {
        switch (error.response?.status) {
          case 401:
            alert('로그인하지 않은 사용자');
            history.push('/');
            break;
          case 403:
            alert('접근 권한 오류');
            break;
          case 404:
            alert('존재하지 않는 게시글입니다');
            break;
          default:
            break;
        }
      });
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
        if (response.status === 200) {
          history.goBack();
        }
      })
      .catch((error) => {
        switch (error.response?.status) {
          case 200:
            break;
          case 401:
            alert('로그인하지 않은 사용자');
            history.push('/');
            break;
          case 403:
            alert('접근 권한 오류');
            break;
          default:
            break;
        }
      });
  };
  const onExit = () => {
    const answer = window.confirm('진짜?');
    if (answer) {
      axios
        .post(`${PUBLIC_IP}/post/back`, { url: uploadedImg })
        .then(history.goBack())
        .catch(history.goBack());
    }
  };

  useEffect(() => {}, [updated]);

  return (
    <>
      <div id="community-main">
        {updated ? (
          <div>
            <p>글 번호: {updated.id}</p>
            <input
              className="title-bar"
              type="text"
              placeholder="제목"
              value={updated.title}
              onChange={(e) =>
                setUpdated({ ...updated, title: e.target.value })
              }
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

            <div id="button-bar">
              <Button
                type="primary"
                onClick={onUpdate}
                style={{
                  margin: '10px',
                }}
              >
                수정하기
              </Button>
              <Button
                type="primary"
                onClick={onExit}
                style={{
                  margin: '10px',
                }}
              >
                취소하기
              </Button>
            </div>
          </div>
        ) : (
          <Skeleton />
        )}
      </div>
    </>
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
    fileInput.setAttribute('name', 'img');
    fileInput.setAttribute(
      'accept',
      'image/png, image/gif, image/jpeg, image/bmp, image/x-icon',
    );
    fileInput.classList.add('ql-image');
    fileInput.addEventListener('change', async () => {
      const files = fileInput.files;
      const formData = new FormData();
      formData.append('img', files[0]);
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
        .post(`${PUBLIC_IP}/post/img`, formData, {
          header: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          this.quill.enable(true);
          this.quill.editor.insertEmbed(
            range.index,
            'image',
            response.data.data[0],
          );
          wholeImg = wholeImg.concat(response.data.data[0]);
          uploadedImg = uploadedImg.concat(response.data.data[0]);

          this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
          fileInput.value = '';
        })
        .catch((error) => {
          console.log(error);
          fileInput.value = '';
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
