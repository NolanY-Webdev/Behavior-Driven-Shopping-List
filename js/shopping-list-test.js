var expect = chai.expect;
var should = chai.should();


describe('ShoppingListItem', function() {
  var pocky = new ShoppingListItem('pocky', 'buy more');
  it('should be a function', function() {
    expect(ShoppingListItem).to.be.a('function');
  });
  it('should have a property name', function() {
    expect(pocky).to.have.property('name').is.a('string');
  });
  it('should have a property description', function() {
    expect(pocky).to.have.property('description').is.a('string');
  });
  it('should have a property is_done', function() {
    expect(pocky).to.have.property('is_done').equal(false);
  });
  it('should accept two arguments (name, description)', function() {
    expect(pocky.name).to.equal('pocky');
    expect(pocky.description).to.equal('buy more');
  });

  describe('Check', function() {
    it('should be a function', function() {
      expect(pocky.is_done).to.equal(false);
      expect(pocky.check).to.be.a('function');
      pocky.check();
      expect(pocky.is_done).to.equal(true);
    });
  });

  describe('Uncheck', function() {
    it('should be a function', function() {
      expect(pocky.is_done).to.equal(true);
      expect(pocky.uncheck).to.be.a('function');
      pocky.uncheck();
      expect(pocky.is_done).to.equal(false);
    });
  });

  describe('Render', function() {
    it('should be a function', function() {
      expect(pocky).to.have.property('render').be.a('function');
    });
    it('should output a bigass string of html', function() {
      expect(pocky.render()).to.equal('<li class="completed_false"><span>pocky</span><span>buy more</span></li>');
    });
  });
});


describe('ShoppingList', function() {
  var list = new ShoppingList();
  var pocky = new ShoppingListItem('pocky', 'buy more');
  var shit = new ShoppingListItem('shit', 'the manure/fertilizer type of course');
  var Anna = new ShoppingListItem('Birthday present?', 'nope her birthday passed');
  it('should be a function', function() {
    expect(ShoppingList).to.be.a('function');
  });
  it('should have a property items as an empty array', function() {
    expect(list).to.have.property('items');
    expect(list.items).to.deep.equal([]);
  });

  describe('addItem', function() {
    it('accepts ShoppingListItem argument', function() {
      list.addItem(pocky);
      expect(list.items.length).to.equal(1);
    });
    it('will not accept things that are not items', function() {
      expect(list.addItem).to.throw('Not a valid item');
    });
  });

  describe('remove item', function() {
    beforeEach(function () {
      list.items = [];
      list.addItem(shit);
      list.addItem(pocky);
    });
    it('removes shit if shit is there to be removed', function() {
      list.removeItem(shit);
      expect(list.items).to.deep.equal([pocky]);
    });
    it('will remove the last shit added if no argument is passed', function() {
      list.removeItem();
      expect(list.items).to.deep.equal([shit]);
    });
    it('will throw an error if argument is not a ShoppingListItem', function() {
      expect(function() {
        list.removeItem(Anna);
      }).to.throw('Item not on the list');
    });
  });

  describe('render', function() {
    it('will do things', function() {
      expect(list.render()).to.be.a('string');
    });
  });
});