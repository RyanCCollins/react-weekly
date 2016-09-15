/* eslint-disable */
import 'regenerator-runtime/runtime';
import path from 'path';
import express from 'express';
import { graphql } from 'graphql';
import { introspectionQuery } from 'graphql/utilities';
import schema from './schema/schema';
import morgan from 'morgan';
import cors from 'cors';
import graphqlHTTP from 'express-graphql';
import fs from 'fs';
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 1337 : process.env.PORT;
const app = express();
const query = 'query { posts { id, title, image, tags: { slug, name }, snippet, uniqueSlug }}';

if (isDeveloping) {
  app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  app.use(morgan('combined'));
}

app.use(express.static(__dirname + '/public'));

app.post('/contact', (req, res, next) => {

});

graphql(schema, query).then((result) => {
  console.log(JSON.stringify(result))
});

(async () => {
  try {
    app.use('/api', cors(), graphqlHTTP({
      schema,
      pretty: true,
      graphiql: true
    }));

    app.get('/posts', (req, res) => {
      const data = JSON.parse(fs.readFileSync(path.join(__dirname, './schema/oldPosts.json')));
      if (!data) res.send(500).status('Unable to load posts');
      res.json(data.payload.posts);
    });

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'public/index.html'));
    });

    app.listen(port, '0.0.0.0', (err) => {
      if (err) {
        return console.warn(err);
      }
      return console.info(`==> 😎 Listening on port ${port}. Open http://0.0.0.0:${port}/ in your browser.`);
    });
    let json = await graphql(schema, introspectionQuery);
    fs.writeFile(
      './server/schema/schema.json',
      JSON.stringify(json, null, 2),
      err => {
        if (err) throw err;
        console.log('JSON schema created');
      }
    )
  } catch (err) {
    console.warn(err);
  }
})();
/* eslint-enable */
