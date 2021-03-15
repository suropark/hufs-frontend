

function ContentTable({ content }) {

    return (
        <table className={"table"}>
            <thead>
                <tr className={"danger"}>
                    <th>번호</th>
                    <th></th>
                    <th>제목</th>
                    <th>글쓴이</th>
                </tr>
                <ContentRow content={content} />
            </thead>
        </table>
    )
}
function ContentRow({ content }) {
    //Content 세부 내용
    return (
        <div>
            {content.map(e => {
                return (
                    <tr>
                        <td>{e.rank}</td>
                        <td><img src={e.poster} alt={"has nothing"} width={"30"} height={"30"}></img></td>
                        <td>{e.title}</td>
                        <td>{e.singer}</td>
                    </tr>
                )
            })}
        </div>
    )

}


export default ContentTable;

