export default function decorate(block) {
    // Create label
    const label = document.createElement('p');
    label.textContent = 'Enter the page to search';
  
    // Create input
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'searchInput';
    input.placeholder = 'Enter title or tag';
  
    // Create button
    const button = document.createElement('button');
    button.textContent = 'Search';
  
    // Add event listener to button
    button.addEventListener('click', async () => {
      const query = input.value.toLowerCase();
      if (!query) return;
  
      try {
        const res = await fetch('https://main--firsteds--akashselvins.aem.live/query-index.json');
        const json = await res.json();
        const pages = json.data;
  
        const match = pages.find(page => {
            const titleMatch = page['og:title']?.toLowerCase().includes(query);
            const tagMatch = page.tags?.toLowerCase().includes(query);
            return titleMatch || tagMatch;
          });
          
  
        if (match) {
          window.location.href = match.path;
        } else {
          alert('No matching page found.');
        }
      } catch (err) {
        console.error('Search failed:', err);
        alert('Error searching pages.');
      }
    });
  
    // Append elements to block
    block.textContent = ''; // Clear existing content
    block.appendChild(label);
    block.appendChild(input);
    block.appendChild(button);
  }
  