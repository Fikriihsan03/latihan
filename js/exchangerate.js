"use strict";
class ExchangeRate {
  constructor(base = "USD") {
    this.onInitCompleteEvent = null;
    this.rates = [];
    this.lastUpdate = null;
    this.base = base;
  }
  init(defaultrate = "IDR") {
    //get the latest exchange rates
    var rateUri = "https://api.exchangeratesapi.io/latest?base=" + this.base;
    fetch(rateUri)
      .then((response) => response.json())
      .then((data) => {
        this.rates = data.rates;
        this.base = data.base ?? 1;
        this.lastUpdate = data.date;

        let rvalue = {
          base: this.base,
          targetRate: data.rates[defaultrate] ?? 0,
        };

        if (this.onInitCompleteEvent) {
          this.onInitCompleteEvent(rvalue);
        }
      });
  }
  //event
  on(functionname, callback) {
    switch (functionname) {
      case "initComplete":
        this.onInitCompleteEvent = callback;
        break;
    }
  }
  exchange(from, fromvalue, to) {
    let rateFromValue = this.rates[from];
    let rateToValue = this.rates[to];
    let rateBase = this.rates[this.base] ?? 1;
    let result = (rateBase / rateFromValue) * rateToValue * fromvalue;
    return result;
  }
}
