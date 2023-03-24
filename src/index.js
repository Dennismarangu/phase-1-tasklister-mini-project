document.addEventListener("DOMContentLoaded", () => {
  
});


const deleteBtns = document.querySelectorAll('.delete-btn');

deleteBtns.forEach(btn => {
  btn.addEventListener('click', (event) => {
    event.target.parentElement.remove(); // remove the li element that contains the button
  });
});

const priorityDropdown = document.getElementById('priority');
const taskItems = document.querySelectorAll('li');

priorityDropdown.addEventListener('change', (event) => {
  const selectedPriority = event.target.value;
  
  taskItems.forEach(item => {
    item.classList.remove('high-priority', 'medium-priority', 'low-priority');
    item.classList.add(`${selectedPriority}-priority`);
  });
});

const sortBtn = document.getElementById('sort-btn');

sortBtn.addEventListener('click', () => {
  const sortedItems = [...taskItems].sort((a, b) => {
    const aPriority = a.classList[0].split('-')[0];
    const bPriority = b.classList[0].split('-')[0];
    
    if (aPriority === 'high' && bPriority !== 'high') {
      return -1;
    } else if (bPriority === 'high' && aPriority !== 'high') {
      return 1;
    } else if (aPriority === 'medium' && bPriority === 'low') {
      return -1;
    } else if (bPriority === 'medium' && aPriority === 'low') {
      return 1;
    } else {
      return 0;
    }
  });
  
  taskItems.forEach(item => item.remove());
  sortedItems.forEach(item => taskList.appendChild(item));
});