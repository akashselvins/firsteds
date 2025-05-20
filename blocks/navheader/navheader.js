export default function decorate(block) {
    block.classList.add('navheader');
  
    const row = block.querySelector('div');
    const [menuCol, titleCol, mailCol] = row.children;
  
    const container = document.createElement('div');
    container.className = 'navheader-row';
  
    // Create menu icon
    const menuIcon = document.createElement('span');
    menuIcon.className = 'menu-icon';
    menuIcon.textContent = '☰';
  
    // Find and style the dropdown list
    const dropdown = menuCol.querySelector('ul');
    dropdown.classList.add('dropdown', 'hidden');
  
    // Add event to close menu if first item is "Close Menu"
    const firstItem = dropdown.querySelector('li');
    if (firstItem && firstItem.textContent.trim().toLowerCase() === 'close menu') {
      firstItem.addEventListener('click', () => {
        dropdown.classList.add('hidden');
      });
    }
  
    const menuContainer = document.createElement('div');
    menuContainer.className = 'navheader-col menu-col';
    menuContainer.appendChild(menuIcon);
    menuContainer.appendChild(dropdown);
  
    const titleContainer = document.createElement('div');
    titleContainer.className = 'navheader-col';
    titleContainer.appendChild(titleCol.querySelector('p'));
  
    const mailContainer = document.createElement('div');
    mailContainer.className = 'navheader-col';
    mailContainer.appendChild(mailCol.querySelector('p'));
  
    container.appendChild(menuContainer);
    container.appendChild(titleContainer);
    container.appendChild(mailContainer);
  
    block.innerHTML = ''; // Clear original content
    block.appendChild(container);
  
    // Toggle dropdown on icon click
    menuIcon.addEventListener('click', () => {
      dropdown.classList.toggle('hidden');
    });
  }
  