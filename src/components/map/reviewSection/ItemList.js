import { Link, useHistory } from 'react-router-dom';
import { Table, Empty, Button, List, Avatar, Card, Typography } from 'antd';

const { Text, Title } = Typography;

export default function ItemList({ items, isLoading, match, props }) {
  const { params } = props.match;
  items = [
    {
      id: 1,
      title: '안녕',
      score: 2,
    },
    {
      id: 2,
      title: '하세요',
      score: 3,
    },
  ];
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
      {isLoading && '로딩중...'}
      {!isLoading && items && (
        <>
          {/*<Link to={`${match.url}/register`} className="btn-link">새로 만들기</Link>*/}
          {!items.length && <Empty />}
          {
            !!items.length && (
              <Table
                columns={columns}
                dataSource={data}
                bordered
                title={() => <Title level={2}>리뷰 목록</Title>}
              />
            )
            /*{items.map(item => (
                                
                                <tr key={item.id}>
                                    <td align="center">{item.id}</td>
                                    <td align="left">
                                        <Link to={`/read/${item.id}`} className="board-title">{item.title}</Link>
                                    </td>
                                    <td align="right">{item.score}</td>
                                </tr>
                            ))*/
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
    </div>
  );
}
