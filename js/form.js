document.addEventListener("DOMContentLoaded", function () {
  const submissionForm = document.getElementById("artist-form");

  // Form submission handler
  submissionForm.addEventListener("submit", function (event) {
    const genreInput = document.getElementById("genre-input").value.trim();
    const description = document.getElementById("artist-description").value.trim();

    if (!genreInput) {
      alert("Please select or enter a music genre.");
      event.preventDefault();
      return;
    }

    if (description.length === 0) {
      alert("Please provide a description of why this artist should be added.");
      event.preventDefault();
      return;
    }
  });

  // Handler for adding a new media link input
  document.getElementById("add-link-button").addEventListener("click", function () {
    const container = document.getElementById("media-links-container");
    const wrapper = document.createElement("div");
    wrapper.classList.add("media-link-wrapper");

    const newInput = createMediaLinkInput();
    const removeButton = createRemoveButton(wrapper);

    wrapper.appendChild(newInput);
    wrapper.appendChild(removeButton);
    container.appendChild(wrapper);
  });

  // Create a new media link input element
  function createMediaLinkInput() {
    const input = document.createElement("input");
    input.type = "url";
    input.name = "media_links[]";
    input.placeholder = "https://example.com";
    input.required = true;
    return input;
  }

  // Create a remove button that deletes its parent element when clicked
  function createRemoveButton(wrapper) {
    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("delete-link-button");
    button.textContent = "Remove";
    button.addEventListener("click", function () {
      wrapper.remove();
    });
    return button;
  }
});
