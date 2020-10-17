const contactLink = document.querySelector(".contact-button");
const contactPopup = document.querySelector(".modal-contact");
const contactClose = contactPopup.querySelector(".modal-close");
const contactForm = contactPopup.querySelector(".contact-form");
const contactName = contactPopup.querySelector(".contact-name-user");
const contactMail = contactPopup.querySelector(".contact-mail-user");
const contactText = contactPopup.querySelector(".contact-text-user");

const isStorageSupport = true;
const storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {

}

contactLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.add("modal-show");
  if (storage) {
    contactName.value = storage;
    contactMail.value = storage;
    contactText.focus();
  } else {
    contactName.focus();
  }
});

contactClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.remove("modal-show");
  contactPopup.classList.remove("modal-error");
});

contactForm.addEventListener("submit", function (evt) {
  if (!contactName.value || !contactMail.value || !contactText.value) {
    evt.preventDefault();
    contactPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name-user", contactName.value);
      localStorage.setItem("mail", contactMail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key == "Escape") {
    if (contactPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contactPopup.classList.remove("modal-show");
      contactPopup.offsetWidth = contactPopup.offsetWidth;
      contactPopup.classList.remove("modal-error");
    }
  }
});
