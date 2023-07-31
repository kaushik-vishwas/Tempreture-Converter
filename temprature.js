const calculateTemp = () => {
  const temp_value = document.getElementById("temp_value").value;
  const temp_unit = document.getElementById("temp_unit");
  const unit = temp_unit.options[temp_unit.selectedIndex].value;

  if (temp_value === "") {
    document.getElementById("resultContainer").innerHTML = "Enter a number";
    return; // Exit the function if the input is empty
  }

  const celToFah = (cel) => {
    let fahrenheit = (cel * 9) / 5 + 32;
    return fahrenheit;
  };

  const fahToCel = (fahr) => {
    let celsius = ((fahr - 32) * 5) / 9;
    return celsius;
  };

  let result;
  if (unit == "cel") {
    result = celToFah(temp_value);
    document.getElementById(
      "resultContainer"
    ).innerHTML = `${result} Fahrenheit`;
  } else {
    result = fahToCel(temp_value);
    document.getElementById("resultContainer").innerHTML = `${result} Celsius`;
  }
};
// Thermameter Animation Goes Here

const Load = () => {
  const battery = document.getElementById("battery");
  battery.innerHTML = "&#xf2cb";
  battery.style.color = "black";

  setTimeout(() => {
    battery.innerHTML = "&#xf2ca";
    battery.style.color = "red";
  }, 1000);
  setTimeout(() => {
    battery.innerHTML = "&#xf2c9";
    battery.style.color = "#8B8000";
  }, 2000);
  setTimeout(() => {
    battery.innerHTML = "&#xf2c8";
    battery.style.color = "green";
  }, 3000);
  setTimeout(() => {
    battery.innerHTML = "&#xf2c7";
    battery.style.color = "blue";
  }, 4000);
};
Load();
setInterval(Load, 5000);
