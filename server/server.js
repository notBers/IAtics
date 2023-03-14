const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const fetch = require('node-fetch')
const cors = require('cors')

app.use(express.json());
app.use(cors())

app.post('/hello', (req, res) => {
    console.log(req.body)
    async function fetching(){
        const response = await fetch(
            `https://serpapi.com/search.json?engine=google_scholar&q=${req.body.q}&num=10&hl=${req.body.lan}&api_key=6ea373749e00a28e4a69054b5a5a6dd835543ac87332d166f7972c0d8bb16c8b`
          );
          const data = await response.json();
          const result = data.organic_results;
          const formattedResults = result?.map((sult) => ({
            title: sult.title,
            summary: sult.publication_info.summary,
            link: sult.link,
            cite_tool: sult.result_id,
            author_id: sult.author_id,
          }));
          console.log(formattedResults)
          res.send(formattedResults)
    }

    fetching()
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});