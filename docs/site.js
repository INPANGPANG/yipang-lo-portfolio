document.addEventListener("DOMContentLoaded", () => {
  const portraitStyles = document.createElement("style");
  portraitStyles.textContent = `
    @media (width > 850px) {
      .portrait {
        align-self: center;
        justify-self: center;
        width: min(430px, 78%);
        margin: 100px 4vw 55px 2vw;
      }
      .portrait img { height: 500px; }
    }
    @media (width <= 850px) {
      .portrait {
        width: min(420px, 78vw);
        margin: 30px auto 80px;
      }
      .portrait img { height: 480px; }
    }
    @media (width <= 520px) {
      .portrait { width: 76vw; }
      .portrait img { height: 390px; }
    }
  `;
  document.head.append(portraitStyles);

  const rows = [...document.querySelectorAll(".atlas-row")];
  const query = document.querySelector(".atlas-search input");
  const selects = [...document.querySelectorAll(".atlas-controls select")];
  const count = document.querySelector(".atlas-count b");

  const filterPublications = () => {
    const needle = query.value.trim().toLowerCase();
    const selectedYear = selects[0].value;
    const selectedTopic = selects[1].value;
    let visible = 0;
    rows.forEach((row) => {
      const year = row.querySelector(".atlas-year")?.textContent.trim();
      const topic = row.querySelector(".atlas-tags span")?.textContent.trim();
      const matches = (!needle || row.textContent.toLowerCase().includes(needle))
        && (selectedYear === "全部" || year === selectedYear)
        && (selectedTopic === "全部" || topic === selectedTopic);
      row.hidden = !matches;
      if (matches) visible += 1;
    });
    count.textContent = String(visible);
  };

  query?.addEventListener("input", filterPublications);
  selects.forEach((select) => select.addEventListener("change", filterPublications));

  const form = document.querySelector(".contact-form");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const subject = form.querySelector('input:not([type="file"])').value;
    const message = form.querySelector("textarea").value;
    const file = form.querySelector('input[type="file"]').files?.[0]?.name;
    const note = file ? `\n\n附件：${file}（請於郵件視窗中手動附加）` : "";
    window.location.href = `mailto:winfly1017@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message + note)}`;
    let status = form.querySelector(".mail-note");
    if (!status) {
      status = document.createElement("p");
      status.className = "mail-note";
      status.setAttribute("role", "status");
      form.append(status);
    }
    status.textContent = "郵件視窗已開啟；若有選擇附件，請記得手動附加。";
  });
});
