import ItemModifyForm from '../ItemModifyForm';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { fetchItem, FETCH_ITEM } from '../../../../_actions/reviewPost_action';
import axios from 'axios';

const ItemModifyContainer = ({ match, history }) => {
  const dispatch = useDispatch();
  const { item, isLoading } = useSelector(({ item, loading }) => ({
    item: item.item,
    isLoading: loading[FETCH_ITEM],
  }));

  const { id } = match.params;

  const onModify = (title, score, content, file) => {
    const itemObject = {
      id: id,
      title: title,
      score: score,
      content: content,
    };

    const formData = new FormData();

    formData.append('file', file);
    formData.append('item', JSON.stringify(itemObject));

    axios
      .put(`http://52.78.2.40:8080/store/review/${id}`, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then((res) => {
        alert('수정되었습니다.');
        history.push(`${match.url}/${id}`);
      })
      .catch((err) => {
        alert(err.response.data.msg);
      });
  };

  useEffect(() => {
    dispatch(fetchItem(id));
  }, [dispatch, id]);

  return (
    <ItemModifyForm
      item={item}
      isLoading={isLoading}
      onModify={onModify}
      match={match}
    />
  );
};

export default withRouter(ItemModifyContainer); // component 속성을 통해 history 객체에 접근하기 위해
