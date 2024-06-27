import React from 'react';
import { FaStar } from 'react-icons/fa';

// 태그 클래스 함수를 정의합니다.
const getTagClass = (tag) => {
  if (["불안", "스트레스", "고민", "기쁨", "환희", "즐거움", "실수", "당황", "놀람", "슬픔", "우울", "침울", "분노", "싫음", "행복", "어색함", "감탄", "경이로움", "민망", "아쉬움", "섭섭함"].includes(tag)) {
    return 'tag-emotion';
  }
  if (["3.1절", "근로자의날", "튀르키예시리아추모", "선거투표", "설날", "농아인의날", "세계수화의날", "성년의날", "장애인의날", "크리스마스", "만우절"].includes(tag)) {
    return 'tag-holiday';
  }
  if (["완료", "끝", "성취", "참여", "학습", "공부", "교육", "초대", "환영", "요청", "간청", "도움", "응원", "격려", "힘내", "출산", "출근", "출발", "이동", "휴가", "여행", "쉼", "운동", "회복", "치유", "선택", "생각", "경고", "신중", "용서", "이해"].includes(tag)) {
    return 'tag-action';
  }
  if (["가족", "사랑", "감사", "민주주의", "정치", "인식", "청각장애", "지원", "관대", "성인식", "포용", "수어", "의사소통", "얼굴", "이름", "헤일리"].includes(tag)) {
    return 'tag-social';
  }
  return 'tag-misc';
};

const GifComponent = ({ src, alt, isFavorite, toggleFavorite, tags }) => {
  return (
    <div className="gif-item">
      <img src={src} alt={alt} />
      <FaStar
        className="favorite-icon"
        onClick={() => toggleFavorite(src)}
        style={{ color: isFavorite ? 'gold' : 'lightgray' }}
      />
      <div className="tag-buttons">
        {tags && tags.map((tag, index) => (
          <button key={index} className={`tag-button ${getTagClass(tag)}`}>{tag}</button>
        ))}
      </div>
    </div>
  );
};

export default GifComponent;
