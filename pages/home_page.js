require ('../pages/product_detail_page.js');

var home_page = function(){

	this.searchItem = function(value){

    element(by.css('div.buttons.right-buttons')).click();
    element(by.model('mainData.searchValue')).sendKeys(value);
    element(by.css('.search-button')).click();
    var searchTitle = element(by.css('.title.ng-binding'));

	};

	this.getSearchTitle = function(){
		return element(by.css('.title.ng-binding')).getText();
	};

	this.clickSearchedItem = function(){

	    var productList = element.all(by.repeater('product in products'));
	    //it has to sleep :(
	    browser.sleep(2000);
	    //click the first item which is displayed
	    productList.get(0).click();
	    return require('./product_detail_page.js');

	};

};

module.exports = new home_page();