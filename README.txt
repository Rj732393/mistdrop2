MIST DROP — WEBSITE STARTER
=============================

Included:
- index.html      → Home page
- catalog.html    → Product catalog + B2B enquiry form
- contact.html    → Contact page + contact form
- styles.css      → Premium responsive blue/water design
- script.js       → Form handling + Google Apps Script connection
- apps-script.gs  → Google Sheet backend
- README.txt      → Setup notes

GOOGLE SHEET SETUP
------------------
1. Create a Google Sheet.
2. Open Extensions → Apps Script.
3. Paste apps-script.gs.
4. Put your Spreadsheet ID into SHEET_ID.
5. Deploy as Web app:
   Execute as: Me
   Who has access: Anyone
6. Copy the Web App URL.
7. Open script.js and replace:
   PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE
   with the URL.
8. The first submission will create a "Leads" sheet if needed.

IMPORTANT BRAND DETAILS TO REPLACE
----------------------------------
- +91 XXXXX XXXXX → actual business phone
- hello@mistdrop.in → actual email
- Address to be added → actual business address
- Instagram/Facebook # links → actual profiles
- WhatsApp href → actual WhatsApp link
- Google Maps embed → add after address is confirmed

DESIGN
------
The bottle visuals are lightweight CSS mockups so the site loads fast.
You can later replace them with actual Mist Drop bottle/product photos.

Suggested live domain:
mistdrop.in or mistdropwater.in (availability should be checked separately).
