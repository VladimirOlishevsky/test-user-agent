document.getElementById('myButton').addEventListener('click', function () {
    alert('Button clicked!');
});


function detectUserDevice() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
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

    return null;
}

console.log(detectUserDevice())