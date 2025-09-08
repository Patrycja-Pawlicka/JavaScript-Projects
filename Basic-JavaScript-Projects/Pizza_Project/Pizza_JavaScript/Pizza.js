// Price table (GBP)
const SIZE_PRICE = {
  "Small Pizza": 10,
  "Medium Pizza": 12,
  "Large Pizza": 15,
  "Extra Large Pizza": 18
};
const MEAT_EXTRA = 1.50;  // after first meat
const VEG_EXTRA  = 1.00;  // after first veg

// Build receipt and render it below the menu
function getReceipt() {
  // Get chosen size
  const size = getCheckedValue(".size");
  if (!size) {
    renderReceipt("Please choose a pizza size.", 0);
    return;
  }

  // Get meat + veg arrays
  const meats = getCheckedValues(".meat");
  const vegs  = getCheckedValues(".veg");

  // Base price for size
  let total = SIZE_PRICE[size] || 0;

  // Meat pricing: first free, rest cost
  const meatCount = meats.length;
  if (meatCount > 1) total += (meatCount - 1) * MEAT_EXTRA;

  // Veg pricing: first free, rest cost
  const vegCount = vegs.length;
  if (vegCount > 1) total += (vegCount - 1) * VEG_EXTRA;

  // Build receipt lines
  const lines = [];
  lines.push(size);
  if (meats.length) lines.push(...meats);
  if (vegs.length)  lines.push(...vegs);

  renderReceipt(lines.join("\n"), total);
}

// Helpers: read radio/checkbox selections
function getCheckedValue(selector) {
  const inputs = document.querySelectorAll(selector);
  for (const el of inputs) if (el.checked) return el.value;
  return null;
}
function getCheckedValues(selector) {
  return Array.from(document.querySelectorAll(selector))
    .filter(el => el.checked)
    .map(el => el.value);
}

// Render the receipt area
function renderReceipt(text, total) {
  document.getElementById("receiptLines").textContent = text || "";
  document.getElementById("receiptTotal").textContent =
    "Total: £" + Number(total || 0).toFixed(2);
}
