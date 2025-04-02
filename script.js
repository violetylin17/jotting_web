// 網頁跳轉函式
function navigate(page) {
    document.body.style.opacity = "0"; // 加入漸變效果
    setTimeout(() => {
        window.location.href = page;
    }, 500); // 延遲 0.5 秒後跳轉
}

// 當頁面加載時，使其淡入
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "1";
});
