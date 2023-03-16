# sapms-service-ts-express-sequelize
- npm install -g sequelize-cli
- 
- npx sequelize-cli db:seed --seed database/seeders/course-seed.ts





#### seeder
###### Seed all
npx sequelize-cli db:seed:all
###### Seed undo all
npx sequelize-cli db:seed:undo:all


# routes

## user
<!-- /users/register/ -->
```js
/users/login/
/users/get_one/
```
-  admin
 ```js 
/users/get_all/
/users/create/
/users/update/
/users/delete/
```
## course
- user & admin
```js
/courses/get_one/
/courses/get_all/
/courses/create/
/courses/update/
/courses/delete/
```

## admission plan

- user & admin


```js
/admission_plans/get_one/
/admission_plans/get_all/
/admission_plans/create/
/admission_plans/update/
/admission_plans/delete/
```

```bash
- npm install swagger-ui-express swagger-jsdoc @types/swagger-ui-express @types/swagger-jsdoc


- npm run build   // compile TypeScript to JavaScript
- npm run pack    // create a deployable package
- npm start       // run the compiled application
```

### migration template file to initial table
```js
_0_create-initial-schema-user.js
_1_create-initial-schema-course.js
_2_create-initial-schema-admission-plan.js
_3_create-initial-schema-extra-admission-plan.js
_4_create-initial-schema-responsible-quota-person.js
```

### run new migraion file with time stamp
```js
npx sequelize-cli migration:generate --name create-users
npx sequelize-cli migration:generate --name create-course
npx sequelize-cli migration:generate --name create-admission-plan
npx sequelize-cli migration:generate --name create-extra-admission-plan
npx sequelize-cli migration:generate --name create-responsible-quota-person
```


#### Sequelize.literal('uuid_generate_v4()') for postgresql
####  for mysql is Sequelize.UUID,

### then migrate 

```js
npx sequelize-cli db:migrate
- npm install swagger-ui-express swagger-jsdoc @types/swagger-ui-express @types/swagger-jsdoc
```



