// bgm.js - 參參玖工作室背景音樂
window.addEventListener('DOMContentLoaded', () => {
  // 建立 YouTube iframe
  const iframe = document.createElement('iframe');
  iframe.width = 0;     // 隱藏影片
  iframe.height = 0;
  iframe.src = "https://www.youtube.com/embed/Zpw_EQIb7as?autoplay=1&mute=1&loop=1&playlist=Zpw_EQIb7as";
  iframe.frameBorder = "0";
  iframe.allow = "autoplay; encrypted-media";
  document.body.appendChild(iframe);

  // 使用者點擊任何地方 → 解除靜音
  document.addEventListener('click', () => {
    iframe.src = "https://www.youtube.com/embed/Zpw_EQIb7as?autoplay=1&mute=0&loop=1&playlist=Zpw_EQIb7as";
  });
});
