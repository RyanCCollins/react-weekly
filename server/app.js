/* eslint-disable */
import path from 'path';
import express from 'express';
import { graphql } from 'graphql';
import { introspectionQuery } from 'graphql/utilities';
import graphqlHTTP from 'express-graphql';
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 1337 : process.env.PORT;
const app = express();

app.use(express.static(__dirname + '/public'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.post('/contact', (req, res, next) => {

});

(async () => {
  try {
    app.use('/api', graphqlHTTP({
      schema,
      pretty: true,
      graphiql: true
    }));
  } catch (err) {
    console.warn(err);
  }
})();

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    return console.warn(err);
  }
  return console.info(`==> 😎 Listening on port ${port}. Open http://0.0.0.0:${port}/ in your browser.`);
});
/* eslint-enable */
