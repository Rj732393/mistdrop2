const GOOGLE_SCRIPT_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";

function setupProductButtons(){
  document.querySelectorAll("[data-product]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const product = btn.dataset.product;
      const select = document.querySelector('select[name="product"]');
      if(select) select.value = product;
    });
  });
}
function setupForm(formId){
  const form=document.getElementById(formId);
  if(!form) return;
  form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const status=form.querySelector(".form-status");
    const data=Object.fromEntries(new FormData(form).entries());
    data.formType=formId==="enquiryForm" ? "Catalog Enquiry" : "Contact Enquiry";
    data.submittedAt=new Date().toISOString();
    if(GOOGLE_SCRIPT_URL.includes("PASTE_")){
      status.textContent="Demo mode: connect your Google Apps Script Web App URL in script.js to save this enquiry.";
      status.style.color="#b06a00";
      return;
    }
    status.textContent="Submitting…";
    try{
      await fetch(GOOGLE_SCRIPT_URL,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(data)});
      form.reset();
      status.textContent="Thank you! Our team will contact you shortly.";
      status.style.color="#159c63";
    }catch(err){
      status.textContent="Something went wrong. Please contact us directly.";
      status.style.color="#c44343";
    }
  });
}
setupProductButtons();
setupForm("enquiryForm");
setupForm("contactForm");