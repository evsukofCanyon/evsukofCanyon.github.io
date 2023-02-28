function addDivTags() {
  // create the bold font style tag
  const boldTag = document.createElement("b");
  boldTag.innerText = "Testing ignore_referrer and referrer overwrite";
  
  // create the first div tag
  const div1 = document.createElement("div");
  div1.innerHTML = 'Simulating referral traffic to the <a href="https://dev.canyon.com/en-de/blog-content/pr/top-employer-award-germany/b17012023.html" target="_blank">https://dev.canyon.com/en-de/blog-content/pr/top-employer-award-germany/b17012023.html</a>';
  
  // create the second div tag
  const div2 = document.createElement("div");
  div2.innerHTML = 'Simulating referral traffic to the <a href="https://dev.canyon.com/en-de/blog-content/mountain-bike-news/mountain-bike-tyre-pressure/b16012023.html" target="_blank">https://dev.canyon.com/en-de/blog-content/mountain-bike-news/mountain-bike-tyre-pressure/b16012023.html</a>';
  
  // get the body element
  const body = document.getElementsByTagName("body")[0];
  
  // append the bold tag, div tags, and an empty line to the body
  body.appendChild(boldTag);
  body.appendChild(document.createElement("br"));
  body.appendChild(div1);
  body.appendChild(div2);
  body.appendChild(document.createElement("br"));
  
  // add an input for a link and a button to the body
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  body.appendChild(input);
  
  const button = document.createElement("button");
  button.innerText = "Click me";
  button.onclick = function() {
    window.location.href = input.value;
  };
  body.appendChild(button);
}
