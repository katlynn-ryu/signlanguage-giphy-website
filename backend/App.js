const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('@opensearch-project/opensearch');

const app = express();
app.use(bodyParser.json());

const client = new Client({
  node: 'http://localhost:9200',
  auth: {
    username: 'elastic',
    password: 'lDuHoeEG6TH7xpGwM7mC'
  }
});

app.get('/search', async (req, res) => {
  const { q, page = 1, size = 19 } = req.query;
  const from = (page - 1) * size;

  try {
    const { body } = await client.search({
      index: 'giphy-data',
      body: {
        query: {
          bool: {
            must: [
              {
                match: {
                  "user.id": "User-1"
                }
              }
            ],
            should: [
              {
                wildcard: {
                  tags: `*${q}*`
                }
              },
              {
                wildcard: {
                  category: `*${q}*`
                }
              },
              {
                wildcard: {
                  alt: `*${q}*`
                }
              }
            ],
            minimum_should_match: 1
          }
        },
        from,
        size
      }
    });

    res.json({
      total: body.hits.total.value,
      results: body.hits.hits
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error searching data' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
