let buttons = document.querySelectorAll('.btn1');
buttons.forEach(button => {
  button.addEventListener('click', function() {
    checkFunction(button);
    showAnswer(button);
  });
});

function checkFunction(a) {
  if (a.getAttribute("dcorrect") === "0") {
    a.style.background = "red"
  }
  if (a.getAttribute("dcorrect") === "1") {
    a.style.background = "green"
  }
}

function showAnswer(a) {
  let qname = a.getAttribute("name")
  let buttons1 = document.querySelectorAll('[class="btn1"][name='+qname+']')
  buttons1.forEach(button => {
    if (button.getAttribute("dcorrect") === "1") {
      button.style.background = "green";
    }
    else if (button != a)
    {button.disabled = true; }
  });
}
