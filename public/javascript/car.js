const img = document.getElementById("input-multi-files");
const preview = document.getElementById("preview");
const from = document.getElementById("from");
const fromSelect = document.getElementById("from");
const brandSelect = document.getElementById("brand");

fromSelect.addEventListener("change", () => {
  brandSelect.innerHTML = "";
  if (fromSelect.value === "국산") {
    brandSelect.innerHTML = `
        <option value="현대">현대</option>
        <option value="제네시스">제네시스</option>
        <option value="기아">기아</option>
        <option value="쉐보레">쉐보레(GM대우)</option>
        <option value="쌍용">쌍용</option>
        <option value="국산기타">기타</option>
        
    `;
  } else if (fromSelect.value === "수입") {
    brandSelect.innerHTML = `
    <option value="벤츠">벤츠</option>
    <option value="아우디">아우디</option>
    <option value="BMW">BMW</option>
    <option value="볼보">볼보</option>
    <option value="폭스바겐">폭스바겐</option>
    <option value="포르쉐">포르쉐</option>
    <option value="수입기타">기타</option>
    `;
  } else {
    brandSelect.innerHTML = `
      <option value="" selected>국산·수입 선택하세요</option>
    `;
  }
});

img.addEventListener("change", () => {
  if (img.value) {
    preview.style.display = "flex";
  }
});
