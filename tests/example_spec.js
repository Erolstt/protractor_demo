describe('test search functionality', function() {

	beforeEach(function(){

		browser.ignoreSynchronization = true;

    	browser.get('http://m.ciceksepeti.com/#/app/home');

	});

  it('should search item name', function() {

    element(by.css('div.buttons.right-buttons')).click();

	var searchItem = 'Gülümse Sevgilim'

    element(by.model('mainData.searchValue')).sendKeys(searchItem, protractor.Key.ENTER);

    //element(by.css('.search-button')).click();

    var searchTitle = element(by.css('.title.ng-binding'));

    expect(searchTitle.getText()).toEqual(searchItem);

    var productList = element.all(by.repeater('product in products'));

    //click the first item which is displayed
    productList.get(0).click();

	var productTitle = element(by.binding('order.Product.Name'));
	expect(productTitle.isPresent()).toBe(true);
	expect(productTitle.getText()).toEqual(searchItem);

	var allCities = element.all(by.options('c as c.Name for c in cities'));
	var firstCity = allCities.get(1);
	expect(firstCity.getText()).toEqual('ISTANBUL-AVRUPA');
	firstCity.click(); 

	var allRegions = element.all(by.options('r as r.Name for r in productDetail.regions'));
	var firstRegion = allRegions.get(1);
	expect(firstRegion.getText()).toEqual('Akatlar');
	firstRegion.click();

	var allDates = element.all(by.options('d.Date as d.Text for d in dates'));
	var firstDate = allDates.get(3);
	firstDate.click();
	
	element(by.buttonText('SATIN AL')).click();


  });
});
