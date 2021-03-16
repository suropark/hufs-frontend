import React from 'react';



function Search(props) {

    const onChange = (e) => {
        props.userInput(e.target.value);
    }

    return (
        <table>
            <tr>
                <td>
                    <input type={"text"} size={"25"}
                        placeholder="Search" onChange={onChange}
                        value={props.ss}></input>
                </td>
            </tr>
        </table>
    )
}


export default Search;
