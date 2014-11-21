var product_detail_page = function(){

	this.getProductTitle = function(){

		var productTitle = element(by.binding('order.Product.Name'));
		expect(productTitle.isPresent()).toBe(true);
		return productTitle.getText();	
	};

	this.selectCity = function(index){

		var allCities = element.all(by.options('c as c.Name for c in cities'));
		var firstCity = allCities.get(index);
		//this does not belong to here
		expect(firstCity.getText()).toEqual('ISTANBUL-AVRUPA');
		firstCity.click(); 
	};

	this.selectRegion = function(index){
		var allRegions = element.all(by.options('r as r.Name for r in productDetail.regions'));
		var firstRegion = allRegions.get(index);
		//this does not belong to here
		expect(firstRegion.getText()).toEqual('Akatlar');
		firstRegion.click();
	};

	this.selectDate = function(date){
		var allDates = element.all(by.options('d.Date as d.Text for d in dates'));
		var firstDate = allDates.get(date);
		firstDate.click();
	};

	this.addToBasket = function(){
		element(by.buttonText('SATIN AL')).click();
	};

	this.getOrderStep = function(){
		return element(by.css('.order-step-number')).getText();
	};
};

module.exports = new product_detail_page();
