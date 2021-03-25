import axios from 'axios';
import { GET_SCHOLAR } from './types';
export const getScholar = async () => {
  // const request = await axios.get('scholar').then((response) => response.data);
  // 실제 사용.
  return {
    type: GET_SCHOLAR,
    payload: request,
  };
};
// response.data 테스트용,
const request = [
  {
    id: 1430,
    title: '청년 창업농육성 장학금 공지기간연장',
    link:
      'http://hufs.ac.kr/user/boardList.action?command=view&page=5&boardId=118188197&boardSeq=149322698',
    scholarshipDateId: 41,
    scholarshipOptionId: 1,
    scholarshipSchoolOptionId: 1,
    ScholarshipDate: {
      date: '2021-03-06T00:00:00.000Z',
    },
    ScholarshipOption: {
      name: '교외',
    },
    ScholarshipSchoolOption: {
      name: '공통',
    },
  },
  {
    id: 1431,
    title: '2021년 1학기 농촌출신대학생 학자금융자 신청 안내',
    link:
      'http://hufs.ac.kr/user/boardList.action?command=view&page=5&boardId=118188197&boardSeq=149325540',
    scholarshipDateId: null,
    scholarshipOptionId: 68,
    scholarshipSchoolOptionId: 1,
    ScholarshipDate: {
      date: '2021-03-06T00:00:00.000Z',
    },
    ScholarshipOption: {
      name: '대출',
    },
    ScholarshipSchoolOption: {
      name: '공통',
    },
  },
  {
    id: 1432,
    title: '2021-1학기 학자금대출 신청 안내',
    link:
      'http://hufs.ac.kr/user/boardList.action?command=view&page=5&boardId=118188197&boardSeq=149326528',
    scholarshipDateId: null,
    scholarshipOptionId: 68,
    scholarshipSchoolOptionId: 1,
    ScholarshipDate: null,
    ScholarshipOption: {
      name: '대출',
    },
    ScholarshipSchoolOption: {
      name: '공통',
    },
  },
];
