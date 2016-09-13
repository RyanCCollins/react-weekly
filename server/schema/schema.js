import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from '../../node_modules/graphql';

import pythonShell from 'python-shell';
import fs from 'fs';

let posts = {};
const loadPosts = () =>
  new Promise((resolve, reject) => {
    const options = {
      scriptPath: '/Users/myMac/Developer/works-in-progress/react-weekly/server/schema',
    };
    pythonShell.run('medium-api.py', options, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });

loadPosts().then(() => {
  fs.readFileSync('./posts.json', 'utf-8', (err, contents) => {
    if (err) {
      console.log(err);
    }
    posts = contents;
  });
});
