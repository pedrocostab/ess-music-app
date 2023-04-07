import express = require('express');
import bodyParser = require("body-parser");
import cors = require("cors");
import cookieParser = require("cookie-parser");
import routes from './routes/routes';
import { Context } from './infra/context';
  
import {  initDatabase,
          UserRepository,
          SongRepository,
          CategoryRepository,
          PlaylistRepository,
          PlaylistSongRepository,
          PlaylistCategoryRepository,
          UserFollowPlaylistRepository,
          UserSongHistoryRepository } from 'database-json-implementation';


const jsonDb = initDatabase('db.json');

const context = new Context(
  new UserRepository(jsonDb),
  new SongRepository(jsonDb),
  new CategoryRepository(jsonDb),
  new PlaylistRepository(jsonDb),
  new PlaylistSongRepository(jsonDb),
  new PlaylistCategoryRepository(jsonDb),
  new UserSongHistoryRepository(jsonDb),
  new UserFollowPlaylistRepository(jsonDb)
);


var app = express();
app.use(express.json())
app.use(cors({
  credentials: true,
  origin: ['http://localhost:4200']
}))
app.use(cookieParser())
app.use('/api', routes)

var allowCrossDomain = function (req: any, res: any, next: any) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}
app.use(allowCrossDomain);

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send("Hello world!");
});

var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function closeServer(): void {
  server.close();
}

export { app, server, closeServer, context }