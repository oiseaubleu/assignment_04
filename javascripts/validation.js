function emailValidationNew() {
  const validationError = document.getElementById("validation_error");
  const validationFormColor = document.getElementById("email_confirm");
  const form = document.getElementById("form");
  form.addEventListener("input", (e) => {
    //inputされたときのイベント
    if (form.email.value !== form.email_confirm.value) {
      validationError.classList.remove("alert_nondisplay");
      validationFormColor.classList.add("alert_form");
    } else {
      validationError.classList.add("alert_nondisplay");
      validationFormColor.classList.remove("alert_form");
    }
  });
}

window.onload = emailValidationNew;
