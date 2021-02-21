import React, { useEffect, useState } from "react";
import { matchPath } from "react-router-dom";
import { getList } from "./list_action";

// 상세 게시글 보기
// 게시글 내용 불러오기 ->
function PostView({ match, history }) {
  const [lists, setlists] = useState();

  useEffect(async () => {
    const view = await getList().then((posts) => {
      return posts.find((post) => post.id === +match.params.id);
    });
    setlists(view);
  }, []);

  return (
    <div>
      {lists ? (
        <div>
          <p>{lists.id}</p>
          <h2>{lists.title}</h2>
          <p>{lists.body}</p>
        </div>
      ) : (
        "isLoading"
      )}
    </div>
  );
}

export default PostView;
