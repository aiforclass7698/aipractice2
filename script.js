// 抓取按鈕與訊息區塊
const button = document.getElementById("thanksButton");
const message = document.getElementById("message");

// 綁定點擊事件
button.addEventListener("click", () => {
  message.textContent = "💬 謝謝瀏覽我的名片！";
  message.style.color = "#00ffff";
  message.style.fontSize = "1.2rem";
  message.style.marginTop = "20px";
  message.style.textShadow = "0 0 10px #00ffff, 0 0 20px #00ffff";
});

/* === 霓虹滑鼠軌跡 === */
(() => {
  let last = 0;                 // 節流，避免生成過多元素
  const gap = 16;               // 生成間隔（毫秒），數字越小越密

  window.addEventListener("mousemove", (e) => {
    const now = performance.now();
    if (now - last < gap) return;
    last = now;

    const dot = document.createElement("span");
    dot.className = "trail";
    dot.style.left = e.clientX + "px";
    dot.style.top  = e.clientY + "px";

    // 隨機微量大小/旋轉，讓效果更自然
    const s = 0.9 + Math.random() * 0.6;
    dot.style.transform = `translate(-50%, -50%) scale(${s}) rotate(${Math.random()*30-15}deg)`;

    document.body.appendChild(dot);
    // 動畫結束後移除，避免累積
    setTimeout(() => dot.remove(), 650);
  }, { passive: true });
})();
