(function () {
  var DonutStore = function (min, max, average, name) {
    this.min = min;
    this.max = max;
    this.average = average;
    this.hourlyTotals = [];
    this.name = name;
  };
  DonutStore.prototype.donutsPerHour = function () {
    var numberCustomers = Math.floor(Math.random() * this.max - this.min + 1) + this.min;
    return Math.round(numberCustomers * this.average);
  };

  DonutStore.prototype.donutsPerDay = function () {
    var perDay = 0;
    for (var i = 0; i <= 11; i++) {
      var hourlyTotal = this.donutsPerHour();
      this.hourlyTotals.push(hourlyTotal);
      perDay += hourlyTotal;
    }
    return perDay;
  };

  DonutStore.prototype.render = function () {
    var dailyTotal = this.donutsPerDay();
    var elTr = document.getElementById(this.name);
    for (var i = 0; i <= this.hourlyTotals.length; i++) {
      var el = document.createElement('td');
      el.textContent = this.hourlyTotals[i];
      elTr.appendChild(el);
    }
    el.textContent = dailyTotal;
    elTr.appendChild(el);
  };
  var downtown = new DonutStore(8, 43, 4.50, "store1");
  var capitolHill = new DonutStore(4, 37, 2.00, "store2");
  var slu = new DonutStore(9, 23, 6.33, "store3");
  var wedgewood = new DonutStore(2, 28, 1.25, "store4");
  var ballard = new DonutStore(8, 58, 3.75, "store5");
  downtown.render();
  capitolHill.render();
  slu.render();
  wedgewood.render();
  ballard.render();
}) ();
