function redirectBasedOnDevice() {
    var userAgent = navigator.userAgent;
    if (/huawei/i.test(userAgent)) {
        // return "Huawei";
        window.location.href = "https://appgallery8.huawei.com/#/app/C100847609"
    }
    if (/android/i.test(userAgent)) {
        // return "Android";
        window.location.href = "https://play.google.com/store/apps/details?id=ru.ozon.app.android&amp;hl=ru";
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // return "Apple";
        window.location.href = "https://itunes.apple.com/us/app/id407804998"
    }
    if (/Win32|Win64|Windows|WinCE/.test(userAgent)) {
        // return "Windows";
    }
    if (/Mac/.test(userAgent)) {
        // return "Mac OS";
    }

}
// detectUserDevice();
// const device = detectUserDevice()

// document.getElementById('title').textContent = `Привет! Вы зашли с устройства ${device}`
