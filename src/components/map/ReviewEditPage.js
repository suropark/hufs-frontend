import React,{useState} from "react";

function ReviewEditPage(props) {


  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <br />
        <label>Title:</label>
        <input onChange={props.handleTitleChange} defaultValue={props.titleValue} type ="text" name = "title"/>
        <hr></hr>
        <div>
          <textarea onChange={props.handleContentChange} defaultValue={props.contentValue} name = "content"></textarea>
        </div>
        <button onClick={props.handleSubmit}>{props.update ? "수정" : "등록"}</button>
      </form>
    </div>
  )
}

export default ReviewEditPage;