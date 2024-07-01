import app from "./app";
import { testFun1, testFun, PI1, PI } from "nodejs-ts-rcc";
const port = process.env.PORT || 3001;
const asdf = testFun1(11, 2);
console.log("PI=>", PI1, asdf);
import { rsa } from "aes-encryption-module";

// console.log(rsa.generateRSAKeyPair());
// console.log("coming form inner files=>", PI, testFun(11, 2000));
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
