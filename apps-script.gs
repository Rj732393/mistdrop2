/*
  MIST DROP — Google Apps Script backend
  1) Create a Google Sheet and add a sheet named "Leads".
  2) In Extensions → Apps Script, paste this file.
  3) Replace SHEET_ID below with your spreadsheet ID.
  4) Deploy → New deployment → Web app.
     Execute as: Me
     Who has access: Anyone
  5) Copy the Web App URL into script.js.
*/
const SHEET_ID = "PASTE_YOUR_GOOGLE_SHEET_ID_HERE";
const SHEET_NAME = "Leads";

function doPost(e) {
  const data = JSON.parse(e.postData.contents || "{}");
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

  const headers = [
    "Timestamp","Form Type","Name","Business Name","Business Type",
    "Phone","Email","Bottle Type","Quantity","City","Message"
  ];
  if (sheet.getLastRow() === 0) sheet.appendRow(headers);

  sheet.appendRow([
    new Date(),
    data.formType || "",
    data.name || "",
    data.businessName || "",
    data.businessType || "",
    data.phone || "",
    data.email || "",
    data.product || "",
    data.quantity || "",
    data.city || "",
    data.message || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({success:true}))
    .setMimeType(ContentService.MimeType.JSON);
}