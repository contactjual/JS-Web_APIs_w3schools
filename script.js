
function validation() {
    const getInput = document.getElementById('inp1');
    const p1 = document.getElementById('p1');

    // coustom message 
    if (getInput.validity.rangeOverflow) {
        getInput.setCustomValidity("You have made range overflow")
    }
    else if (getInput.validity.rangeUnderflow) {
        getInput.setCustomValidity("You have made range underflow")
    }
    else if (getInput.validity.typeMismatch) {
        getInput.setCustomValidity("You have made typeMismatch")
    }

    // default message 
    if (!getInput.checkValidity()) {
        p1.innerHTML = getInput.validationMessage
    }
}






// Web History API

function plzGo(n) {
    window.history.go(n);
}
function plzBack() {
    window.history.back();
}
function plzForward() {
    window.history.forward();
}
function savedHis() {
    alert(window.history.length);
}






// Web Storage API: localStorage and sessonStorage(stay data untill closed the running browser)

function setLocalStorage (key, value) {
    localStorage.setItem(key, value);
}
function getLocalStorage(key) {
    alert(localStorage.getItem(key));
}
function removeLocalStorage (keyName) {
    localStorage.removeItem(keyName);
}