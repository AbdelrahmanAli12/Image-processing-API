
# Image processing API

This project is about processing images to web by using npm sharp
library by getting the filename from the assets file and the width
and height for the output Image
## Access the webapp for an example 
http://localhost:3030/api/images?filename=[name of the picture in full folder]&width=[the width]&height=[the height]
http://localhost:3030/api/images?filename=lion&width=500&height=500

### if the file does not exist will give 404 not found and if the width and height should be a number otherwise will give 400 bad request

## Running Tests

To run tests, run the following command that will run two tests,one to check the server is connecting and the other one to check that the endpoint is giving status code 200

```bash
  npm run test
```
by using npm jasmine library and supertest there is a spec which tests the api when it succeeds 

To start the server use 
```bash
  npm run start
```

To run prettier

```bash
  npm run prettier 
```

To run lint
```bash
npm run lint
```



## Authors

- [@Abdelrahman Ali](https://www.github.com/AbdelrahmanAli12)

