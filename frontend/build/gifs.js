const allGifs = [
  { src: "/3.1절_아담.webp", alt: "GIF 1", category: "3.1절", tags: ["애국", "기념일", "역사"] },
  { src: "/3.1절_이브.webp", alt: "GIF 2", category: "3.1절", tags: ["애국", "기념일", "역사"] },
  { src: "/걱정_아담.webp", alt: "GIF 3", category: "걱정", tags: ["불안", "스트레스", "고민"] },
  { src: "/걱정_아담2.webp", alt: "GIF 4", category: "걱정", tags: ["불안", "스트레스", "고민"] },
  { src: "/걱정_이브.webp", alt: "GIF 5", category: "걱정", tags: ["불안", "스트레스", "고민"] },
  { src: "/걱정_이브2.webp", alt: "GIF 6", category: "걱정", tags: ["불안", "스트레스", "고민"] },
  { src: "/근로자의날_아담.webp", alt: "GIF 7", category: "근로자의날", tags: ["노동", "휴일", "축하"] },
  { src: "/근로자의날_이브.webp", alt: "GIF 8", category: "근로자의날", tags: ["노동", "휴일", "축하"] },
  { src: "/튀르키예시리아추모_색조조절_아담.webp", alt: "GIF 137", category: "튀르키예시리아추모", tags: ["추모", "애도", "재해"] },
  { src: "/튀르키예시리아추모_색조조절_이브.webp", alt: "GIF 138", category: "튀르키예시리아추모", tags: ["추모", "애도", "재해"] },
  { src: "/끝완료아담_1.webp", alt: "GIF 9", category: "끝완료", tags: ["완료", "끝", "성취"] },
  { src: "/끝완료이브_1.webp", alt: "GIF 10", category: "끝완료", tags: ["완료", "끝", "성취"] },
  { src: "/선거투표_아담.webp", alt: "GIF 11", category: "선거투표", tags: ["민주주의", "정치", "참여"] },
  { src: "/선거투표_이브.webp", alt: "GIF 12", category: "선거투표", tags: ["민주주의", "정치", "참여"] },
  { src: "/설날_이브아담.webp", alt: "GIF 13", category: "설날", tags: ["명절", "전통", "새해"] },
  { src: "/수고했다_이브.webp", alt: "GIF 14", category: "수고했다", tags: ["칭찬", "격려", "감사"] },
  { src: "/수고했다.webp", alt: "GIF 15", category: "수고했다", tags: ["칭찬", "격려", "감사"] },
  { src: "/신난다_아담.gif", alt: "GIF 16", category: "신난다", tags: ["기쁨", "환희", "즐거움"] },
  { src: "/신난다_이브.gif", alt: "GIF 17", category: "신난다", tags: ["기쁨", "환희", "즐거움"] },
  { src: "/아뿔싸_아담.webp", alt: "GIF 18", category: "아뿔싸", tags: ["실수", "당황", "놀람"] },
  { src: "/아뿔싸_이브.webp", alt: "GIF 19", category: "아뿔싸", tags: ["실수", "당황", "놀람"] },
  { src: "/어버이날_아담.webp", alt: "GIF 20", category: "어버이날", tags: ["가족", "사랑", "감사"] },
  { src: "/어버이날_이브.webp", alt: "GIF 21", category: "어버이날", tags: ["가족", "사랑", "감사"] },
  { src: "/예상적중_아담.webp", alt: "GIF 22", category: "예상적중", tags: ["예측", "적중", "성공"] },
  { src: "/예상적중_아담2.webp", alt: "GIF 23", category: "예상적중", tags: ["예측", "적중", "성공"] },
  { src: "/예상적중_이브.webp", alt: "GIF 24", category: "예상적중", tags: ["예측", "적중", "성공"] },
  { src: "/고민중_아담.webp", alt: "GIF 25", category: "고민중", tags: ["고민", "생각", "선택"] },
  { src: "/교육중_아담.webp", alt: "GIF 31", category: "교육중", tags: ["학습", "공부", "교육"] },
  { src: "/교육중_이브.webp", alt: "GIF 32", category: "교육중", tags: ["학습", "공부", "교육"] },
  { src: "/꺼져_배경수정.webp", alt: "GIF 33", category: "꺼져", tags: ["분노", "싫음", "거부"] },
  { src: "/농아인의날_아담.webp", alt: "GIF 34", category: "농아인의날", tags: ["인식", "청각장애", "행사"] },
  { src: "/농아인의날_이브.webp", alt: "GIF 35", category: "농아인의날", tags: ["인식", "청각장애", "행사"] },
  { src: "/다이어트_아담.webp", alt: "GIF 36", category: "다이어트", tags: ["건강", "운동", "체중관리"] },
  { src: "/다이어트_이브.webp", alt: "GIF 37", category: "다이어트", tags: ["건강", "운동", "체중관리"] },
  { src: "/당황_아담.webp", alt: "GIF 38", category: "당황", tags: ["놀람", "어색함", "불안"] },
  { src: "/당황_이브.webp", alt: "GIF 39", category: "당황", tags: ["놀람", "어색함", "불안"] },
  { src: "/더위조심_아담.webp", alt: "GIF 40", category: "더위조심", tags: ["더위", "여름", "건강"] },
  { src: "/더위조심_이브.webp", alt: "GIF 41", category: "더위조심", tags: ["더위", "여름", "건강"] },
  { src: "/드루와_아담.webp", alt: "GIF 42", category: "드루와", tags: ["초대", "환영", "참여"] },
  { src: "/드루와_이브.webp", alt: "GIF 43", category: "드루와", tags: ["초대", "환영", "참여"] },
  { src: "/드루와2_아담.webp", alt: "GIF 44", category: "드루와", tags: ["초대", "환영", "참여"] },
  { src: "/드루와2_이브.webp", alt: "GIF 45", category: "드루와", tags: ["초대", "환영", "참여"] },
  { src: "/떡국1_아담.webp", alt: "GIF 46", category: "떡국", tags: ["음식", "명절", "전통"] },
  { src: "/떡국1_이브.webp", alt: "GIF 47", category: "떡국", tags: ["음식", "명절", "전통"] },
  { src: "/떡국2_아담.webp", alt: "GIF 48", category: "떡국", tags: ["음식", "명절", "전통"] },
  { src: "/떡국2_이브.webp", alt: "GIF 49", category: "떡국", tags: ["음식", "명절", "전통"] },
  { src: "/점메추_이브.webp", alt: "GIF 105", category: "점메추", tags: ["추천", "음식", "점심"] },
  { src: "/조심_아담.webp", alt: "GIF 106", category: "조심", tags: ["주의", "경고", "신중"] },
  { src: "/조심_이브.webp", alt: "GIF 107", category: "조심", tags: ["주의", "경고", "신중"] },
  { src: "/중요한건_아담.webp", alt: "GIF 108", category: "중요한건", tags: ["중요", "핵심", "포인트"] },
  { src: "/중요한건_이브.webp", alt: "GIF 109", category: "중요한건", tags: ["중요", "핵심", "포인트"] },
  { src: "/주목부탁_아담.webp", alt: "GIF 110", category: "주목부탁", tags: ["주목", "관심", "주의"] },
  { src: "/만우절_소녀.webp", alt: "GIF 50", category: "만우절", tags: ["장난", "웃음", "농담"] },
  { src: "/만우절_소년.webp", alt: "GIF 51", category: "만우절", tags: ["장난", "웃음", "농담"] },
  { src: "/봐줄게_아담.webp", alt: "GIF 52", category: "봐줄게", tags: ["용서", "관대", "이해"] },
  { src: "/봐줄게_이브.webp", alt: "GIF 53", category: "봐줄게", tags: ["용서", "관대", "이해"] },
  { src: "/부끄_아담.webp", alt: "GIF 54", category: "부끄", tags: ["수줍음", "쑥스러움", "민망"] },
  { src: "/부끄_이브.webp", alt: "GIF 55", category: "부끄", tags: ["수줍음", "쑥스러움", "민망"] },
  { src: "/부탁해_아담.webp", alt: "GIF 56", category: "부탁해", tags: ["요청", "간청", "도움"] },
  { src: "/부탁해_이브.webp", alt: "GIF 57", category: "부탁해", tags: ["요청", "간청", "도움"] },
  { src: "/서운해_배경유_아담.webp", alt: "GIF 58", category: "서운해", tags: ["섭섭함", "아쉬움", "감정"] },
  { src: "/서운해_배경유_이브.webp", alt: "GIF 59", category: "서운해", tags: ["섭섭함", "아쉬움", "감정"] },
  { src: "/서운해_아담.webp", alt: "GIF 60", category: "서운해", tags: ["섭섭함", "아쉬움", "감정"] },
  { src: "/서운해_아담2.webp", alt: "GIF 61", category: "서운해", tags: ["섭섭함", "아쉬움", "감정"] },
  { src: "/서운해_이브.webp", alt: "GIF 62", category: "서운해", tags: ["섭섭함", "아쉬움", "감정"] },
  { src: "/성년의날_아담배경유.webp", alt: "GIF 63", category: "성년의날", tags: ["성인식", "축하", "전환점"] },
  { src: "/성년의날_이브배경유.webp", alt: "GIF 64", category: "성년의날", tags: ["성인식", "축하", "전환점"] },
  { src: "/세계수화의날_아담.webp", alt: "GIF 65", category: "세계수화의날", tags: ["수어", "인식", "의사소통"] },
  { src: "/세계수화의날_이브.webp", alt: "GIF 66", category: "세계수화의날", tags: ["수어", "인식", "의사소통"] },
  { src: "/스불재_아담.webp", alt: "GIF 67", category: "스불재", tags: ["억지", "에너지", "힘듦"] },
  { src: "/스불재_이브.webp", alt: "GIF 68", category: "스불재", tags: ["억지", "에너지", "힘듦"] },
  { src: "/시험기간_아담배경유.webp", alt: "GIF 69", category: "시험기간", tags: ["시험", "공부", "긴장"] },
  { src: "/시험기간_이브배경유.webp", alt: "GIF 70", category: "시험기간", tags: ["시험", "공부", "긴장"] },
  { src: "/싫어_아담.webp", alt: "GIF 71", category: "싫어", tags: ["분노", "싫음", "거부"] },
  { src: "/싫어_이브.webp", alt: "GIF 72", category: "싫어", tags: ["분노", "싫음", "거부"] },
  { src: "/아자화이팅_5.webp", alt: "GIF 73", category: "아자화이팅", tags: ["응원", "격려", "힘내"] },
  { src: "/아자화이팅_이브.webp", alt: "GIF 74", category: "아자화이팅", tags: ["응원", "격려", "힘내"] },
  { src: "/알았어_아담_배경.webp", alt: "GIF 75", category: "알았어", tags: ["중요", "핵심", "포인트"] },
  { src: "/알았어_이브_배경.webp", alt: "GIF 76", category: "알았어", tags: ["중요", "핵심", "포인트"] },
  { src: "/억지텐션_아담.webp", alt: "GIF 77", category: "억지텐션", tags: ["억지", "에너지", "힘듦"] },
  { src: "/억지텐션_이브.webp", alt: "GIF 78", category: "억지텐션", tags: ["억지", "에너지", "힘듦"] },
  { src: "/여름휴가_아담.webp", alt: "GIF 79", category: "여름휴가", tags: ["휴가", "여행", "여름"] },
  { src: "/여름휴가_이브.webp", alt: "GIF 80", category: "여름휴가", tags: ["휴가", "여행", "여름"] },
  { src: "/연말연시_아담.webp", alt: "GIF 81", category: "연말연시", tags: ["새해", "축하", "파티"] },
  { src: "/연말연시_이브.webp", alt: "GIF 82", category: "연말연시", tags: ["새해", "축하", "파티"] },
  { src: "/영혼가출_아담.webp", alt: "GIF 83", category: "영혼가출", tags: ["슬픔", "우울", "침울"] },
  { src: "/영혼가출_이브.webp", alt: "GIF 84", category: "영혼가출", tags: ["슬픔", "우울", "침울"] },
  { src: "/오운완_아담_배경유.webp", alt: "GIF 85", category: "오운완", tags: ["운동", "완료", "성취"] },
  { src: "/오운완_이브.webp", alt: "GIF 86", category: "오운완", tags: ["운동", "완료", "성취"] },
  { src: "/우울해_아담배경유.webp", alt: "GIF 87", category: "우울해", tags: ["슬픔", "우울", "침울"] },
  { src: "/우울해_이브배경유.webp", alt: "GIF 88", category: "우울해", tags: ["슬픔", "우울", "침울"] },
  { src: "/웃기시네_아담배경유.webp", alt: "GIF 89", category: "웃기시네", tags: ["비꼼", "유머", "반응"] },
  { src: "/출장중_아담.webp", alt: "GIF 118", category: "출장중", tags: ["출장", "업무", "이동"] },
  { src: "/출장중_이브.webp", alt: "GIF 119", category: "출장중", tags: ["출장", "업무", "이동"] },
  { src: "/충격_아담.webp", alt: "GIF 120", category: "충격", tags: ["놀람", "경악", "당황"] },
  { src: "/충격_아담배경유.webp", alt: "GIF 121", category: "충격", tags: ["놀람", "경악", "당황"] },
  { src: "/웃기시네_이브배경유.webp", alt: "GIF 90", category: "웃기시네", tags: ["비꼼", "유머", "반응"] },
  { src: "/위로_아담.webp", alt: "GIF 91", category: "위로", tags: ["위로", "위안", "위로"] },
  { src: "/위로_이브.webp", alt: "GIF 92", category: "위로", tags: ["위로", "위안", "위로"] },
  { src: "/인정_아담.webp", alt: "GIF 93", category: "인정", tags: ["동의", "수용", "인정"] },
  { src: "/인정_이브.webp", alt: "GIF 94", category: "인정", tags: ["동의", "수용", "인정"] },
  { src: "/일년수고_아담.webp", alt: "GIF 95", category: "일년수고", tags: ["연말", "결산", "격려"] },
  { src: "/일년수고_이브.webp", alt: "GIF 96", category: "일년수고", tags: ["연말", "결산", "격려"] },
  { src: "/잘자_아담.webp", alt: "GIF 97", category: "잘자", tags: ["굿나잇", "휴식", "잠"] },
  { src: "/잘자_이브.webp", alt: "GIF 98", category: "잘자", tags: ["굿나잇", "휴식", "잠"] },
  { src: "/장애인의날_아담배경유.webp", alt: "GIF 99", category: "장애인의날", tags: ["인식", "포용", "지원"] },
  { src: "/장애인의날_이브배경유.webp", alt: "GIF 100", category: "장애인의날", tags: ["인식", "포용", "지원"] },
  { src: "/태풍장마_아담.webp", alt: "GIF 131", category: "태풍장마", tags: ["날씨", "비", "자연재해"] },
  { src: "/태풍장마_이브.webp", alt: "GIF 132", category: "태풍장마", tags: ["날씨", "비", "자연재해"] },
  { src: "/텐션올려_아담.webp", alt: "GIF 133", category: "텐션올려", tags: ["기쁨", "환희", "즐거움"] },
  { src: "/텐션올려_이브.webp", alt: "GIF 134", category: "텐션올려", tags: ["기쁨", "환희", "즐거움"] },
  { src: "/통역중_아담.webp", alt: "GIF 135", category: "통역중", tags: ["통역", "번역", "의사소통"] },
  { src: "/통역중_이브.webp", alt: "GIF 136", category: "통역중", tags: ["통역", "번역", "의사소통"] },
  { src: "/한국수어의날_아담.webp", alt: "GIF 139", category: "한국수어의날", tags: ["수어", "인식", "의사소통"] },
  { src: "/한국수어의날_이브.webp", alt: "GIF 140", category: "한국수어의날", tags: ["수어", "인식", "의사소통"] },
  { src: "/한국수어의날_아담2.webp", alt: "GIF 141", category: "한국수어의날", tags: ["수어", "인식", "의사소통"] },
  { src: "/한국수어의날_이브2.webp", alt: "GIF 142", category: "한국수어의날", tags: ["수어", "인식", "의사소통"] },
  { src: "/한국수어의날2_아담.webp", alt: "GIF 143", category: "한국수어의날", tags: ["수어", "인식", "의사소통"] },
  { src: "/한국수어의날2_이브.webp", alt: "GIF 144", category: "한국수어의날", tags: ["수어", "인식", "의사소통"] },
  { src: "/행복하다_아담배경유.webp", alt: "GIF 145", category: "행복하다", tags: ["기쁨", "행복", "즐거움"] },
  { src: "/행복하다_이브배경유.webp", alt: "GIF 146", category: "행복하다", tags: ["기쁨", "행복", "즐거움"] },
  { src: "/헉_아담_2.webp", alt: "GIF 147", category: "헉", tags: ["놀람", "경악", "당황"] },
  { src: "/헉_아담.webp", alt: "GIF 148", category: "헉", tags: ["놀람", "경악", "당황"] },
  { src: "/헉_이브_2.webp", alt: "GIF 149", category: "헉", tags: ["놀람", "경악", "당황"] },
  { src: "/헉_이브.webp", alt: "GIF 150", category: "헉", tags: ["놀람", "경악", "당황"] },
  { src: "/헤일리_얼굴이름.webp", alt: "GIF 151", category: "헤일리", tags: ["얼굴", "이름", "헤일리"] },
  { src: "/화이팅_아담.webp", alt: "GIF 152", category: "화이팅", tags: ["응원", "격려", "힘내"] },
  { src: "/화이팅_이브.webp", alt: "GIF 153", category: "화이팅", tags: ["응원", "격려", "힘내"] },
  { src: "/화이팅2_아담.webp", alt: "GIF 154", category: "화이팅", tags: ["응원", "격려", "힘내"] },
  { src: "/화이팅2_이브.webp", alt: "GIF 155", category: "화이팅", tags: ["응원", "격려", "힘내"] },
  { src: "/휴가중_아담.webp", alt: "GIF 156", category: "휴가중", tags: ["휴가", "여행", "쉼"] },
  { src: "/휴가중_이브.webp", alt: "GIF 157", category: "휴가중", tags: ["휴가", "여행", "쉼"] },
  { src: "/저메추_아담.webp", alt: "GIF 102", category: "저메추", tags: ["추천", "음식", "저녁"] },
  { src: "/저메추_이브.webp", alt: "GIF 103", category: "저메추", tags: ["추천", "음식", "저녁"] },
  { src: "/점메추_아담.webp", alt: "GIF 104", category: "점메추", tags: ["추천", "음식", "점심"] },
  { src: "/최고2_이브.webp", alt: "GIF 115", category: "최고2", tags: ["최고", "칭찬", "만족"] },
  { src: "/출산_아담_배경.webp", alt: "GIF 116", category: "출산", tags: ["출산", "아기", "탄생"] },
  { src: "/출산_이브_배경.webp", alt: "GIF 117", category: "출산", tags: ["출산", "아기", "탄생"] },
  { src: "/충격_이브.webp", alt: "GIF 122", category: "충격", tags: ["놀람", "경악", "당황"] },
  { src: "/충격_이브배경유.webp", alt: "GIF 123", category: "충격", tags: ["놀람", "경악", "당황"] },
  { src: "/취향저격_이브배경유.webp", alt: "GIF 124", category: "취향저격", tags: ["취향", "맞춤", "만족"] },
  { src: "/취향저격_아담배경유.webp", alt: "GIF 125", category: "취향저격", tags: ["취향", "맞춤", "만족"] },
  { src: "/쾌차_아담.webp", alt: "GIF 126", category: "쾌차", tags: ["회복", "건강", "치유"] },
  { src: "/쾌차_이브.webp", alt: "GIF 127", category: "쾌차", tags: ["회복", "건강", "치유"] },
];

export default allGifs;
