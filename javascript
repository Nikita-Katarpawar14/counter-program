
let count = 0;

const countLabel = document.getElementById("countLabel");
const decreaseBtn = document.getElementById("decreseBtn");
const increaseBtn = document.getElementById("increseBtn");
const resetBtn = document.getElementById("resetBtn");

decreaseBtn.onmousedown = () => {
    interval = setInterval(()=>{
    count--;
    updateDisplay();
    },100);//every 100ms
};

increaseBtn.onclick = () => {
    interval = setInterval(() => {
    count++;
    updateDisplay();
    },100);
};

increaseBtn.onmouseup = () => clearInterval(interval);


resetBtn.onclick = () => {
    clearInterval(interval);
    count = 0;
    interval = null;
    updateDisplay();
};


stopBtn.onclick = () => {
  clearInterval(interval);
  interval = null; // reset interval reference
};

function updateDisplay() {
    countLabel.textContent = count;
    if (count > 0) {
        countLabel.style.color = "#2ecc71";
    } else if (count < 0) {
        countLabel.style.color = "#e74c3c";
    } else {
        countLabel.style.color = "#333";
    }
}
