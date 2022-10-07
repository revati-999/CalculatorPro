const out = document.querySelector(".out");
const ans = document.querySelector(".ans");

const keys = document.querySelectorAll("button");

//evebtListening

keys.forEach(key=>{
    key.addEventListener("click",calculation);
});

function calculation(){
  let butText = this.innerText;
  if(butText ==="AC"){
    out.innerText = "";
    ans.innerText = "";
    return;
  }

  if(butText === "DEL"){
    out.textContent = out.textContent.substr(0,out.textContent.length-1);
    return;
  }

  if(butText ==="="){
      ans.innerText = eval(out.innerText);
  }

 else{
    out.textContent += butText;
    return;
 }
}

