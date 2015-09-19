function ShoppingList() {
  this.items = [];
}

ShoppingList.prototype.addItem = function(item) {
  if (!(item instanceof ShoppingListItem)) {
    throw new Error('Not a valid item');
  } else {
    this.items.push(item);
  }
};

ShoppingList.prototype.removeItem = function(item) {
  var num = this.items.indexOf(item);
  if (num !== -1) {
    this.items.splice(num, 1);
  } else if (item === undefined) {
    this.items.pop();
  } else {
    throw new Error('Item not on the list');
  }
};

ShoppingList.prototype.render = function() {
  var li = '';
  for (var i = 0; i < this.items.length; i++) {
    li += this.items[i].render;
  }
  console.log('<ul>' + li + '</ul>');
  return '<ul>' + li + '</ul>';
};