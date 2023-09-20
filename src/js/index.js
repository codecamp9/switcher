/*? no js js needed from me */
const inputHobi = document.getElementById("inputHobi");
const hobi = document.getElementById("hobi");
const from = document.getElementById("from");
const to = document.getElementById("to");
const error = document.getElementById("error");

let kumpulanHobi = [];

const tambahHobi = () => {
  let _hobi = inputHobi.value;

  kumpulanHobi.push(_hobi);

  inputHobi.value = "";

  hobi.innerHTML = kumpulanHobi;
};

const masukan = (listen) => {
  if (listen.key == "Enter") {
    return tambahHobi();
  }
};

const isValid = (from, to) => {
  if (from <= 0 || to <= 0 || from > kumpulanHobi.length || to > kumpulanHobi.length) {
    return false;
  } else {
    return true;
  }
};

const tukarHobi = () => {
  const _from = from.value;
  const _to = to.value;

  const valid = isValid(_from, _to);

  if (valid) {
    const temp = kumpulanHobi[_from - 1];
    kumpulanHobi[_from - 1] = kumpulanHobi[_to - 1];
    kumpulanHobi[_to - 1] = temp;
    hobi.innerHTML = kumpulanHobi;
  } else {
    error.innerHTML = "Masukkan angka yang benar!!!";
  }
};

document.addEventListener("keydown", masukan);
