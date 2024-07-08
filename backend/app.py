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
                "ngram_tokenizer": {
                    "type": "nGram",
                    "min_gram": 3,
                    "max_gram": 3,
                    "token_chars": ["letter", "digit"]
                }
            },
            "analyzer": {
                "ngram_analyzer": {
                    "type": "custom",
                    "tokenizer": "ngram_tokenizer",
                    "filter": ["lowercase"]
                }
            }
        }
    },
    "mappings": {
        "properties": {
            "alt": {
                "type": "text",
                "analyzer": "ngram_analyzer"
            },
            "tags": {
                "type": "text",
                "analyzer": "ngram_analyzer"
            }
        }
    }
}

# 기존 인덱스 삭제
client.indices.delete(index=index_name, ignore=[400, 404])
# 새로운 인덱스 생성
client.indices.create(index=index_name, body=index_body)
