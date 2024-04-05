import XLSX from "xlsx";

const xlsxPath = "../Employee-Sample-Data.xlsx";

//  if(!getzipdata(zip,binname,true)) throw new Error("Could not find workbook");

const workbook = XLSX.readFile(xlsxPath);
const worksheet = workbook.Sheets["Data"];

const REGEX_ID = /^Ed\{5}$/gi;

const arrEmployee = XLSX.utils.sheet_to_json(worksheet);

console.log(`Total record: ${arrEmployee.length}`);

// console.log(arrEmployee);

// arrEmployee.forEach((employee) => {
//   if (!employee.EEID.match(REGEX_ID)) {
//     console.log(employee);
//   }
// });

console.log("Path file is: " + xlsxPath);

for (const employee of arrEmployee) {
  console.log(employee);
}
