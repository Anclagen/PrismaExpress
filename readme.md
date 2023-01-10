# Prisma Express and PostgreSQL

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

Testings

Jest

Swagger generation:

https://www.npmjs.com/package/swagger-jsdoc

### Probably wanted

- image validator
- url validator
