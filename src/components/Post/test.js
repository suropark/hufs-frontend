function TableBody({ currentList, match }) {
  return (
    <tbody>
      {currentList ? currentList.map((list, index) => {
        return (
          <tr>
            <td>{list.id}</td>

            <td>{list.title.slice(0, 20)}</td>
            <td>
              <Link to={`${match.url}/${list.id}`}>
                {list.body.slice(0, 20)}
              </Link>
            </td>
          </tr>
        );
      }) : "isLoading"}
    </tbody>
  );
}