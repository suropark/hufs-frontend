import { message } from 'antd';
//CONFLICT, 404 정리 필요. +a

export default function (errorMessage) {
  switch (errorMessage) {
    case 'INVALID_NICKNAME_TIME':
      message.error('닉네임을 변경한지 30일이 지나지 않았습니다.');
      break;
    case 'UNAUTHORIZED':
      message.error('로그인이 필요합니다.');
      props.history.push('/');
      break;
    case 'FORBIDDEN_SUSPENSION':
      message.error('정지된 사용자');
    case 'FORBIDDEN_BEFORE':
      message.error('이메일 인증이 필요합니다');
      break;
    case 'CONFLICT':
      message.error('이미 인증처리가 된 웹메일입니다.');
      break;
    case 'CONFLICT_NICKNAME':
      message.error('이미 존재하는 닉네임입니다.');
      break;
    case 'CONFLICT_MAIN_MAJOR':
      message.error('주 전공을 이미 수정하셨습니다.');
      break;
    case 'CONFLICT_DOBULE_MAJOR':
      message.error('이중 전공을 이미 수정하셨습니다.');
      break;
    case 'BODY_MAIN_MAJOR':
      message.error('주 전공을 입력해주세요.');
      break;
    case 'BODY_DOUBLE_MAJOR':
      message.error('이중 전공을 입력해주세요.');
      break;
    case 'QUERY':
      message.error('쿼리 스트링 에러, 운영진에게 연락바랍니다.');
      break;
    case 'EXPIRED':
      message.error('인증 시간(24시간)이 만료되었습니다. 다시 인증해주세요.');
      break;
    case 'QUERY_KEYWORD':
      message.error('두 글자 이상 입력해주세요.');
      break;
    case 'QUERY_OPTION':
      message.error('옵션을 다시 선택해주세요.');
    default:
      message.error('알 수 없는 에러');
      props.history.push('/');
      break;
  }
}
