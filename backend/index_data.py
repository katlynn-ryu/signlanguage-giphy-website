from opensearchpy import OpenSearch

client = OpenSearch(
    hosts=[{"host": "192.168.1.250", "port": 9200}],
    http_compress=True,
    http_auth=('elastic', 'lDuHoeEG6TH7xpGwM7mC')
)

index_name = 'giphy-data'

# 인덱스 설정 및 매핑 정의
index_body = {
    "settings": {
        "analysis": {
            "tokenizer": {
                "edge_ngram_tokenizer": {
                    "type": "edge_ngram",
                    "min_gram": 1,
                    "max_gram": 20,
                    "token_chars": ["letter", "digit"]
                }
            },
            "analyzer": {
                "edge_ngram_analyzer": {
                    "type": "custom",
                    "tokenizer": "edge_ngram_tokenizer",
                    "filter": ["lowercase"]
                }
            }
        }
    },
    "mappings": {
        "properties": {
            "alt": {
                "type": "text",
                "analyzer": "edge_ngram_analyzer",
                "search_analyzer": "standard"
            },
            "tags": {
                "type": "text",
                "analyzer": "edge_ngram_analyzer",
                "search_analyzer": "standard"
            }
        }
    }
}

# 기존 인덱스 삭제
client.indices.delete(index=index_name, ignore=[400, 404])
# 새로운 인덱스 생성
client.indices.create(index=index_name, body=index_body)


# 데이터 샘플
[
  { "src": "/3.1절_아담.webp", "alt": "GIF 1", "category": "기념일및축제", "tags": ["3.1절", "애국", "기념일", "역사"], "uploadDate": "2023-05-15", "popularity": 83 },
  { "src": "/설날_이브아담.webp", "alt": "GIF 13", "category": "기념일및축제", "tags": ["설날", "명절", "전통", "새해"], "uploadDate": "2023-06-10", "popularity": 92 },
  { "src": "/아뿔싸_이브.webp", "alt": "GIF 19", "category": "감정표현", "tags": ["아뿔싸", "실수", "당황", "놀람"], "uploadDate": "2023-01-25", "popularity": 57 },
  { "src": "/더위조심_아담.webp", "alt": "GIF 40", "category": "상황행사", "tags": ["더위조심", "더위", "여름", "건강"], "uploadDate": "2023-03-14", "popularity": 71 },
  { "src": "/3.1절_이브.webp", "alt": "GIF 2", "category": "기념일및축제", "tags": ["3.1절", "애국", "기념일", "역사"], "uploadDate": "2023-07-19", "popularity": 85 },
  { "src": "/교육중_이브.webp", "alt": "GIF 32", "category": "상황행사", "tags": ["교육중", "학습", "공부", "교육"], "uploadDate": "2023-02-22", "popularity": 62 },
  { "src": "/걱정_아담.webp", "alt": "GIF 3", "category": "감정표현", "tags": ["걱정", "불안", "스트레스", "고민"], "uploadDate": "2023-10-05", "popularity": 77 },
  { "src": "/걱정_아담2.webp", "alt": "GIF 4", "category": "감정표현", "tags": ["걱정", "불안", "스트레스", "고민"], "uploadDate": "2023-12-15", "popularity": 70 },
  { "src": "/걱정_이브.webp", "alt": "GIF 5", "category": "감정표현", "tags": ["걱정", "불안", "스트레스", "고민"], "uploadDate": "2023-11-18", "popularity": 65 },
  { "src": "/걱정_이브2.webp", "alt": "GIF 6", "category": "감정표현", "tags": ["걱정", "불안", "스트레스", "고민"], "uploadDate": "2023-09-08", "popularity": 75 },
  { "src": "/근로자의날_아담.webp", "alt": "GIF 7", "category": "기념일및축제", "tags": ["근로자의날", "노동", "휴일", "축하"], "uploadDate": "2023-04-29", "popularity": 80 },
  { "src": "/근로자의날_이브.webp", "alt": "GIF 8", "category": "기념일및축제", "tags": ["근로자의날", "노동", "휴일", "축하"], "uploadDate": "2023-05-02", "popularity": 78 },
  { "src": "/튀르키예시리아추모_색조조절_아담.webp", "alt": "GIF 137", "category": "기념일및축제", "tags": ["튀르키예시리아추모", "추모", "애도", "재해"], "uploadDate": "2023-03-21", "popularity": 84 },
  { "src": "/튀르키예시리아추모_색조조절_이브.webp", "alt": "GIF 138", "category": "기념일및축제", "tags": ["튀르키예시리아추모", "추모", "애도", "재해"], "uploadDate": "2023-07-24", "popularity": 88 },
  { "src": "/끝완료아담_1.webp", "alt": "GIF 9", "category": "기타", "tags": ["끝완료", "완료", "끝", "성취"], "uploadDate": "2023-02-13", "popularity": 81 },
  { "src": "/끝완료이브_1.webp", "alt": "GIF 10", "category": "기타", "tags": ["끝완료", "완료", "끝", "성취"], "uploadDate": "2023-08-17", "popularity": 67 },
  { "src": "/선거투표_아담.webp", "alt": "GIF 11", "category": "기념일및축제", "tags": ["선거투표", "민주주의", "정치", "참여"], "uploadDate": "2023-01-09", "popularity": 93 },
  { "src": "/선거투표_이브.webp", "alt": "GIF 12", "category": "기념일및축제", "tags": ["선거투표", "민주주의", "정치", "참여"], "uploadDate": "2023-11-29", "popularity": 69 },
  { "src": "/수고했다_이브.webp", "alt": "GIF 14", "category": "축하축제", "tags": ["수고했다", "칭찬", "격려", "감사"], "uploadDate": "2023-03-07", "popularity": 85 },
  { "src": "/수고했다.webp", "alt": "GIF 15", "category": "축하축제", "tags": ["수고했다", "칭찬", "격려", "감사"], "uploadDate": "2023-10-22", "popularity": 90 },
  { "src": "/신난다_아담.gif", "alt": "GIF 16", "category": "감정표현", "tags": ["신난다", "기쁨", "환희", "즐거움"], "uploadDate": "2023-01-14", "popularity": 77 },
  { "src": "/신난다_이브.gif", "alt": "GIF 17", "category": "감정표현", "tags": ["신난다", "기쁨", "환희", "즐거움"], "uploadDate": "2023-04-01", "popularity": 81 },
  { "src": "/아뿔싸_아담.webp", "alt": "GIF 18", "category": "감정표현", "tags": ["아뿔싸", "실수", "당황", "놀람"], "uploadDate": "2023-12-04", "popularity": 60 },
  { "src": "/어버이날_아담.webp", "alt": "GIF 20", "category": "기념일및축제", "tags": ["어버이날", "가족", "사랑", "감사"], "uploadDate": "2023-06-19", "popularity": 88 },
  { "src": "/어버이날_이브.webp", "alt": "GIF 21", "category": "기념일및축제", "tags": ["어버이날", "가족", "사랑", "감사"], "uploadDate": "2023-08-02", "popularity": 82 },
  { "src": "/예상적중_아담.webp", "alt": "GIF 22", "category": "기타", "tags": ["예상적중", "예측", "적중", "성공"], "uploadDate": "2023-02-26", "popularity": 74 },
  { "src": "/예상적중_아담2.webp", "alt": "GIF 23", "category": "기타", "tags": ["예상적중", "예측", "적중", "성공"], "uploadDate": "2023-03-19", "popularity": 73 },
  { "src": "/예상적중_이브.webp", "alt": "GIF 24", "category": "기타", "tags": ["예상적중", "예측", "적중", "성공"], "uploadDate": "2023-11-11", "popularity": 65 },
  { "src": "/고민중_아담.webp", "alt": "GIF 25", "category": "기타", "tags": ["고민중", "고민", "생각", "선택"], "uploadDate": "2023-07-13", "popularity": 71 },
  { "src": "/교육중_아담.webp", "alt": "GIF 31", "category": "상황행사", "tags": ["교육중", "학습", "공부", "교육"], "uploadDate": "2023-05-21", "popularity": 68 },
  { "src": "/꺼져_배경수정.webp", "alt": "GIF 33", "category": "감정표현", "tags": ["꺼져", "분노", "싫음", "거부"], "uploadDate": "2023-10-15", "popularity": 55 },
  { "src": "/농아인의날_아담.webp", "alt": "GIF 34", "category": "기념일및축제", "tags": ["농아인의날", "인식", "청각장애", "행사"], "uploadDate": "2023-06-02", "popularity": 80 },
  { "src": "/농아인의날_이브.webp", "alt": "GIF 35", "category": "기념일및축제", "tags": ["농아인의날", "인식", "청각장애", "행사"], "uploadDate": "2023-04-25", "popularity": 82 },
  { "src": "/다이어트_아담.webp", "alt": "GIF 36", "category": "상황행사", "tags": ["다이어트", "건강", "운동", "체중관리"], "uploadDate": "2023-12-27", "popularity": 63 },
  { "src": "/다이어트_이브.webp", "alt": "GIF 37", "category": "상황행사", "tags": ["다이어트", "건강", "운동", "체중관리"], "uploadDate": "2023-05-18", "popularity": 75 },
  { "src": "/당황_아담.webp", "alt": "GIF 38", "category": "감정표현", "tags": ["당황", "놀람", "어색함", "불안"], "uploadDate": "2023-09-26", "popularity": 67 },
  { "src": "/당황_이브.webp", "alt": "GIF 39", "category": "감정표현", "tags": ["당황", "놀람", "어색함", "불안"], "uploadDate": "2023-08-25", "popularity": 73 },
  { "src": "/더위조심_이브.webp", "alt": "GIF 41", "category": "상황행사", "tags": ["더위조심", "더위", "여름", "건강"], "uploadDate": "2023-02-18", "popularity": 70 },
  { "src": "/드루와_아담.webp", "alt": "GIF 42", "category": "상황행사", "tags": ["드루와", "초대", "환영", "참여"], "uploadDate": "2023-11-25", "popularity": 77 },
  { "src": "/드루와_이브.webp", "alt": "GIF 43", "category": "상황행사", "tags": ["드루와", "초대", "환영", "참여"], "uploadDate": "2023-04-18", "popularity": 83 },
  { "src": "/드루와2_아담.webp", "alt": "GIF 44", "category": "상황행사", "tags": ["드루와", "초대", "환영", "참여"], "uploadDate": "2023-10-09", "popularity": 64 },
  { "src": "/드루와2_이브.webp", "alt": "GIF 45", "category": "상황행사", "tags": ["드루와", "초대", "환영", "참여"], "uploadDate": "2023-01-23", "popularity": 81 },
  { "src": "/떡국1_아담.webp", "alt": "GIF 46", "category": "상황행사", "tags": ["떡국", "음식", "명절", "전통"], "uploadDate": "2023-06-27", "popularity": 88 },
  { "src": "/떡국1_이브.webp", "alt": "GIF 47", "category": "상황행사", "tags": ["떡국", "음식", "명절", "전통"], "uploadDate": "2023-03-30", "popularity": 76 },
  { "src": "/떡국2_아담.webp", "alt": "GIF 48", "category": "상황행사", "tags": ["떡국", "음식", "명절", "전통"], "uploadDate": "2023-08-11", "popularity": 84 },
  { "src": "/떡국2_이브.webp", "alt": "GIF 49", "category": "상황행사", "tags": ["떡국", "음식", "명절", "전통"], "uploadDate": "2023-05-11", "popularity": 79 },
  { "src": "/점메추_이브.webp", "alt": "GIF 105", "category": "기타", "tags": ["점메추", "추천", "음식", "점심"], "uploadDate": "2023-11-08", "popularity": 75 },
  { "src": "/조심_아담.webp", "alt": "GIF 106", "category": "감정표현", "tags": ["조심", "주의", "경고", "신중"], "uploadDate": "2023-02-04", "popularity": 68 },
  { "src": "/조심_이브.webp", "alt": "GIF 107", "category": "감정표현", "tags": ["조심", "주의", "경고", "신중"], "uploadDate": "2023-09-14", "popularity": 69 },
  { "src": "/중요한건_아담.webp", "alt": "GIF 108", "category": "기타", "tags": ["중요한건", "중요", "핵심", "포인트"], "uploadDate": "2023-07-07", "popularity": 74 },
  { "src": "/중요한건_이브.webp", "alt": "GIF 109", "category": "기타", "tags": ["중요한건", "중요", "핵심", "포인트"], "uploadDate": "2023-03-04", "popularity": 77 },
  { "src": "/주목부탁_아담.webp", "alt": "GIF 110", "category": "기타", "tags": ["주목부탁", "주목", "관심", "주의"], "uploadDate": "2023-06-01", "popularity": 72 },
  { "src": "/만우절_소녀.webp", "alt": "GIF 50", "category": "기념일및축제", "tags": ["만우절", "장난", "웃음", "농담"], "uploadDate": "2023-10-30", "popularity": 65 },
  { "src": "/만우절_소년.webp", "alt": "GIF 51", "category": "기념일및축제", "tags": ["만우절", "장난", "웃음", "농담"], "uploadDate": "2023-12-20", "popularity": 78 },
  { "src": "/봐줄게_아담.webp", "alt": "GIF 52", "category": "감정표현", "tags": ["봐줄게", "용서", "관대", "이해"], "uploadDate": "2023-02-09", "popularity": 80 },
  { "src": "/봐줄게_이브.webp", "alt": "GIF 53", "category": "감정표현", "tags": ["봐줄게", "용서", "관대", "이해"], "uploadDate": "2023-08-30", "popularity": 70 },
  { "src": "/부끄_아담.webp", "alt": "GIF 54", "category": "감정표현", "tags": ["부끄", "수줍음", "쑥스러움", "민망"], "uploadDate": "2023-05-24", "popularity": 76 },
  { "src": "/부끄_이브.webp", "alt": "GIF 55", "category": "감정표현", "tags": ["부끄", "수줍음", "쑥스러움", "민망"], "uploadDate": "2023-12-10", "popularity": 72 },
  { "src": "/부탁해_아담.webp", "alt": "GIF 56", "category": "감정표현", "tags": ["부탁해", "요청", "간청", "도움"], "uploadDate": "2023-11-03", "popularity": 68 },
  { "src": "/부탁해_이브.webp", "alt": "GIF 57", "category": "감정표현", "tags": ["부탁해", "요청", "간청", "도움"], "uploadDate": "2023-09-03", "popularity": 81 },
  { "src": "/서운해_배경유_아담.webp", "alt": "GIF 58", "category": "감정표현", "tags": ["서운해", "섭섭함", "아쉬움", "감정"], "uploadDate": "2023-02-12", "popularity": 63 },
  { "src": "/서운해_배경유_이브.webp", "alt": "GIF 59", "category": "감정표현", "tags": ["서운해", "섭섭함", "아쉬움", "감정"], "uploadDate": "2023-06-12", "popularity": 64 },
  { "src": "/서운해_아담.webp", "alt": "GIF 60", "category": "감정표현", "tags": ["서운해", "섭섭함", "아쉬움", "감정"], "uploadDate": "2023-10-19", "popularity": 62 },
  { "src": "/서운해_아담2.webp", "alt": "GIF 61", "category": "감정표현", "tags": ["서운해", "섭섭함", "아쉬움", "감정"], "uploadDate": "2023-04-13", "popularity": 67 },
  { "src": "/서운해_이브.webp", "alt": "GIF 62", "category": "감정표현", "tags": ["서운해", "섭섭함", "아쉬움", "감정"], "uploadDate": "2023-01-03", "popularity": 71 },
  { "src": "/성년의날_아담배경유.webp", "alt": "GIF 63", "category": "기념일및축제", "tags": ["성년의날", "성인식", "축하", "전환점"], "uploadDate": "2023-02-28", "popularity": 86 },
  { "src": "/성년의날_이브배경유.webp", "alt": "GIF 64", "category": "기념일및축제", "tags": ["성년의날", "성인식", "축하", "전환점"], "uploadDate": "2023-11-22", "popularity": 75 },
  { "src": "/세계수화의날_아담.webp", "alt": "GIF 65", "category": "기념일및축제", "tags": ["세계수화의날", "수어", "인식", "의사소통"], "uploadDate": "2023-12-03", "popularity": 82 },
  { "src": "/세계수화의날_이브.webp", "alt": "GIF 66", "category": "기념일및축제", "tags": ["세계수화의날", "수어", "인식", "의사소통"], "uploadDate": "2023-06-30", "popularity": 80 },
  { "src": "/스불재_아담.webp", "alt": "GIF 67", "category": "감정표현", "tags": ["스불재", "억지", "에너지", "힘듦"], "uploadDate": "2023-03-27", "popularity": 58 },
  { "src": "/스불재_이브.webp", "alt": "GIF 68", "category": "감정표현", "tags": ["스불재", "억지", "에너지", "힘듦"], "uploadDate": "2023-04-08", "popularity": 56 },
  { "src": "/시험기간_아담배경유.webp", "alt": "GIF 69", "category": "상황행사", "tags": ["시험기간", "시험", "공부", "긴장"], "uploadDate": "2023-09-19", "popularity": 74 },
  { "src": "/시험기간_이브배경유.webp", "alt": "GIF 70", "category": "상황행사", "tags": ["시험기간", "시험", "공부", "긴장"], "uploadDate": "2023-12-12", "popularity": 72 },
  { "src": "/싫어_아담.webp", "alt": "GIF 71", "category": "감정표현", "tags": ["싫어", "분노", "싫음", "거부"], "uploadDate": "2023-06-04", "popularity": 61 },
  { "src": "/싫어_이브.webp", "alt": "GIF 72", "category": "감정표현", "tags": ["싫어", "분노", "싫음", "거부"], "uploadDate": "2023-10-28", "popularity": 59 },
  { "src": "/아자화이팅_5.webp", "alt": "GIF 73", "category": "축하축제", "tags": ["아자화이팅", "응원", "격려", "힘내"], "uploadDate": "2023-11-14", "popularity": 88 },
  { "src": "/아자화이팅_이브.webp", "alt": "GIF 74", "category": "축하축제", "tags": ["아자화이팅", "응원", "격려", "힘내"], "uploadDate": "2023-03-12", "popularity": 90 },
  { "src": "/알았어_아담_배경.webp", "alt": "GIF 75", "category": "감정표현", "tags": ["알았어", "중요", "핵심", "포인트"], "uploadDate": "2023-01-16", "popularity": 65 },
  { "src": "/알았어_이브_배경.webp", "alt": "GIF 76", "category": "감정표현", "tags": ["알았어", "중요", "핵심", "포인트"], "uploadDate": "2023-05-26", "popularity": 69 },
  { "src": "/억지텐션_아담.webp", "alt": "GIF 77", "category": "감정표현", "tags": ["억지텐션", "억지", "에너지", "힘듦"], "uploadDate": "2023-09-11", "popularity": 73 },
  { "src": "/억지텐션_이브.webp", "alt": "GIF 78", "category": "감정표현", "tags": ["억지텐션", "억지", "에너지", "힘듦"], "uploadDate": "2023-08-22", "popularity": 71 },
  { "src": "/여름휴가_아담.webp", "alt": "GIF 79", "category": "상황행사", "tags": ["여름휴가", "휴가", "여행", "여름"], "uploadDate": "2023-02-05", "popularity": 88 },
  { "src": "/여름휴가_이브.webp", "alt": "GIF 80", "category": "상황행사", "tags": ["여름휴가", "휴가", "여행", "여름"], "uploadDate": "2023-12-28", "popularity": 76 },
  { "src": "/연말연시_아담.webp", "alt": "GIF 81", "category": "기념일및축제", "tags": ["연말연시", "새해", "축하", "파티"], "uploadDate": "2023-03-18", "popularity": 84 },
  { "src": "/연말연시_이브.webp", "alt": "GIF 82", "category": "기념일및축제", "tags": ["연말연시", "새해", "축하", "파티"], "uploadDate": "2023-08-09", "popularity": 83 },
  { "src": "/영혼가출_아담.webp", "alt": "GIF 83", "category": "감정표현", "tags": ["영혼가출", "슬픔", "우울", "침울"], "uploadDate": "2023-01-30", "popularity": 65 },
  { "src": "/영혼가출_이브.webp", "alt": "GIF 84", "category": "감정표현", "tags": ["영혼가출", "슬픔", "우울", "침울"], "uploadDate": "2023-05-05", "popularity": 60 },
  { "src": "/오운완_아담_배경유.webp", "alt": "GIF 85", "category": "상황행사", "tags": ["오운완", "운동", "완료", "성취"], "uploadDate": "2023-09-22", "popularity": 72 },
  { "src": "/오운완_이브.webp", "alt": "GIF 86", "category": "상황행사", "tags": ["오운완", "운동", "완료", "성취"], "uploadDate": "2023-06-29", "popularity": 66 },
  { "src": "/우울해_아담배경유.webp", "alt": "GIF 87", "category": "감정표현", "tags": ["우울해", "슬픔", "우울", "침울"], "uploadDate": "2023-02-24", "popularity": 61 },
  { "src": "/우울해_이브배경유.webp", "alt": "GIF 88", "category": "감정표현", "tags": ["우울해", "슬픔", "우울", "침울"], "uploadDate": "2023-11-30", "popularity": 58 },
  { "src": "/웃기시네_아담배경유.webp", "alt": "GIF 89", "category": "감정표현", "tags": ["웃기시네", "비꼼", "유머", "반응"], "uploadDate": "2023-03-15", "popularity": 63 },
  { "src": "/출장중_아담.webp", "alt": "GIF 118", "category": "상황행사", "tags": ["출장중", "출장", "업무", "이동"], "uploadDate": "2023-04-21", "popularity": 76 },
  { "src": "/출장중_이브.webp", "alt": "GIF 119", "category": "상황행사", "tags": ["출장중", "출장", "업무", "이동"], "uploadDate": "2023-05-12", "popularity": 71 },
  { "src": "/충격_아담.webp", "alt": "GIF 120", "category": "감정표현", "tags": ["충격", "놀람", "경악", "당황"], "uploadDate": "2023-10-31", "popularity": 60 },
  { "src": "/충격_아담배경유.webp", "alt": "GIF 121", "category": "감정표현", "tags": ["충격", "놀람", "경악", "당황"], "uploadDate": "2023-09-15", "popularity": 57 },
  { "src": "/웃기시네_이브배경유.webp", "alt": "GIF 90", "category": "감정표현", "tags": ["웃기시네", "비꼼", "유머", "반응"], "uploadDate": "2023-08-16", "popularity": 66 },
  { "src": "/위로_아담.webp", "alt": "GIF 91", "category": "기타", "tags": ["위로", "위안", "위로"], "uploadDate": "2023-11-21", "popularity": 74 },
  { "src": "/위로_이브.webp", "alt": "GIF 92", "category": "기타", "tags": ["위로", "위안", "위로"], "uploadDate": "2023-07-21", "popularity": 70 },
  { "src": "/인정_아담.webp", "alt": "GIF 93", "category": "기타", "tags": ["인정", "동의", "수용", "인정"], "uploadDate": "2023-12-06", "popularity": 62 },
  { "src": "/인정_이브.webp", "alt": "GIF 94", "category": "기타", "tags": ["인정", "동의", "수용", "인정"], "uploadDate": "2023-03-25", "popularity": 66 },
  { "src": "/일년수고_아담.webp", "alt": "GIF 95", "category": "축하축제", "tags": ["일년수고", "연말", "결산", "격려"], "uploadDate": "2023-09-01", "popularity": 85 },
  { "src": "/일년수고_이브.webp", "alt": "GIF 96", "category": "축하축제", "tags": ["일년수고", "연말", "결산", "격려"], "uploadDate": "2023-08-05", "popularity": 87 },
  { "src": "/잘자_아담.webp", "alt": "GIF 97", "category": "기타", "tags": ["잘자", "굿나잇", "휴식", "잠"], "uploadDate": "2023-10-24", "popularity": 78 },
  { "src": "/잘자_이브.webp", "alt": "GIF 98", "category": "기타", "tags": ["잘자", "굿나잇", "휴식", "잠"], "uploadDate": "2023-02-01", "popularity": 80 },
  { "src": "/장애인의날_아담배경유.webp", "alt": "GIF 99", "category": "기념일및축제", "tags": ["장애인의날", "인식", "포용", "지원"], "uploadDate": "2023-04-11", "popularity": 72 },
  { "src": "/장애인의날_이브배경유.webp", "alt": "GIF 100", "category": "기념일및축제", "tags": ["장애인의날", "인식", "포용", "지원"], "uploadDate": "2023-06-14", "popularity": 70 },
  { "src": "/태풍장마_아담.webp", "alt": "GIF 131", "category": "상황행사", "tags": ["태풍장마", "날씨", "비", "자연재해"], "uploadDate": "2023-05-13", "popularity": 61 },
  { "src": "/태풍장마_이브.webp", "alt": "GIF 132", "category": "상황행사", "tags": ["태풍장마", "날씨", "비", "자연재해"], "uploadDate": "2023-11-27", "popularity": 58 },
  { "src": "/텐션올려_아담.webp", "alt": "GIF 133", "category": "감정표현", "tags": ["텐션올려", "기쁨", "환희", "즐거움"], "uploadDate": "2023-12-22", "popularity": 73 },
  { "src": "/텐션올려_이브.webp", "alt": "GIF 134", "category": "감정표현", "tags": ["텐션올려", "기쁨", "환희", "즐거움"], "uploadDate": "2023-10-27", "popularity": 69 },
  { "src": "/통역중_아담.webp", "alt": "GIF 135", "category": "상황행사", "tags": ["통역중", "통역", "번역", "의사소통"], "uploadDate": "2023-01-20", "popularity": 81 },
  { "src": "/통역중_이브.webp", "alt": "GIF 136", "category": "상황행사", "tags": ["통역중", "통역", "번역", "의사소통"], "uploadDate": "2023-03-29", "popularity": 77 },
  { "src": "/한국수어의날_아담.webp", "alt": "GIF 139", "category": "기념일및축제", "tags": ["한국수어의날", "수어", "인식", "의사소통"], "uploadDate": "2023-07-03", "popularity": 74 },
  { "src": "/한국수어의날_이브.webp", "alt": "GIF 140", "category": "기념일및축제", "tags": ["한국수어의날", "수어", "인식", "의사소통"], "uploadDate": "2023-05-27", "popularity": 79 },
  { "src": "/한국수어의날_아담2.webp", "alt": "GIF 141", "category": "기념일및축제", "tags": ["한국수어의날", "수어", "인식", "의사소통"], "uploadDate": "2023-12-09", "popularity": 76 },
  { "src": "/한국수어의날_이브2.webp", "alt": "GIF 142", "category": "기념일및축제", "tags": ["한국수어의날", "수어", "인식", "의사소통"], "uploadDate": "2023-01-28", "popularity": 82 },
  { "src": "/한국수어의날2_아담.webp", "alt": "GIF 143", "category": "기념일및축제", "tags": ["한국수어의날", "수어", "인식", "의사소통"], "uploadDate": "2023-06-25", "popularity": 67 },
  { "src": "/한국수어의날2_이브.webp", "alt": "GIF 144", "category": "기념일및축제", "tags": ["한국수어의날", "수어", "인식", "의사소통"], "uploadDate": "2023-02-20", "popularity": 70 },
  { "src": "/행복하다_아담배경유.webp", "alt": "GIF 145", "category": "감정표현", "tags": ["행복하다", "기쁨", "행복", "즐거움"], "uploadDate": "2023-07-16", "popularity": 75 },
  { "src": "/행복하다_이브배경유.webp", "alt": "GIF 146", "category": "감정표현", "tags": ["행복하다", "기쁨", "행복", "즐거움"], "uploadDate": "2023-04-04", "popularity": 79 },
  { "src": "/헉_아담_2.webp", "alt": "GIF 147", "category": "감정표현", "tags": ["헉", "놀람", "경악", "당황"], "uploadDate": "2023-09-21", "popularity": 66 },
  { "src": "/헉_아담.webp", "alt": "GIF 148", "category": "감정표현", "tags": ["헉", "놀람", "경악", "당황"], "uploadDate": "2023-05-20", "popularity": 71 },
  { "src": "/헉_이브_2.webp", "alt": "GIF 149", "category": "감정표현", "tags": ["헉", "놀람", "경악", "당황"], "uploadDate": "2023-12-18", "popularity": 69 },
  { "src": "/헉_이브.webp", "alt": "GIF 150", "category": "감정표현", "tags": ["헉", "놀람", "경악", "당황"], "uploadDate": "2023-03-23", "popularity": 73 },
  { "src": "/헤일리_얼굴이름.webp", "alt": "GIF 151", "category": "기타", "tags": ["헤일리", "얼굴", "이름"], "uploadDate": "2023-10-07", "popularity": 77 },
  { "src": "/화이팅_아담.webp", "alt": "GIF 152", "category": "축하축제", "tags": ["화이팅", "응원", "격려", "힘내"], "uploadDate": "2023-01-19", "popularity": 84 },
  { "src": "/화이팅_이브.webp", "alt": "GIF 153", "category": "축하축제", "tags": ["화이팅", "응원", "격려", "힘내"], "uploadDate": "2023-04-15", "popularity": 85 },
  { "src": "/화이팅2_아담.webp", "alt": "GIF 154", "category": "축하축제", "tags": ["화이팅", "응원", "격려", "힘내"], "uploadDate": "2023-08-18", "popularity": 80 },
  { "src": "/화이팅2_이브.webp", "alt": "GIF 155", "category": "축하축제", "tags": ["화이팅", "응원", "격려", "힘내"], "uploadDate": "2023-11-02", "popularity": 78 },
  { "src": "/휴가중_아담.webp", "alt": "GIF 156", "category": "상황행사", "tags": ["휴가중", "휴가", "여행", "쉼"], "uploadDate": "2023-12-24", "popularity": 71 },
  { "src": "/휴가중_이브.webp", "alt": "GIF 157", "category": "상황행사", "tags": ["휴가중", "휴가", "여행", "쉼"], "uploadDate": "2023-05-09", "popularity": 65 },
  { "src": "/저메추_아담.webp", "alt": "GIF 102", "category": "기타", "tags": ["저메추", "추천", "음식", "저녁"], "uploadDate": "2023-01-07", "popularity": 78 },
  { "src": "/저메추_이브.webp", "alt": "GIF 103", "category": "기타", "tags": ["저메추", "추천", "음식", "저녁"], "uploadDate": "2023-07-10", "popularity": 76 },
  { "src": "/점메추_아담.webp", "alt": "GIF 104", "category": "기타", "tags": ["점메추", "추천", "음식", "점심"], "uploadDate": "2023-06-23", "popularity": 72 },
  { "src": "/최고2_이브.webp", "alt": "GIF 115", "category": "감정표현", "tags": ["최고2", "최고", "칭찬", "만족"], "uploadDate": "2023-04-02", "popularity": 79 },
  { "src": "/출산_아담_배경.webp", "alt": "GIF 116", "category": "상황행사", "tags": ["출산", "출산", "아기", "탄생"], "uploadDate": "2023-02-08", "popularity": 67 },
  { "src": "/출산_이브_배경.webp", "alt": "GIF 117", "category": "상황행사", "tags": ["출산", "출산", "아기", "탄생"], "uploadDate": "2023-12-31", "popularity": 75 },
  { "src": "/충격_이브.webp", "alt": "GIF 122", "category": "감정표현", "tags": ["충격", "놀람", "경악", "당황"], "uploadDate": "2023-09-24", "popularity": 70 },
  { "src": "/충격_이브배경유.webp", "alt": "GIF 123", "category": "감정표현", "tags": ["충격", "놀람", "경악", "당황"], "uploadDate": "2023-05-23", "popularity": 59 },
  { "src": "/취향저격_이브배경유.webp", "alt": "GIF 124", "category": "기타", "tags": ["취향저격", "취향", "맞춤", "만족"], "uploadDate": "2023-03-02", "popularity": 65 },
  { "src": "/취향저격_아담배경유.webp", "alt": "GIF 125", "category": "기타", "tags": ["취향저격", "취향", "맞춤", "만족"], "uploadDate": "2023-06-06", "popularity": 67 },
  { "src": "/쾌차_아담.webp", "alt": "GIF 126", "category": "기타", "tags": ["쾌차", "회복", "건강", "치유"], "uploadDate": "2023-11-16", "popularity": 77 },
  { "src": "/쾌차_이브.webp", "alt": "GIF 127", "category": "기타", "tags": ["쾌차", "회복", "건강", "치유"], "uploadDate": "2023-07-30", "popularity": 69 },
  { "src": "/고민중_이브.webp", "alt": "GIF 26", "category": "기타", "tags": ["고민중", "고민", "생각", "선택"], "uploadDate": "2023-09-04", "popularity": 70 },
  { "src": "/고민중2_아담.webp", "alt": "GIF 27", "category": "기타", "tags": ["고민중", "고민", "생각", "선택"], "uploadDate": "2023-08-12", "popularity": 68 },
  { "src": "/고민중2_이브.webp", "alt": "GIF 28", "category": "기타", "tags": ["고민중", "고민", "생각", "선택"], "uploadDate": "2023-06-09", "popularity": 71 },
  { "src": "/굉장하다_아담.webp", "alt": "GIF 29", "category": "감정표현", "tags": ["굉장하다", "놀라움", "감탄", "경이로움"], "uploadDate": "2023-01-11", "popularity": 76 },
  { "src": "/굉장하다_이브.webp", "alt": "GIF 30", "category": "감정표현", "tags": ["굉장하다", "놀라움", "감탄", "경이로움"], "uploadDate": "2023-04-24", "popularity": 74 },
  { "src": "/크리스마스_아담.webp", "alt": "GIF 128", "category": "기념일및축제", "tags": ["크리스마스", "성탄절", "겨울", "축제"], "uploadDate": "2023-01-18", "popularity": 78 },
  { "src": "/크리스마스_이브.webp", "alt": "GIF 129", "category": "기념일및축제", "tags": ["크리스마스", "성탄절", "겨울", "축제"], "uploadDate": "2023-04-20", "popularity": 82 },
  { "src": "/주목부탁_이브.webp", "alt": "GIF 111", "category": "기타", "tags": ["주목부탁", "주목", "관심", "주의"], "uploadDate": "2023-08-23", "popularity": 68 },
  { "src": "/최고하트_아담.webp", "alt": "GIF 112", "category": "기타", "tags": ["최고하트", "최고", "칭찬", "만족"], "uploadDate": "2023-12-11", "popularity": 74 },
  { "src": "/최고하트_이브.webp", "alt": "GIF 113", "category": "기타", "tags": ["최고하트", "최고", "칭찬", "만족"], "uploadDate": "2023-09-10", "popularity": 70 },
  { "src": "/최고하트2_아담.webp", "alt": "GIF 114", "category": "기타", "tags": ["최고하트", "최고", "칭찬", "만족"], "uploadDate": "2023-02-14", "popularity": 71 },
  { "src": "/큰절_아담.webp", "alt": "GIF 130", "category": "기타", "tags": ["큰절", "예의", "감사", "존경"], "uploadDate": "2023-09-06", "popularity": 77 },
  { "src": "/큰절_이브.webp", "alt": "GIF 70", "category": "기타", "tags": ["큰절", "예의", "감사", "존경"], "uploadDate": "2023-07-04", "popularity": 75 }
]

for i, doc in enumerate(docs):
    client.index(index='giphy-data', id=i+1, body=doc)

print("Data indexed successfully.")
