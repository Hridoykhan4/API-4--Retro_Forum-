const handleSpinner = (isLoad) => {
  if (isLoad) {
    document.getElementById("loadSpinner").classList.remove("hidden");
    const contentContainer = document.getElementById("content-container");
    contentContainer.innerHTML = "";
  } else {
    document.getElementById("loadSpinner").classList.add("hidden");
  }
};
