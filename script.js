const selectFavicon = document.querySelector(`head > link[rel='icon']`);
const buttons = document.querySelectorAll(`.grid > button`);
const selectCode = document.querySelector(`body > code`);

function updateCode() {
  selectCode.innerText = selectFavicon.getAttribute(`href`);
}

function generateFavicon(string, icon) {
  return `
      <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
        <text y=%22.9em%22 font-size=%2290%22>
          ${icon}
        </text>
      </svg>
    `.trim();
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    newFavicon = generateFavicon`${button.innerText}`;
    selectFavicon.setAttribute(`href`, `data:image/svg+xml,${newFavicon}`);
    updateCode();
  });
});

updateCode();
