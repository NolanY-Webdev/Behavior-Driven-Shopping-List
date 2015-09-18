function ShoppingList() {
  this.items = [];
}

ShoppingList.prototype.addItem = function(item) {
  if (!(item instanceof ShoppingListItem)) {
    throw('Not a shopping list item');
  }
};