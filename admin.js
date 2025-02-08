document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("user-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const userList = document.getElementById("user-list");
  const searchInput = document.getElementById("search");
  const clearFieldsBtn = document.getElementById("clear-fields");
  const clearAllBtn = document.getElementById("clear-all");

  function getUsers() {
      return JSON.parse(localStorage.getItem("users")) || [];
  }

  function saveUsers(users) {
      localStorage.setItem("users", JSON.stringify(users));
  }

  function addUser(name, email) {
      const users = getUsers();
      const newUser = {
          id: Date.now(),
          name,
          email,
          date: new Date().toLocaleString()
      };
      users.push(newUser);
      saveUsers(users);
      renderUsers(users);
  }

  function deleteUser(id) {
      const users = getUsers().filter(user => user.id !== id);
      saveUsers(users);
      renderUsers(users);
  }

  function clearAllUsers() {
      localStorage.removeItem("users");
      renderUsers([]);
  }

  function renderUsers(users = getUsers()) {
      userList.innerHTML = "";
      users.forEach(user => {
          const li = document.createElement("li");
          li.textContent = `${user.date} - ${user.name} (${user.email})`;
          
          const deleteBtn = document.createElement("button");
          deleteBtn.textContent = "Excluir";
          deleteBtn.onclick = () => deleteUser(user.id);

          li.appendChild(deleteBtn);
          userList.appendChild(li);
      });
  }

  function searchUsers(query) {
      const users = getUsers();
      const filteredUsers = users.filter(user =>
          user.name.toLowerCase().includes(query.toLowerCase()) ||
          user.email.toLowerCase().includes(query.toLowerCase())
      );
      renderUsers(filteredUsers);
  }

  form.addEventListener("submit", (event) => {
      event.preventDefault();
      addUser(nameInput.value, emailInput.value);
      form.reset();
  });

  searchInput.addEventListener("input", (event) => {
      searchUsers(event.target.value);
  });

  clearFieldsBtn.addEventListener("click", () => {
      form.reset();
  });

  clearAllBtn.addEventListener("click", () => {
      if (confirm("Tem certeza que deseja excluir todos os usuários?")) {
          clearAllUsers();
      }
  });

  renderUsers();
});
