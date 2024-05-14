document.getElementById('myButton').addEventListener('click', function () {
    console.log('Button clicked!');
});


function detectUserDevice() {

    let value = "";
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/huawei/i.test(userAgent)) {
        value = "Huawei";
    }
    if (/android/i.test(userAgent)) {
        value = "Android";
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        value = "Apple";
    }
    if (/Win32|Win64|Windows|WinCE/.test(userAgent)) {
        value = "Windows";
    }
    if (/Mac/.test(userAgent)) {
        value = "Mac OS";
    }

    document.getElementById('title').textContent = `Привет пользователь ${value}`
}

detectUserDevice()