var env = require('../env/env.js');
describe('test search functionality', function() {
	var home_page = require('../pages/home_page.js');
	var searchProduct = 'Gülümse Sevgilim'

	beforeEach(function(){

		browser.ignoreSynchronization = true;

    	browser.get(env.baseUrl);
	});

  xit('should search item name', function() {

    	home_page.searchItem(searchProduct);
    	expect(home_page.getSearchTitle()).toEqual(searchProduct);
  });

  it('should add item to basket', function() {

    	home_page.searchItem(searchProduct);
    	var product_detail_page = home_page.clickSearchedItem();
    	expect(product_detail_page.getProductTitle()).toEqual(searchProduct);
    	product_detail_page.selectCity(1);
    	product_detail_page.selectRegion(1);
    	product_detail_page.selectDate(3);
    	product_detail_page.addToBasket();
    	expect(product_detail_page.getOrderStep()).toEqual('1/6');    	
  });

});
