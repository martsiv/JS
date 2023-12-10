describe("createArray", function() {

    it("Перевіряє створення масиву з нормальному діапазоні -2 - 3", function() {
      assert.deepEqual(createArray(-2, 3), [-2, -1, 0, 1, 2, 3]);
    });
    it("Перевіряє створення масиву з зворотньому діапазоні 6 - 4", function() {
        assert.deepEqual(createArray(6, 4), [4, 5, 6]);
      });
      it("Перевіряє створення масиву з діапазоном, де два числа однакові 4 - 4", function() {
        assert.deepEqual(createArray(4, 4), [4]);
      });
  });