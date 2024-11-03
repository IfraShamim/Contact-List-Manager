const contacts = [
  {
    id: 1,
    name: "Ifra Shamim",
    email: "ifrashamim29@gmail.com",
  },
  {
    id: 2,
    name: "Nisha Shamim",
    email: "nishashamim15@gmail.com",
  },
  {
    id: 3,
    name: "Tehreem Shamim",
    email: "tehreemshamim14@gmail.com",
  },
  {
    id: 4,
    name: "Rayan Shamim",
    email: "rayanshamim14@gmail.com",
  },
  {
    id: 5,
    name: "Masharib Shamim",
    email: "masharibshamim28@gmail.com",
  },
  {
    id: 6,
    name: "Ahnaf Shamim",
    email: "ahnafshamim08@gmail.com",
  },
];

function renderContacts(contactArray) {
  const contactListDiv = document.getElementById("contact-list");
  contactListDiv.innerHTML = ""; 

  for (const contact of contactArray) {
    const contactDiv = document.createElement("div");
    contactDiv.className = "contact";
    contactDiv.innerHTML = `
        <h3>${contact.name}</h3>
        <p>${contact.email}</p>`;

    contactListDiv.appendChild(contactDiv);
  }
}

function filterContacts() {
  const filterInput = document
    .getElementById("filter-input")
    .value.toLowerCase();
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterInput)
  );

  renderContacts(filteredContacts);

  // Check if no contacts matched the filter
  if (filteredContacts.length === 0 && filterInput !== "") {
    alert("Contact isn't available");
    document.getElementById("filter-input").value = ""; // Clear the input field
    renderContacts(contacts); // Show all contacts again
  }
}

renderContacts(contacts); // Initial render of all contacts

document
  .getElementById("filter-button")
  .addEventListener("click", filterContacts);
