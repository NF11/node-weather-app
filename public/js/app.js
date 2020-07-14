const form = document.querySelector("form");
const research = document.querySelector("input");
const message_1 = document.querySelector("#message-1");
const message_2 = document.querySelector("#message-2");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = research.value;
  message_1.textContent = "loading ...";
  message_2.textContent = "";
  fetch("http://localhost:3000/weather?address=" + value).then((response) => {
    response.json().then((data) => {
      if (data.errorMessage) {
        return (message_1.textContent = data.errorMessage);
      }
      message_1.textContent = "The temperature for " + data.location;
      message_2.textContent = "is " + data.temp;
    });
  });
});
