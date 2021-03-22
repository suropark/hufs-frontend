import React,{useState} from "react";
import {useDispatch} from "react-redux";
import ReviewEditPage from "./ReviewEditPage";
import { postActions } from "./slice/PostSlice";

function ReviewPage() {
  const dispatch = useDispatch();
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [IsForUpdate, setIsForUpdate] = useState(false);

  const onTitleChange = (event) => { setTitleValue(event.currentTarget.value); };
  console.log(titleValue);
  const onContentChange = (event) => { setContentValue(event.currentTarget.value); };
  console.log(contentValue);
  const onSubmit = (event) => {
    event.preventDefault(); 
    const post = { title: titleValue, content: contentValue };
    dispatch(postActions.registerPost(post));
  }


  return (
    <div>
      <ReviewEditPage
      titleValue={titleValue}
      contentValue={contentValue}
      handleTitleValue={onTitleChange}
      handleContentValue={onContentChange}
      handleSubmit={onSubmit}
      update={IsForUpdate}/>
 
    </div>
  )
}

export default ReviewPage;