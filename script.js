const form = document.querySelector("#billingForm");
const tableBody = document.querySelector("#tableBody");
const grandTotalSection = document.querySelector("#grandTotalSection");
const finalTotal = document.querySelector("#grandTotal");
const calculateBillButton = document.querySelector("#calculateBill");
let grandTotal = 0;

let billingItems = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const itemName = document.querySelector("#itemName").value;
  const itemPrice = parseFloat(document.querySelector("#price").value);
  const itemQuantity = parseInt(document.querySelector("#quantity").value);

  const total = itemPrice * itemQuantity;
  grandTotal += total;

  billingItems.push({
    name: itemName,
    price: itemPrice,
    quantity: itemQuantity,
  });

  const row = document.createElement("tr");
  row.innerHTML = `
    <td class="px-6 py-4 text-sm text-gray-700">${itemName}</td>
    <td class="px-6 py-4 text-sm text-gray-700">${itemPrice.toFixed(2)}</td>
    <td class="px-6 py-4 text-sm text-gray-700">${itemQuantity}</td>
    <td class="px-6 py-4 text-sm text-gray-700">${total.toFixed(2)}</td>
  `;
  tableBody.appendChild(row);

  form.reset();
});

calculateBillButton.addEventListener("click", function () {
  grandTotalSection.classList.remove("hidden");
  finalTotal.textContent = `₹${grandTotal.toFixed(2)}`;

  // Save data to localStorage
  localStorage.setItem(
    "billingData",
    JSON.stringify({ items: billingItems, total: grandTotal })
  );

function activateViewSummaryButton() {
  const viewSummaryButton = document.getElementById("viewSummary");
  
  viewSummaryButton.disabled = false;
  viewSummaryButton.classList.remove("bg-gray-500", "cursor-not-allowed");
  viewSummaryButton.classList.add("bg-purple-600", "hover:bg-purple-700", "cursor-pointer");
}

document.getElementById("viewSummary").addEventListener("click", function () {
  if (!this.disabled) {
    window.location.href = "billing-summary.html";
  }
});

activateViewSummaryButton();

});
