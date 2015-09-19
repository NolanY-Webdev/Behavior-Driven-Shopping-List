var ShoppingList = new ShoppingList();

function rending() {
  document.getElementById('content').innerHTML =  ShoppingList.render();
};


function add_to_shopping_list() {
  var new_shopping_list_item = new ShoppingListItem(document.querySelector('#name').value, document.querySelector('#description').value);
  ShoppingList.addItem(new_shopping_list_item);
  rending();
}

function changeCheckedStatus(idx, checkbox) {
  if (ShoppingList.items[idx].is_done) {
    ShoppingList.items[idx].uncheck();
  } else if (!ShoppingList.items[idx].is_done) {
    ShoppingList.items[idx].check();
  } else {
    console.log('you dun goofed');
  }
}