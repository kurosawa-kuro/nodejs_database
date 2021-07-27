console.log("Start!");

require('dotenv').config();
// console.log(process.env);

var {Client} = require('pg');

var client = new Client({
    user: process.env.postgres_user, // DB のユーザー名を指定
    host: process.env.postgres_host,
    database: process.env.postgres_database,
    password: process.env.postgres_password, // DB のパスワードを指定
    post: process.env.postgres_post
})

client.connect();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

/* 接続先URL */
const url = 'mongodb+srv://' + process.env.mongodb_user +':' + process.env.mongodb_password +'@' + process.env.mongodb_host;

/* データベース名 */
const dbName = process.env.mongodb_database;

/* データベース接続 */
MongoClient.connect(url, (err, client) => {

  /* Errorがあれば処理を中断 */
  assert.equal(null, err);

  /* 接続に成功すればコンソールに表示 */
  console.log('Connected successfully to server');

  /** DBを取得 */
  const db = client.db(dbName);

  /* DBとの接続切断 */
  client.close();
});