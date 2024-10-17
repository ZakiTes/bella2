// Function to fetch and display menu items from a JSON file with images
function openModal(category) {
    const modal = document.getElementById('menu-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalItems = document.getElementById('modal-items');

    // Set modal title
    modalTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1) + ' Menu';
    modalItems.innerHTML = ''; // Clear previous items

    // Fetch the appropriate JSON file based on category
    fetch(`./json/${category}.json`)
        .then(response => response.json())
        .then(data => {
            const items = data[category]; // Get items from the JSON file

            // Add each item to the modal
            items.forEach(item => {
                const listItem = document.createElement('div');
                listItem.classList.add('menu-item-modal');

                const itemImg = document.createElement('img');
                itemImg.src = item.img;
                itemImg.alt = item.name;
                itemImg.classList.add('menu-item-img');

                const itemInfo = document.createElement('div');
                itemInfo.classList.add('menu-item-info');

                const itemName = document.createElement('h3');
                itemName.textContent = item.name;

                const itemDescription = document.createElement('p');
                itemDescription.textContent = item.description;

                const itemPrice = document.createElement('p');
                itemPrice.textContent = `$${item.price.toFixed(2)}`;

                // Append elements to itemInfo
                itemInfo.appendChild(itemName);
                itemInfo.appendChild(itemDescription);
                itemInfo.appendChild(itemPrice);

                // Append image and info to listItem
                listItem.appendChild(itemImg);
                listItem.appendChild(itemInfo);

                // Append listItem to modalItems
                modalItems.appendChild(listItem);
            });

            // Display the modal
            modal.style.display = 'block';
        })
        .catch(error => console.error('Error loading JSON:', error));
}

  

// Close the modal
function closeModal1() {
    document.getElementById('menu-modal').style.display = 'none';
}

// Close modal when clicking the close button or outside the modal content

window.addEventListener('click', function(event) {
    const modal = document.getElementById('menu-modal');
    if (event.target == modal) {
        closeModal1();
    }
});

// Add click event to each menu item to open the modal
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        openModal(category);
    });
});