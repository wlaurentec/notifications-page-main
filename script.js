const markAll = document.querySelector("#mark-all");
const numberElement = document.querySelector("#number");
const posts = document.querySelectorAll(".post");

posts.forEach((element) => {
  element.addEventListener("click", () => {
    element.querySelector(".not-read").classList.remove("not-read");
    updateNotifications();
  });
});

markAll.addEventListener("click", () => {
  const notRead = document.querySelectorAll(".not-read");
  notRead.forEach((element) => {
    element.classList.remove("not-read");
  });

  updateNotifications();
});

const updateNotifications = () => {
  const notRead = document.querySelectorAll(".not-read");
  numberElement.innerText = notRead.length;
};
