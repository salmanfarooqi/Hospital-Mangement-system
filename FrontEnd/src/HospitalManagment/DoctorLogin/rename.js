const fs = require("fs");
const path = require("path");

const directoryPath =
  "E:/Documents/My Study Related/Programming/Web development/MERN Stack/Hospital Mangement System/FrontEnd/src/HospitalManagment/DoctorLogin";
// Update with your folder path
const fileExtension = ".jsx"; // Update with the desired file extension
const searchString = 'props.data("Doctor");'; // Update with the string to replace
const replaceString = ""; // Update with the replacement string

// Recursive function to search and replace the string in files
function searchAndReplaceFiles(dirPath) {
  fs.readdirSync(dirPath).forEach((file) => {
    const filePath = path.join(dirPath, file);

    if (fs.statSync(filePath).isDirectory()) {
      searchAndReplaceFiles(filePath); // Recursively call for subdirectories
    } else if (path.extname(filePath) === fileExtension) {
      // Process files with the specified extension
      let fileContent = fs.readFileSync(filePath, "utf8");
      fileContent = fileContent.replace(
        new RegExp(searchString, "g"),
        replaceString
      );
      fs.writeFileSync(filePath, fileContent, "utf8");
      console.log(`Updated file: ${filePath}`);
    }
  });
}

// Start searching and replacing in the specified directory
searchAndReplaceFiles(directoryPath);
