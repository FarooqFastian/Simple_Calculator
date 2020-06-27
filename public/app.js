function getnum(num) {
    var result = document.getElementById("result");
    result.value += num;
}

function clear_result() {
    var result = document.getElementById("result");
    result.value = '';
}

function calculate_result() {
    var result = document.getElementById("result");
    result.value = eval(result.value);
}