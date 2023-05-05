document.getElementById("btn").addEventListener("click", btnclicked);
function btnclicked() {
  let correct = 0;
  let ans1 = document.getElementById("question1").value.toLowerCase();
  let ans2 = document.getElementById("question2").value.toLowerCase();
  let ans3 = document.getElementById("question3").value.toLowerCase();
  let ans4 = document.getElementById("question4").value.toLowerCase();

  if (ans1 === "4") {
    correct = correct + 1;
  }
  if (ans2 === "2") {
    correct = correct + 1;
  }
  if (ans3 === "3") {
    correct = correct + 1;
  }
  if (ans4 === "1946") {
    correct = correct + 1;
  }

  if (correct === 4) {
    document.getElementById("output").innerHTML = `<p>4/4 (100%) Nice!</p>`;
  } else if (correct === 3) {
    document.getElementById("output").innerHTML = `<p>3/4 (75%) Alright!</p>`;
  } else if (correct === 2) {
    document.getElementById("output").innerHTML = `<p>2/4 (50%) Do better</p>`;
  } else if (correct === 1) {
    document.getElementById(
      "output"
    ).innerHTML = `<p>1/4 (25%) You failed buddy!</p>`;
  } else if (correct === 0) {
    document.getElementById(
      "output"
    ).innerHTML = `<p>0/4 (0%) Just quit at this point!</p>`;
  }

  if (ans1 != "4") {
    document.getElementById(
      "output1"
    ).innerHTML = `<p>How many quarters are there in basketball</p>`;
  }
  if (ans2 != "2") {
    document.getElementById(
      "output2"
    ).innerHTML = `<p>How many points is a layup worth</p>`;
  }

  if (ans3 != "3") {
    document.getElementById(
      "output3"
    ).innerHTML = `<p>How many points is a three worth (this is easy)</p>`;
  }
  if (ans4 != "1946") {
    document.getElementById(
      "output4"
    ).innerHTML = `<p>How many points is a layup worth</p>`;
  }
}
