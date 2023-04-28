const img = document.getElementById('input-multi-files');
const preview = document.getElementById('preview');
const from = document.getElementById('from');
const fromSelect = document.getElementById("from");
const brandSelect = document.getElementById("brand");

fromSelect.addEventListener("change", () => {
  brandSelect.innerHTML = "";
  if (fromSelect.value === "국산") {
    brandSelect.innerHTML = `
        <option value="" selected>---</option>
        <option value="현대">현대</option>
        <option value="기아">기아</option>
        <option value="쉐보레">쉐보레</option>
        <option value="쌍용">쌍용</option>
    `;
  } else if (fromSelect.value === "수입") {
    brandSelect.innerHTML = `
        <option value="" selected>---</option>
        <option value="벤츠">벤츠</option>
        <option value="BMW">BMW</option>
        <option value="아우디">아우디</option>
        <option value="포르쉐">포르쉐</option>
    `;
  }
});

img.addEventListener('change', () => {
    if(img.value){
        preview.style.display = "flex";
    }
});