## Google auth token authentication in nestjs (Test)

Using [Google Playground](https://developers.google.com/oauthplayground/) obtain JWT token


## Use below command to get user detail with above google auth token

curl http://localhost:3000/user/profile  -H "Authorization: Bearer JWT”

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


