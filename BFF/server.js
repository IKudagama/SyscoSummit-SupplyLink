const app = require('./app');
const port = 3000;

app.listen(port, () => {
    console.log(`BFF server listening at http://localhost:${port}`);
  });
//const { port } = require('./src/config/config');




