import React from 'react';
import { PageHeader } from 'antd';

function PostSub({ match }) {


    return (
        <>
            <PageHeader
                title={findBoardName(+match?.url.substring(1))}
                subTitle={findBoardSub(+match?.url.substring(1))}
            />


        </>
    )

}

export default PostSub;

export function findBoardName(boardId) {
    switch (boardId) {
        case 1:
            return '떠들어Boo';
        case 2:
            return '학교 해Boo';
        case 3:
            return '학교 간 Boo';
        case 4:
            return '학교 떠난 Boo';
        case 5:
            return '정면승Boo';
        case 6:
            return '이거 모르면 바Boo';
        default:
            break;
    }
}

export function findBoardSub(boardId) {
    switch (boardId) {
        case 1:
            return '자유롭게 떠드는 커뮤니티';
        case 2:
            return '장학금 여기서 스~윽';
        case 3:
            return '외대생만의 맛집과 리뷰!';
        case 4:
            return '졸업생들 여기 모여~~!';
        case 5:
            return '캠O스픽, 스X업 말고 여기서 한 번에 모아보자!';
        case 6:
            return '외대생이라면 누릴 수 있는 제휴 혜택 정보&꿀팁 궁금한 사람?!';
        default:
            break;
    }
}