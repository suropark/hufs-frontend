import { Link,useHistory } from "react-router-dom"


export default function ItemList({ items, isLoading,match }) {
    console.log("ItemListMatch", match);
    const history = useHistory();
    return (
        <div >
            <h2 className="title">리뷰 목록</h2>
            {isLoading && "로딩중..."}
            {!isLoading && items && (
                <>
                <button onClick={()=>history.push({
        pathname: `${match.path}/register`})}>생성</button>
                      {/*<Link to={`${match.url}/register`} className="btn-link">새로 만들기</Link>*/}
                    <table className="item-list">
                        <thead>
                            <tr>
                                <th align="center" width="80">index</th>
                                <th align="center" width="80">음식명</th>
                                <th align="center" width="80">가격</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!items.length && (
                                <tr>
                                    <td colSpan="3">목록이 비어있습니다.</td>
                                </tr>
                            )}
                            {!!items.length && items.map(item => (
                                <tr key={item.itemId}>
                                    <td align="center">{item.itemId}</td>
                                    <td align="left">
                                        <Link to={`/read/${item.itemId}`} className="board-title">{item.itemName}</Link>
                                    </td>
                                    <td align="right">{item.price.toLocaleString( 'ko-KR', { style: 'currency', currency: 'KRW' } )}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </>

            )}

        </div>
    )
}