# Prisma Express and PostgreSQL

## install

clone the repo in your desired manner.

install dependencies

```
npm i
```

you need a to configure a postgresql database and update the .env with the database url and port number like the example file.

```
DATABASE_URL="postgresql://username:password@databaseUrl:Port/databaseName?schema=schema"
PORT=NUMBER
```

create the database tables with these

```
npx prisma migrate dev --name init

npx prisma generate
```

Then start the server with nodemon using

```
npm run watch
```

Using postman or similar program for creating requests add your url Base url is probably `http://localhost:PORT/` or `http://127.0.0.1:PORT/`

The `/applications` `/listings` `/offers` endpoints return a message, `/users` get returns an array of users in your db and post requires you to add a content type of json and a raw json body with setup like so.

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "something@something.com",
  "password": "password"
}
```

## Useful Links, guides, documentation

Expres docs: https://expressjs.com/

Express-Prisma setup: https://dev.to/dawsoncodes/building-a-rest-api-with-prisma-and-expressjs-1oj

Express guide: https://www.youtube.com/watch?v=SccSCuHhOw0&t

Prisma docs: https://www.prisma.io/docs

Prisma JS setup examples: https://github.com/prisma/prisma-examples/tree/latest/javascript

Prisma model guide: https://www.youtube.com/watch?v=RebA5J-rlwg

How to create multiple routes in the same express.js server ? https://www.geeksforgeeks.org/how-to-create-multiple-routes-in-the-same-express-js-server/

## example setups

https://github.com/prisma/prisma-examples/tree/latest/javascript

https://github.com/prisma/prisma-examples/tree/latest/javascript/rest-express

## database

https://www.postgresql.org/

https://www.prisma.io/docs/concepts/database-connectors/postgresql

https://www.postgresqltutorial.com/postgresql-getting-started/connect-to-postgresql-database/

npx prisma migrate dev --name init

npx prisma generate

## dependencies considerations

### Formatters

Prettier: https://www.npmjs.com/package/prettier

EsLint: https://www.npmjs.com/package/eslint

### dev tools

Refreshes server as changes are made locally:
https://www.npmjs.com/package/nodemon

### required

Express

Prisma (@prisma/client)

### project utilites

body parser weed out incorrect body requests before checking with server:

http://expressjs.com/en/resources/middleware/body-parser.html

Password hashing and salting:

https://www.npmjs.com/package/bcrypt

Webtoken handling for logged in users:

https://www.npmjs.com/package/jsonwebtoken

Swagger generation:

https://www.npmjs.com/package/swagger-jsdoc

### Probably wanted

- image validator
- url validator
