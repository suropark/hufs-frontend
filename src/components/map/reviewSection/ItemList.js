import { useHistory,Link } from 'react-router-dom';
import { Table, Empty,Button, Typography } from 'antd';

const { Text, Title } = Typography;

export default function ItemList({ items, isLoading, match, props }) {
  const { Column } = Table;
  const { params } = props.match;
  items = [
    {
      id: 1,
      itemName: '안녕',
      score: 2,
    },
    {
      id: 2,
      itemName: '하세요',
      score: 3,
    },
  ];

  // 평점 계산

  var sum = 0;

  items.map((item) => (
    sum += item.score
  ));

  sum = sum/items.length;

  const history = useHistory();
  const columns = [
    {
      title: 'index',
      dataIndex: 'id',
    },
    {
      title: '제목',
      dataIndex: 'title',
      //render: text => <Link to={`/read/${item.id}`} className="board-title">{text}</Link>,
    },
    {
      title: '평점',
      dataIndex: 'score',
    },
  ];

  const data = items.map((item) => ({
    id: item.id,
    title: item.title,
    score: item.score,
  }));
  return (

    <div style={{ width: '800px', margin: '0 auto', paddingTop: '150px' }}>
      <h2 className="title">리뷰 목록</h2>
            {isLoading && "로딩중..."}
            {!isLoading && items && (
                <>
                    <Button
        onClick={() =>
          history.push({
            pathname: `${match.path}/register`,
            state: { id: props.location.state.id },
          })
        }
      >
        Write Review

      </Button>
      <h2>평점 : {sum}/5</h2>

                    <table className="item-list">
                        <thead>
                            <tr>
                                <th align="center" width="80">index</th>
                                <th align="center" width="320">제목</th>
                                <th align="center" width="100">점수</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!items.length && (
                                <tr>
                                    <td colSpan="3">목록이 비어있습니다.</td>
                                </tr>
                            )}
                            {!!items.length && items.map(item => (
                                <tr key={item.id}>
                                    <td align="center">{item.id}</td>
                                    <td align="left">
                                        <Link to={`${match.path}/read/${item.id}`} className="board-title">{item.itemName}</Link>
                                    </td>
                                    <td align="right">{item.score}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </>

            )}

      {/*
      {isLoading && '로딩중...'}
      {!isLoading && items && (
        <>
          {<Link to={`${match.url}/register`} className="btn-link">새로 만들기</Link>}
          {!items.length && <Empty />}
          {
            !!items.length && (
              <Table
                dataSource={data}
                
                title={() => <Title level={2}>리뷰 목록</Title>}
              >
                <Column title="-" dataIndex="id" key="id" />
        <Column
          title="제목"
          key="title"
          render={(text, record) => (
            <Link to={`/read/${record.id}`}>
            </Link>
          )}
        />{' '}
                </Table>
            )
            {items.map(item => (
                                
                                <tr key={item.id}>
                                    <td align="center">{item.id}</td>
                                    <td align="left">
                                        <Link to={`/read/${item.id}`} className="board-title">{item.title}</Link>
                                    </td>
                                    <td align="right">{item.score}</td>
                                </tr>
                            ))
            }
        </>
      )}
      <Button
        onClick={() =>
          history.push({
            pathname: `${match.path}/register`,
            state: { id: props.location.state.id },
          })
        }
      >
        Write Review
      </Button>
      */}
    </div>
  );
}
