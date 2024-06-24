# TASKS API - NEXT.JS v14

## Development
Steps to start the application in development


1. start database in docker
```
docker compose up -d
```

2. rename the file ``.env.template`` to ``.env``

3. replace environment variables

4. install and configure prisma
```
npx prisma init
```
5. Create the model and then execute the following commands
```
npx prisma migrate dev
```
```
npx prisma generate
```




