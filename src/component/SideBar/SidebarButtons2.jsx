import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SidebarButtons.module.css'; // 동일한 스타일 적용
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faBullhorn, faPlusCircle, faHome } from '@fortawesome/free-solid-svg-icons';


const SidebarButtons2 = () => {
  const navigate = useNavigate();

  // 예시로, 각 버튼 클릭 시 동작하는 함수를 추가합니다.
  // 실제 경로('/attendance', '/board' 등)는 앱의 라우트 구조에 맞게 조정하세요.
  const goToMainPage = () => navigate('../StudentMainPage')
  const goToAttendance = () => navigate('../StudentPage');
  const goToQuestion = () =>alert('준비 중입니다.')
  const goToAnnounce = () =>alert('준비 중입니다.')
  const goToAssignment = () =>alert('준비 중입니다.')
  const goToMaterials = () =>alert('준비 중입니다.')
  const goToStudyPlan = () =>alert('준비 중입니다.')
  const goToSurvey = () =>alert('준비 중입니다.')
  // 다른 페이지 이동 함수들...

  return (
    <div className={styles.buttonContainer}>
       
       <button onClick={goToMainPage} className={`${styles.button} ${styles.textButton}`}>
      
      메인페이지</button>
          
      <button onClick={goToAttendance} className={`${styles.button} ${styles.textButton}`}>
      
       출석</button>
      <button onClick={goToQuestion} className={`${styles.button} ${styles.textButton}`}>질문게시판</button>
      <button onClick={goToAnnounce} className={`${styles.button} ${styles.textButton}`}>공지사항</button>
      <button onClick={goToAssignment} className={`${styles.button} ${styles.textButton}`}>과제</button>
      <button onClick={goToMaterials} className={`${styles.button} ${styles.textButton}`}>수업자료</button>
      <button onClick={goToStudyPlan} className={`${styles.button} ${styles.textButton}`}>강좌 계획서</button>
      <button onClick={goToSurvey} className={`${styles.button} ${styles.textButton}`}>설문</button>
    </div>
  );
};

export default SidebarButtons2;