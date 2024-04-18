import { useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {

    // ilk açılışta localstorage verisini okuyoruz

    const localVal = JSON.parse(localStorage.getItem(key));
    if (localVal === null) {

      // boşsa default değeri, localStorage'a yönlendirip değeri dönüyoruz

      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    } else {

      // localstorage boş değil ise defaultValue değerini dönüyoruz

      return localVal;
    }
  });

  // value değiştiğinde localstorage'a yazıyoruz ve yeni değeri dönüyoruz

  const setLocalStorage = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, setLocalStorage];
}
