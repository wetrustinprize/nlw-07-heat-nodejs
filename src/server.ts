import { serverHTTP } from "./app";

serverHTTP.listen(4000, () => {
  console.log("Server is running on port 4000");
});
