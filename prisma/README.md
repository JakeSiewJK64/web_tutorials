
# What is Prisma?

Prisma is an ORM (Object Relational Mapping) for Node.js which allows you to map objects to database entities. You can do database migrations and it ships with its own GUI to view your database.

Tutorial: https://youtu.be/mU8-nKwfw4Y

  

### Initializing Node Environment

  

```bash

npm init -y

```

  

### Install Prisma Package

  

```bash

npm i prisma --save-dev

```

  

### Initialize prisma project

  

```bash

npx prisma init

```

  

### Creating an Object

```json

// define table

model Users {

id  Int  @id  @unique  @default(autoincrement())

username  String  @unique  @db.VarChar(255)

  

@@map(name: "user")

}

```

  **note: the @@map(name: ""user) is basically mapping to the real database name. in the context of Prisma, the object name is Users.

### Database Migration

```bash

npx prisma migrate dev --name myCustomMigration

```

  

### Introspection

  

### What does Introspection do?

  

go into database

  

read all database and columns

  

got change? applies the changes

  

### When do we use this?

  

we use this when the database is more up to date than our prisma object.

  

### Old Command:

  

```bash

npx prisma introspect --force

```

  

### New Command:

```bash

npx prisma db pull

```

  

### Deleting a model/table

  

to delete a table/model, simply just remove the model definition from the `schema.prism` file and run the migration command.

  

### Table Relationships
to setup relationships using foreign keys, we can add a field that we want to reference in the 2nd table:

```bash
model post {
  id        Int      @id @unique @default(autoincrement())
  title     String   @db.VarChar(255)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  userid    Int
  user      user     @relation(fields: [userid], references: [id])

  @@map("posts")
}

```

here, the `userid` is the field we want to link to user table. we also need to add the `user user @relation(fields: [userid], references: [id])`

in the user table:

```bash
model user {
  id       Int     @id @unique @default(autoincrement())
  username String  @unique @db.VarChar(255)
  gender   String? @db.Char(1)
  post     post[]

  @@map("users")
}

```

**Note: we make post field as an array because it is a 1:many relationship between user (1) → post (M).


### Prisma Data Studio

  

```bash

npx prisma studio

```

  

**Note: usually hosts on port 5555

  

### Things to take note when creating routes:

  

1. must have `async/await`.

2. like so `async (req, res) => { ... }` without `(req, res)` the request cannot pass into backend.

3. export the router like this: `module.exports = router;`.