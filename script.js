//your code here!

//your code here!

const list = document.getElementById('infi-list');
let itemCount = 10; // initially 10 items

// function to add list items
function addItems(num) {
  for (let i = 1; i <= num; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(li);
  }
}

// add 10 items initially
addItems(itemCount);

// add scroll event listener
list.addEventListener('scroll', () => {
  // check if the user reached the bottom of the list
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2); // add 2 more items
  }
});