const fsPromises = require("fs").promises;
const fs = require("fs");
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf-8"
    );
    console.log(data);
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    //delete
    // await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\nNice to meet you"
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "promiseComplete.txt"),
      "utf-8"
    );
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};
fileOps();

//asynchronous readFile
// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) throw err;
//     console.log("Read Complete");
//   }
// );
// //asynchronous writeFile
// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Welcome Home",
//   (err) => {
//     if (err) throw err;
//     console.log("write successfull");
//   }
// );
// //asynchronous appendFile
// fs.appendFile(
//   path.join(__dirname, "files", "append.txt"),
//   "\nWelcome Home",
//   (err) => {
//     if (err) throw err;
//     console.log("append successfull");
//   }
// );

// //append in callback of writeFile

// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Welcome Home",
//   (err) => {
//     if (err) throw err;
//     console.log("write successfull");
//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "\nWelcome Home",
//       (err) => {
//         if (err) throw err;
//         console.log("append successfull");
//       }
//     );
//   }
// );

// //using promises to avoid call back hell

//exit on uncaught error
process.on("uncaughtException", (err) => {
  console.log(`there is an uncaught exception ${err}`);
  process.exit(1);
});
