document.addEventListener("DOMContentLoaded", function () {
  const flags = {
    DE: "/fileadmin/11417/flags/de-at.svg",
    EN: "/fileadmin/11417/flags/en.svg",
    IT: "/fileadmin/11417/flags/it.svg",
    HU: "/fileadmin/11417/flags/hu.svg",
    RU: "/fileadmin/11417/flags/ru.svg",
    NL: "/fileadmin/11417/flags/nl.svg"
  };

  document.querySelectorAll(".langSwitch .language").forEach(el => {
    const code = el.textContent.trim().toUpperCase();
    if (flags[code]) {
      el.innerHTML = `<img src="${flags[code]}" alt="${code}" style="width:24px; height:16px; display:inline-block;">`;
    }
  });

  console.log("✅ Sprach-Flaggen-Script aktiv.");
});
