// const fs = require("fs/promises");
// const fileName = "myfile.txt";
// const reader = async (fileName) => {
//   // write code here
// 	// dont change function name
  
// };


// module.exports =  reader ;




const fs = require("fs/promises");
const fileName = "myfile.txt";

const reader = async (fileName) => {
  try {
    // read the content of the file
    const content = await fs.readFile(fileName, "utf-8");
    return content;
  } catch (error) {
    console.error(error);
  }
};

module.exports = reader;
