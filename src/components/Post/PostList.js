import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getList } from "./list_action";

function PostList({ match }) {
  const [lists, setLists] = useState([]);
  const [currentList, setCurrentList] = useState();
  const [listPerPage, setListPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(async () => {
    const data = await getList(); // api로 데이터 가져오기
    setLists(data);
    setCurrentList(data.slice(firstIndex, lastIndex));
  }, []);

  useEffect(() => {
    const sliced = lists.slice(firstIndex, lastIndex);
    setCurrentList(sliced);
  }, [currentPage]);

  const lastIndex = currentPage * listPerPage; // 10, 20, 30
  const firstIndex = currentPage * listPerPage - listPerPage; // 1, 11, 21..

  return (
    <div>
      <table>
        <TableHeader />
        <TableBody currentList={currentList} match={match} />
      </table>
    </div>
  );
}

export default PostList;

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>번호</th>
        <th>말머리</th>
        <th>제목</th>
        <th>글쓴이</th>
        <th>작성일</th>
        <th>조회</th>
      </tr>
    </thead>
  );
}

function TableBody({ currentList, match }) {
  return (
    <tbody>
      {currentList ? (
        currentList.map((list, index) => {
          return (
            <tr key={index}>
              <td>{list.id}</td>

              <td>{list.title.slice(0, 20)}</td>
              <td>
                <Link to={`${match.url}/${list.id}`}>
                  {list.body.slice(0, 20)}
                </Link>
              </td>
            </tr>
          );
        })
      ) : (
        <h2>loading</h2>
      )}
    </tbody>
  );
}

// function TableBody({ match, id, title, body, currentPage }) {
//   return (
//     <tr>
//       <td>{id}</td>

//       <td>{title.slice(0, 20)}</td>
//       <td>
//         <Link to={`${match.url}/${id}`}>{body.slice(0, 20)}</Link>
//       </td>
//     </tr>
//   );
// }

/* <tbody>
          {currentList
            ? currentList.map((list, index) => {
                return (
                  <TableBody
                    key={index}
                    id={list.id}
                    title={list.title}
                    body={list.body}
                    match={match}
                  />
                );
              })
            : "isLoading"}
        </tbody> */

//   <tr key={index}>
//     <td>{list.id}</td>

//     <td>{list.title.slice(0, 20)}</td>
//     <td>
//       <Link to={`${match.url}/${list.id}`}>
//         {list.body.slice(0, 20)}
//       </Link>
//     </td>
//   </tr>
