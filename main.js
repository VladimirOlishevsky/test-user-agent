function detectUserDevice() {
    var userAgent = navigator.userAgent;
    if (/huawei/i.test(userAgent)) {
        return "Huawei";
    }
    if (/android/i.test(userAgent)) {
        return "Android";
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "Apple";
    }
    if (/Win32|Win64|Windows|WinCE/.test(userAgent)) {
        return "Windows";
    }
    if (/Mac/.test(userAgent)) {
        return "Mac OS";
    }

}
const device = detectUserDevice()

document.getElementById('title').textContent = `Привет! Вы зашли с устройства ${device}`
