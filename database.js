var mongoose = require("mongoose");
var axios = require("axios");
var db = mongoose.connection;

//All calls out of the server
mongoose.connect(`mongodb+srv://kradzcalypse:Kradz480612!!!@aedrop.lcy1t.mongodb.net/AEDrop?retryWrites=true&w=majority`, { useNewUrlParser: true }, function (err) {

    if (err) throw err;

    console.log('Successfully connected');

});

axios.get("[淘宝开放平台](http://open.taobao.com/doc2/api_list.htm) API Node SDK")
    .then(function (response) {
        onSuccess(response)
    })
    .catch(function (error) {
        console.log(error);
    });


var repSchema = mongoose.Schema({
    fields: String,
    keywords: String,
    max_sale_price: String,
    min_sale_price: String,
    page_no: String,
    page_size: String,
    platform_product_type: String,
    sort: String,
    target_currency:String,
    target_language: String,
    tracking_id: String,
    delivery_days: String
});
var Data = mongoose.model('Data', repSchema);

function onSuccess(response) {
    var array = response;
    //  var arraytobe = response;
    var arrayLength = Object.keys(array).length
    console.log(arrayLength)
    for (var i = 0; i <= arrayLength; i++) {
        var fields = array.data[i].fields;
        var keywords = array.data[i].keywords;
        var max_sale_price = array.data[i].max_sale_price;
        var min_sale_price = array.data[i].min_sale_price;
        var page_no = array.data[i].page_no;
        var page_size = array.data[i].page_size;
        var platform_product_type = array.data[i].platform_product_type;
        var sort = array.data[i].sort;
        var target_currency = array.data[i].target_currency;
        var target_language = array.data[i].target_language;
        var tracking_id = array.data[i].tracking_id;
        var delivery_days = array.data[i].delivery_days;




        console.log(fields + " " + keywords + " " + max_sale_price + min_sale_price + " " + page_no + " " + page_size + platform_product_type + " " + sort + " " + target_currency + target_language + " " + tracking_id + " " + delivery_days);

        assignDataValue(fields, keywords, max_sale_price, min_sale_price, page_no, page_size, platform_product_type, sort, target_currency, target_language, tracking_id, ship_to_country, delivery_days)

    }
}

function assignDataValue(fields, keywords, max_sale_price, min_sale_price, page_no, page_size, platform_product_type, sort, target_currency, target_language, tracking_id, ship_to_country, delivery_days) {

    var upData = new Data()
    upData.fields = commission_rate, sale_price;
    upData.keywords = req.query.keywords;
    upData.max_sale_price = req.query.max_sale_price;
    upData.min_sale_price = req.query.min_sale_price;
    upData.page_no = req.query.page_no;
    upData.page_size = 50;
    upData.platform_product_type = ALL;
    upData.sort = SALE_PRICE_ASC;
    upData.target_currency = USD;
    upData.target_language = EN;
    upData.tracking_id = maarifahmall;
    upData.ship_to_country = US;
    upData.delivery_days = 3;

    upData.save();
}

