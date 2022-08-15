document.addEventListener("DOMContentLoaded", (e) => {
  console.log("fully loaded");

  // counter container
  const counter = document.querySelector("h1#counter");

  // handle auto increase
  const autoCount = () => {
    counter.innerText++;
  };
  // function
  let countFunction;
  const startTimer = () => (countFunction = setInterval(autoCount, 1000));
  startTimer();

  // pause timer to be passed into pauseCounter function
  const clearTimer = () => clearInterval(countFunction);

  // plus, minus and pause button
  const plusButton = document.querySelector("button#plus");
  const minusButton = document.querySelector("button#minus");
  const pauseButton = document.querySelector("button#pause");
  const commentSection = document.querySelector("div h3");
  const likeButton = document.querySelector("button#heart");
  const submitButton = document.querySelector("button#submit");

  // Form
  const form = document.querySelector("form#comment-form");

  // button event listener callbacks
  const increaseCount = () => (counter.value = counter.innerText++);
  const decreaseCount = () => (counter.value = counter.innerText--);

  // pause/ resume button
  const pauseCounter = () => {
    if (pauseButton.innerText === "pause") {
      clearTimer();
      plusButton.disabled = true;
      minusButton.disabled = true;
      likeButton.disabled = true;
      submitButton.disabled = true;
      pauseButton.innerText = "resume";
    } else {
      startTimer();
      plusButton.disabled = false;
      minusButton.disabled = false;
      likeButton.disabled = false;
      submitButton.disabled = false;
      pauseButton.innerText = "pause";
    }
  };

  let count;
  let arr = [];
  const likesContainer = document.querySelector(".likes");

  // LIKES ISNT WORKING
  const handleLikes = () => {
    let counterContent = counter.textContent;
    if (arr.includes(counterContent)) {
      //   console.log("arr did include: ", counterContent);
      document.getElementById(counterContent).innerText = `${
        counter.textContent
      } has been liked ${(count += 1)} times`;
    } else {
      //   console.log("arr did NOT include: ", counterContent);
      const newLike = document.createElement("li");
      newLike.id = counterContent;
      newLike.innerText =
        counter.textContent + " has been liked " + (count = 1) + " times";
      likesContainer.append(newLike);
    }
    arr.push(counterContent);
  };

  // Handle form
  const handleForm = (e) => {
    e.preventDefault();
    const comment = document.createElement("p");
    const input = document.querySelector("input#comment-input");
    comment.innerText = input.value;
    commentSection.append(comment);
  };

  // event listeners for button
  plusButton.addEventListener("click", increaseCount);
  minusButton.addEventListener("click", decreaseCount);
  likeButton.addEventListener("click", handleLikes); // LIKES ISNT WORKING
  pauseButton.addEventListener("click", pauseCounter);
  form.addEventListener("submit", handleForm);
});
