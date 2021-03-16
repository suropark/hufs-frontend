import React, { Fragment, useState, useEffect } from 'react';
import Search from "./components/Search"
import ContentTable from "./components/ContentTable"
import axios from "axios";


function App3() {

    const [content, setContent] = useState([]);
    //게시판 content
    const [search, setSearch] = useState("");
    //검색창 입력

    useEffect(() => {
        axios.get("http://localhost:3000/music.json").then((res) => {
            setContent(res.data);
            console.log(content)
        })
    }, []) //DB에서 데이터 json파일 end point

    const handleUserInput = (search) => {
        setSearch(search);
    }

    //검색창 입력값 받아오기 .

    return (
        <Fragment className={"row"}>

            <Search ss={search} userInput={handleUserInput} />
            <ContentTable content={content} ss={search} />

        </Fragment>
    )
}



export default App3;