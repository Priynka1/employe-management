const btn = document.getElementById("addEmployebtn");
const names = document.querySelector(".nameInput");
const email = document.querySelector(".emailInput");
const phone = document.querySelector(".phoneInput");
const job = document.querySelector(".jobInput");

btn.addEventListener("click", () => {
  const nameData = names.value;
  names.value = "";
  console.log(nameData);

  const emailData = email.value;
  email.value = "";
  console.log(emailData);
  const phoneData = phone.value;
  phone.value = "";
  console.log(phoneData);
  const jobData = job.value;
  job.value = "";
  console.log(jobData);

  // alert//
  if (
    nameData === "" ||
    emailData === "" ||
    phoneData === "" ||
    jobData === ""
  ) {
    alert("please fill the form");
    return;
  }

  //  li create//
  const li = document.createElement("li");
  document.querySelector("#addlist").appendChild(li);
  li.innerHTML = `Name -${nameData}, Email -${emailData},Phone -${phoneData}, Job -${jobData}`;

  //remove button//
  const removebtn = document.createElement("button");
  removebtn.textContent = "Remove";
  removebtn.className = "remove-btn";
  removebtn.addEventListener("click", () => {
    li.remove();
  });
  li.appendChild(removebtn);
});
