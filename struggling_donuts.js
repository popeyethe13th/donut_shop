(function() {
  var StrugglingDonuts = function(store, options) {
    this.minC   =   options.minC;
    this.maxC   =   options.maxC;
    this.avgPC  =   options.avgPC;
    this.hOpen  =   11;
    this.store  =   store;
  };

  StrugglingDonuts.prototype.generateRandom = function() {
    return Math.floor(Math.random() * (this.maxC - this.minC) + this.minC);
  };


  StrugglingDonuts.prototype.donutsPerHour = function() {
    return Math.floor(this.generateRandom() * this.avgPC) ;
  };

  StrugglingDonuts.prototype.donutsPerDay = function() {
    var total = 0;
    var currentRowEl = document.getElementById(this.store);
    for (var i = 0; i < this.hOpen; i++) {
      var elDonutsPerHour = document.createElement('td');
      var hourlyDonuts = this.donutsPerHour();
      elDonutsPerHour.textContent = hourlyDonuts;
      total += hourlyDonuts;
      currentRowEl.appendChild(elDonutsPerHour);
    }
    var totalElement = document.createElement('td');
    totalElement.textContent = total;
    currentRowEl.appendChild(totalElement);


  };


  var downtown     = new StrugglingDonuts ("Downtown",         {minC:8 , maxC:43 , avgPC:4.50 });
  var capitolHill  = new StrugglingDonuts ("CapitolHill",     {minC:4 , maxC:37 , avgPC:2.00 });
  var sLakeUnion   = new StrugglingDonuts ("SouthLakeUnion", {minC:9 , maxC:23 , avgPC:6.33 });
  var wedgeWood    = new StrugglingDonuts ("Wedgewood",        {minC:2 , maxC:28 , avgPC:1.25 });
  var ballard      = new StrugglingDonuts ("Ballard",          {minC:8 , maxC:58 , avgPC:3.75 });

  downtown.donutsPerDay();
  capitolHill.donutsPerDay();
  sLakeUnion.donutsPerDay();
  wedgeWood.donutsPerDay();
  ballard.donutsPerDay();

  var newShopForm = document.getElementById('submitNewStore');

  newShopForm.addEventListener('submit', function(event) {

    event.preventDefault();

    var newShopObj = new StrugglingDonuts(event.target.storeName.value, {minC: Number.parseInt(event.target.minCustPH.value),maxC: Number.parseInt(event.target.maxCustPH.value), avgPC: Number.parseInt(event.target.avgPerCust.value)});

    var newShop = document.getElementById('struggling_donuts');
    console.log(newShopObj);

    var nameEl = document.createElement('th');

    nameEl.textContent = newShopObj.store;

    newShop.appendChild(nameEl);

    var newShopDonutsPD = 0;

  for (var i = 0; i < 11; i++) {

    var totalDonutsPH = newShopObj.donutsPerHour();

    newShopDonutsPD += totalDonutsPH;

    var dataEl = document.createElement('td');

    dataEl.textContent = totalDonutsPH;

    newShop.appendChild(dataEl);

  }

  var dayEl = document.createElement('td');

  dayEl.textContent = newShopDonutsPD;

  newShop.appendChild(dayEl);

});

})();
