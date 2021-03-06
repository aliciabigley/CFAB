describe('function removeSpaces', function(){
  it('string to have spaces removed', function(){
    var testString = 'this is a test string';
    var convertedTestString = 'thisisateststring';
    expect(RemoveSpaces(testString)).toEqual(convertedTestString);
  });
  it('string to have spaces removed', function(){
    var testString = 'willthisstringwork';
    var convertedTestString = 'willthisstringwork';
    expect(RemoveSpaces(testString)).toEqual(convertedTestString);
  });
});
describe('function GetUrlChatty', function(){
  it('UrL return', function(){
    var isChatty = 1;
    var urlSegment = 'section=coffee&section=drinks&';
    expect(GetUrlChatty(isChatty)).toEqual(urlSegment);
  });
});
describe('function getUrlKeyword', function(){
  it('Url return', function(){
    var keyword = "chill";
    var urlSegment = 'query=chill&';
    expect(GetUrlKeyword(keyword)).toEqual(urlSegment);
  });
  it('Url return', function(){
    var keyword = "romantic";
    var urlSegment = 'query=romantic&';
    expect(GetUrlKeyword(keyword)).toEqual(urlSegment);
  });
  it('Url return', function(){
    var keyword = "high energy";
    var urlSegment = 'query=lively&';
    expect(GetUrlKeyword(keyword)).toEqual(urlSegment);
  });
  it('Url return', function(){
    var keyword = undefined;
    var urlSegment = '';
    expect(GetUrlKeyword(keyword)).toEqual(urlSegment);
  });
});
describe('function checkMonth', function(){
  it('Year returned', function(){
    var testDate = "01/02/2017";
    var results = "01/02/2017";
    expect(CheckMonth(testDate)).toEqual(results);
  });
  it('Year returned', function(){
    var testDate = "1/02/2017";
    var results = "01/02/2017";
    expect(CheckMonth(testDate)).toEqual(results);
  });
});
describe('function getVDate', function(){
  it('VDate returned', function(){
    var testDate = "01/02/2017";
    var results = "v=20170102";
    expect(GetVDate(testDate)).toEqual(results);
  });
  it('VDate returned', function(){
    var testDate = "1/02/2017";
    var results = "v=20170102";
    expect(GetVDate(testDate)).toEqual(results);
  });
});
describe('function AppendURL', function(){
  it('Url To Be Appended',function(){
    var firstUrltoTest = 'https://api.foursquare.com/v2/';
    var secondUrltoTest = 'explore?near=milwaukee&';
    var results = 'https://api.foursquare.com/v2/explore?near=milwaukee&';
    expect(AppendURL(firstUrltoTest,secondUrltoTest)).toEqual(results);
  });
  it('Url To Be Appended',function(){
    var firstUrltoTest = 'a b c d e f g ';
    var secondUrltoTest = 'h i j k . l ! @ #';
    var results = 'a b c d e f g h i j k . l ! @ #';
    expect(AppendURL(firstUrltoTest,secondUrltoTest)).toEqual(results);
  });
});
describe('function AppendUrlWithDescription', function(){
  it('Url to be appended',function(){
    var firstUrltoTest = 'https://api.foursquare.com/v2/explore?near=milwaukee&';
    //var secondUrltoTest = 'section=coffee&section=drink&';
    var response = 1;
    var results = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=coffee&section=drinks&';
    expect(AppendUrlWithDescription(response,firstUrltoTest)).toEqual(results);
  });
  it('Url to be appended',function(){
    var firstUrltoTest = 'https://api.foursquare.com/v2/explore?near=milwaukee&';
    //var secondUrltoTest = 'section=coffee&section=drink&';
    var response = 2;
    var results = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=outdoors&';
    expect(AppendUrlWithDescription(response,firstUrltoTest)).toEqual(results);
  });
  it('Url to be appended',function(){
    var firstUrltoTest = 'https://api.foursquare.com/v2/explore?near=milwaukee&';
    //var secondUrltoTest = 'section=coffee&section=drink&';
    var response = 3;
    var results = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=arts&';
    expect(AppendUrlWithDescription(response,firstUrltoTest)).toEqual(results);
  });
});
describe('function AppendUrlWithResturant', function(){
  it('Url to be appended',function(){
    var firstUrltoTest = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=coffee&section=drinks&';
    var isEating = true;
    var results = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=coffee&section=drinks&section=food&';
    expect(AppendUrlWithResturant(isEating,firstUrltoTest)).toEqual(results);
  });
  it('Url to be appended',function(){
    var firstUrltoTest = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=coffee&section=drinks&';
    var isEating = false;
    var results = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=coffee&section=drinks&';
    expect(AppendUrlWithResturant(isEating,firstUrltoTest)).toEqual(results);
  });
});
describe('function AppendUrlWithKeyword', function(){
  it('Url to be appended',function(){
    var firstUrltoTest = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=coffee&section=drinks&';
    var keyword = "chill";
    var results = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=coffee&section=drinks&query=chill&';
    expect(AppendUrlWithKeyword(keyword,firstUrltoTest)).toEqual(results);
  });
  it('Url to be appended',function(){
    var firstUrltoTest = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=coffee&section=drinks&';
    var keyword = "romantic";
    var results = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=coffee&section=drinks&query=romantic&';
    expect(AppendUrlWithKeyword(keyword,firstUrltoTest)).toEqual(results);
  });
  it('Url to be appended',function(){
    var firstUrltoTest = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=coffee&section=drinks&';
    var keyword = "high energy";
    var results = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=coffee&section=drinks&query=lively&';
    expect(AppendUrlWithKeyword(keyword,firstUrltoTest)).toEqual(results);
  });
  it('Url to be appended',function(){
    var firstUrltoTest = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=coffee&section=drinks&';
    var keyword = undefined;
    var results = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=coffee&section=drinks&';
    expect(AppendUrlWithKeyword(keyword,firstUrltoTest)).toEqual(results);
  });
});
describe('function AppendUrlWithPrice', function(){
  it('Url to be appended', function(){
    var price = 1;
    var firstUrltoTest = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=coffee&section=drinks&query=lively&';
    var results = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=coffee&section=drinks&query=lively&price=1&';
    expect(AppendUrlWithPrice(price,firstUrltoTest)).toEqual(results);
  });
  it('Url to be appended', function(){
    var price = 2;
    var firstUrltoTest = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=coffee&section=drinks&query=lively&';
    var results = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=coffee&section=drinks&query=lively&price=2&';
    expect(AppendUrlWithPrice(price,firstUrltoTest)).toEqual(results);
  });
  it('Url to be appended', function(){
    var price = 3;
    var firstUrltoTest = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=coffee&section=drinks&query=lively&';
    var results = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=coffee&section=drinks&query=lively&price=3&';
    expect(AppendUrlWithPrice(price,firstUrltoTest)).toEqual(results);
  });
  it('Url to be appended', function(){
    var price = 4;
    var firstUrltoTest = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=coffee&section=drinks&query=lively&';
    var results = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=coffee&section=drinks&query=lively&price=4&';
    expect(AppendUrlWithPrice(price,firstUrltoTest)).toEqual(results);
  });
});
describe('function AppendUrlWithClientId', function(){
  it('Url to be appended', function(){
    var firstUrltoTest = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=coffee&section=drinks&query=lively&price=4&';
    var results = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=coffee&section=drinks&query=lively&price=4&client_id=1Y32SY1QBKL3UNRRDO5HFGXEBVT40DMQBCRZE0MUATAJNQMK&';
    expect(AppendUrlWithClientId(firstUrltoTest)).toEqual(results);
  });
});
describe('function AppendUrlWithSecretId', function(){
  it('Url to be appended', function(){
    var firstUrltoTest = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=coffee&section=drinks&query=lively&price=4&client_id=1Y32SY1QBKL3UNRRDO5HFGXEBVT40DMQBCRZE0MUATAJNQMK&';
    var results = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=coffee&section=drinks&query=lively&price=4&client_id=1Y32SY1QBKL3UNRRDO5HFGXEBVT40DMQBCRZE0MUATAJNQMK&client_secret=UE3VNOOO30ZHVUCXKMFPDJZUYQZOM4XI0JTUH5CJQZDUG5QS&';
    expect(AppendUrlWithSecretId(firstUrltoTest)).toEqual(results);
  });
});
describe('function GenerateURL', function(){
  it('Final URL', function(){
    var response = 1;
    var isEating = true;
    var queryWord ="chill";
    var price = 2;
    var date = "11/23/2016";
    var results = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=coffee&section=drinks&section=food&query=chill&price=2&client_id=1Y32SY1QBKL3UNRRDO5HFGXEBVT40DMQBCRZE0MUATAJNQMK&client_secret=UE3VNOOO30ZHVUCXKMFPDJZUYQZOM4XI0JTUH5CJQZDUG5QS&v=20161123';
    expect(GenerateURL(response,isEating,queryWord,price,date)).toEqual(results);
  });
  it('Final URL', function(){
    var response = 2;
    var isEating = false;
    var queryWord ="romantic";
    var price = 4;
    var date = "11/23/2016";
    var results = 'https://api.foursquare.com/v2/explore?near=milwaukee&section=outdoors&query=romantic&price=4&client_id=1Y32SY1QBKL3UNRRDO5HFGXEBVT40DMQBCRZE0MUATAJNQMK&client_secret=UE3VNOOO30ZHVUCXKMFPDJZUYQZOM4XI0JTUH5CJQZDUG5QS&v=20161123';
    expect(GenerateURL(response,isEating,queryWord,price,date)).toEqual(results);
  });
});
// describe('function FilterByMenu', function(){
//   it('by referencing hasMenu variable',function(){
//     var results = {"meta":{"code":200,"requestId":"589b32194434b950333711be"},"response":{"geocode":{"what":"","where":"milwaukee","center":{"lat":43.0389,"lng":-87.90647},"displayString":"Milwaukee, WI, United States","cc":"US","geometry":{"bounds":{"ne":{"lat":43.194959999999995,"lng":-87.863592},"sw":{"lat":42.920823,"lng":-88.070876}}},"slug":"milwaukee-wisconsin","longId":"72057594043190981"},"headerLocation":"Milwaukee","headerFullLocation":"Milwaukee","headerLocationGranularity":"city","query":"romantic","totalResults":4,"suggestedBounds":{"ne":{"lat":43.07747457470844,"lng":-87.89429864962578},"sw":{"lat":43.01779793112264,"lng":-87.91208172566395}},"groups":[{"type":"Recommended Places","name":"recommended","items":[{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"4ae4934ff964a520d89b21e3","name":"Chez Jacques","contact":{"phone":"4146721040","formattedPhone":"(414) 672-1040"},"location":{"address":"1101 S. 1st St.","crossStreet":"at E. Washington St.","lat":43.02051050583108,"lng":-87.91127340402585,"labeledLatLngs":[{"label":"display","lat":43.02051050583108,"lng":-87.91127340402585}],"postalCode":"53204","cc":"US","city":"Milwaukee","state":"WI","country":"United States","formattedAddress":["1101 S. 1st St. (at E. Washington St.)","Milwaukee, WI 53204","United States"]},"categories":[{"id":"4bf58dd8d48988d10c941735","name":"French Restaurant","pluralName":"French Restaurants","shortName":"French","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/food/french_","suffix":".png"},"primary":!0}],"verified":!1,"stats":{"checkinsCount":1296,"usersCount":822,"tipCount":23},"url":"http://www.chezjacques.com/","price":{"tier":2,"message":"Moderate","currency":"$"},"hasMenu":!0,"rating":7.7,"ratingColor":"C5DE35","ratingSignals":57,"menu":{"type":"Menu","label":"Menu","anchor":"View Menu","url":"https://foursquare.com/v/chez-jacques/4ae4934ff964a520d89b21e3/menu","mobileUrl":"https://foursquare.com/v/4ae4934ff964a520d89b21e3/device_menu"},"allowMenuUrlEdit":!0,"beenHere":{"count":0,"marked":!1,"lastCheckinExpiredAt":0},"hours":{"status":"Closed until 10:00 AM","isOpen":!1,"isLocalHoliday":!1},"photos":{"count":0,"groups":[]},"hereNow":{"count":0,"summary":"Nobody here","groups":[]}},"tips":[{"id":"4fef310ce4b06418e17287c2","createdAt":1341075724,"text":"This place is so great. Amazing food & the atmosphere I'd what you make it - chill & relaxing or romantic & sweet!","entities":[{"indices":[97,105],"type":"search_match"}],"type":"user","canonicalUrl":"https://foursquare.com/item/4fef310ce4b06418e17287c2","likes":{"count":3,"groups":[],"summary":"3 likes"},"logView":!0,"agreeCount":3,"disagreeCount":0,"todo":{"count":0},"user":{"id":"26501811","firstName":"Clarice","lastName":"Mish","gender":"female","photo":{"prefix":"https://igx.4sqi.net/img/user/","suffix":"/DWMVNPO01D5ODQU2.jpg"}}}],"referralId":"e-0-4ae4934ff964a520d89b21e3-0"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"4afc51faf964a520832122e3","name":"Casablanca","contact":{"phone":"4142716000","formattedPhone":"(414) 271-6000","twitter":"casaonbrady","facebook":"117775294915502","facebookUsername":"CasablancaOnBrady","facebookName":"Casablanca"},"location":{"address":"728 E Brady St","crossStreet":"N Cass St","lat":43.05317886888707,"lng":-87.90259838104248,"labeledLatLngs":[{"label":"display","lat":43.05317886888707,"lng":-87.90259838104248}],"postalCode":"53202","cc":"US","city":"Milwaukee","state":"WI","country":"United States","formattedAddress":["728 E Brady St (N Cass St)","Milwaukee, WI 53202","United States"]},"categories":[{"id":"4bf58dd8d48988d115941735","name":"Middle Eastern Restaurant","pluralName":"Middle Eastern Restaurants","shortName":"Middle Eastern","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/food/middleeastern_","suffix":".png"},"primary":!0}],"verified":!0,"stats":{"checkinsCount":14685,"usersCount":4669,"tipCount":111},"url":"http://www.CasablancaOnBrady.com","price":{"tier":2,"message":"Moderate","currency":"$"},"hasMenu":!0,"rating":8.8,"ratingColor":"73CF42","ratingSignals":389,"menu":{"type":"Menu","label":"Menu","anchor":"View Menu","url":"https://foursquare.com/v/casablanca/4afc51faf964a520832122e3/menu","mobileUrl":"https://foursquare.com/v/4afc51faf964a520832122e3/device_menu"},"allowMenuUrlEdit":!0,"beenHere":{"count":0,"marked":!1,"lastCheckinExpiredAt":0},"hours":{"status":"Closed until 11:00 AM","isOpen":!1,"isLocalHoliday":!1},"photos":{"count":0,"groups":[]},"venuePage":{"id":"42895671"},"hereNow":{"count":0,"summary":"Nobody here","groups":[]}},"tips":[{"id":"51100acfe4b01d3a01aa72a6","createdAt":1360005839,"text":"Won 2012 BEST Romantic Restaurant In Milwaukee!!!  This is hands down the best date night spot, nothing else like it!","entities":[{"indices":[14,22],"type":"search_match"}],"type":"user","canonicalUrl":"https://foursquare.com/item/51100acfe4b01d3a01aa72a6","likes":{"count":1,"groups":[],"summary":"1 like"},"logView":!0,"agreeCount":1,"disagreeCount":0,"todo":{"count":1},"user":{"id":"2205185","firstName":"Neveen","lastName":"Musa","gender":"female","photo":{"prefix":"https://irs3.4sqi.net/img/user/","suffix":"/RFDQ24G0NK3QJHB3.jpg"}}}],"referralId":"e-0-4afc51faf964a520832122e3-1"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"4ad5f47af964a5202e0421e3","name":"Hi Hat Garage","contact":{"phone":"4142208090","formattedPhone":"(414) 220-8090","twitter":"hihatloungemke"},"location":{"address":"1709 N Arlington Pl","crossStreet":"at E Brady St.","lat":43.05316906916216,"lng":-87.89510697126389,"postalCode":"53202","cc":"US","city":"Milwaukee","state":"WI","country":"United States","formattedAddress":["1709 N Arlington Pl (at E Brady St.)","Milwaukee, WI 53202","United States"]},"categories":[{"id":"4bf58dd8d48988d116941735","name":"Bar","pluralName":"Bars","shortName":"Bar","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/nightlife/pub_","suffix":".png"},"primary":!0}],"verified":!1,"stats":{"checkinsCount":22569,"usersCount":6870,"tipCount":89},"url":"http://hihatlounge.com/garage/","price":{"tier":2,"message":"Moderate","currency":"$"},"hasMenu":!0,"rating":8.5,"ratingColor":"73CF42","ratingSignals":332,"menu":{"type":"Menu","label":"Menu","anchor":"View Menu","url":"https://foursquare.com/v/hi-hat-garage/4ad5f47af964a5202e0421e3/menu","mobileUrl":"https://foursquare.com/v/4ad5f47af964a5202e0421e3/device_menu"},"allowMenuUrlEdit":!0,"beenHere":{"count":0,"marked":!1,"lastCheckinExpiredAt":0},"hours":{"isOpen":!1,"isLocalHoliday":!1},"photos":{"count":0,"groups":[]},"hereNow":{"count":0,"summary":"Nobody here","groups":[]}},"tips":[{"id":"528942f111d26ac4ba7dba44","createdAt":1384727281,"text":"If you are looking for a place to great a drink that provides a romantic atmosphere this is the place.","entities":[{"indices":[64,72],"type":"search_match"}],"type":"user","canonicalUrl":"https://foursquare.com/item/528942f111d26ac4ba7dba44","logView":!0,"agreeCount":0,"disagreeCount":0,"todo":{"count":0},"user":{"id":"71845107","firstName":"Taylor","lastName":"Smith","gender":"male","photo":{"prefix":"https://igx.4sqi.net/img/user/","suffix":"/blank_boy.png","default":!0}}}],"referralId":"e-0-4ad5f47af964a5202e0421e3-2"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"4ad752dff964a520800921e3","name":"Two","contact":{},"location":{"address":"718 E Burleigh St","crossStreet":"N Pierce St","lat":43.074762,"lng":-87.902078,"labeledLatLngs":[{"label":"display","lat":43.074762,"lng":-87.902078}],"postalCode":"53212","cc":"US","city":"Milwaukee","state":"WI","country":"United States","formattedAddress":["718 E Burleigh St (N Pierce St)","Milwaukee, WI 53212","United States"]},"categories":[{"id":"4bf58dd8d48988d116941735","name":"Bar","pluralName":"Bars","shortName":"Bar","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/nightlife/pub_","suffix":".png"},"primary":!0}],"verified":!1,"stats":{"checkinsCount":625,"usersCount":180,"tipCount":9},"price":{"tier":2,"message":"Moderate","currency":"$"},"rating":7.1,"ratingColor":"C5DE35","ratingSignals":10,"allowMenuUrlEdit":!0,"beenHere":{"count":0,"marked":!1,"lastCheckinExpiredAt":0},"hours":{"isOpen":!1,"isLocalHoliday":!1},"photos":{"count":0,"groups":[]},"hereNow":{"count":0,"summary":"Nobody here","groups":[]}},"tips":[{"id":"50b274c9e4b037e0edc5c270","createdAt":1353872585,"text":"Small, intimate bar that has a nice romantic vibe inside. On a hot date? Try some of the secluded private booths for a little one on one time. Or one on two......we don't judge.","entities":[{"indices":[36,44],"type":"search_match"}],"type":"user","canonicalUrl":"https://foursquare.com/item/50b274c9e4b037e0edc5c270","logView":!0,"agreeCount":0,"disagreeCount":0,"todo":{"count":0},"user":{"id":"38386923","firstName":"Ike","lastName":"Ozurumba","gender":"male","photo":{"prefix":"https://igx.4sqi.net/img/user/","suffix":"/RJFXVZDW2DPAMKFP.jpg"}}}],"referralId":"e-0-4ad752dff964a520800921e3-3"}]}]}};
//     var answer = true;
//     var resultsWithMenu = {"groups":[{"type":"Recommended Places","name":"recommended","items":[{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"4ae4934ff964a520d89b21e3","name":"Chez Jacques","contact":{"phone":"4146721040","formattedPhone":"(414) 672-1040"},"location":{"address":"1101 S. 1st St.","crossStreet":"at E. Washington St.","lat":43.02051050583108,"lng":-87.91127340402585,"labeledLatLngs":[{"label":"display","lat":43.02051050583108,"lng":-87.91127340402585}],"postalCode":"53204","cc":"US","city":"Milwaukee","state":"WI","country":"United States","formattedAddress":["1101 S. 1st St. (at E. Washington St.)","Milwaukee, WI 53204","United States"]},"categories":[{"id":"4bf58dd8d48988d10c941735","name":"French Restaurant","pluralName":"French Restaurants","shortName":"French","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/food/french_","suffix":".png"},"primary":!0}],"verified":!1,"stats":{"checkinsCount":1296,"usersCount":822,"tipCount":23},"url":"http://www.chezjacques.com/","price":{"tier":2,"message":"Moderate","currency":"$"},"hasMenu":!0,"rating":7.7,"ratingColor":"C5DE35","ratingSignals":57,"menu":{"type":"Menu","label":"Menu","anchor":"View Menu","url":"https://foursquare.com/v/chez-jacques/4ae4934ff964a520d89b21e3/menu","mobileUrl":"https://foursquare.com/v/4ae4934ff964a520d89b21e3/device_menu"},"allowMenuUrlEdit":!0,"beenHere":{"count":0,"marked":!1,"lastCheckinExpiredAt":0},"hours":{"status":"Open until 10:00 PM","isOpen":!0,"isLocalHoliday":!1},"photos":{"count":0,"groups":[]},"hereNow":{"count":0,"summary":"Nobody here","groups":[]}},"tips":[{"id":"4fef310ce4b06418e17287c2","createdAt":1341075724,"text":"This place is so great. Amazing food & the atmosphere I'd what you make it - chill & relaxing or romantic & sweet!","entities":[{"indices":[97,105],"type":"search_match"}],"type":"user","canonicalUrl":"https://foursquare.com/item/4fef310ce4b06418e17287c2","likes":{"count":3,"groups":[],"summary":"3 likes"},"logView":!0,"agreeCount":3,"disagreeCount":0,"todo":{"count":0},"user":{"id":"26501811","firstName":"Clarice","lastName":"Mish","gender":"female","photo":{"prefix":"https://igx.4sqi.net/img/user/","suffix":"/DWMVNPO01D5ODQU2.jpg"}}}],"referralId":"e-0-4ae4934ff964a520d89b21e3-0"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"4afc51faf964a520832122e3","name":"Casablanca","contact":{"phone":"4142716000","formattedPhone":"(414) 271-6000","twitter":"casaonbrady","facebook":"117775294915502","facebookUsername":"CasablancaOnBrady","facebookName":"Casablanca"},"location":{"address":"728 E Brady St","crossStreet":"N Cass St","lat":43.05317886888707,"lng":-87.90259838104248,"labeledLatLngs":[{"label":"display","lat":43.05317886888707,"lng":-87.90259838104248}],"postalCode":"53202","cc":"US","city":"Milwaukee","state":"WI","country":"United States","formattedAddress":["728 E Brady St (N Cass St)","Milwaukee, WI 53202","United States"]},"categories":[{"id":"4bf58dd8d48988d115941735","name":"Middle Eastern Restaurant","pluralName":"Middle Eastern Restaurants","shortName":"Middle Eastern","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/food/middleeastern_","suffix":".png"},"primary":!0}],"verified":!0,"stats":{"checkinsCount":14685,"usersCount":4669,"tipCount":111},"url":"http://www.CasablancaOnBrady.com","price":{"tier":2,"message":"Moderate","currency":"$"},"hasMenu":!0,"rating":8.8,"ratingColor":"73CF42","ratingSignals":389,"menu":{"type":"Menu","label":"Menu","anchor":"View Menu","url":"https://foursquare.com/v/casablanca/4afc51faf964a520832122e3/menu","mobileUrl":"https://foursquare.com/v/4afc51faf964a520832122e3/device_menu"},"allowMenuUrlEdit":!0,"beenHere":{"count":0,"marked":!1,"lastCheckinExpiredAt":0},"hours":{"status":"Open until 2:00 AM","isOpen":!0,"isLocalHoliday":!1},"photos":{"count":0,"groups":[]},"venuePage":{"id":"42895671"},"hereNow":{"count":0,"summary":"Nobody here","groups":[]}},"tips":[{"id":"51100acfe4b01d3a01aa72a6","createdAt":1360005839,"text":"Won 2012 BEST Romantic Restaurant In Milwaukee!!!  This is hands down the best date night spot, nothing else like it!","entities":[{"indices":[14,22],"type":"search_match"}],"type":"user","canonicalUrl":"https://foursquare.com/item/51100acfe4b01d3a01aa72a6","likes":{"count":1,"groups":[],"summary":"1 like"},"logView":!0,"agreeCount":1,"disagreeCount":0,"todo":{"count":1},"user":{"id":"2205185","firstName":"Neveen","lastName":"Musa","gender":"female","photo":{"prefix":"https://irs3.4sqi.net/img/user/","suffix":"/RFDQ24G0NK3QJHB3.jpg"}}}],"referralId":"e-0-4afc51faf964a520832122e3-1"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"4ad5f47af964a5202e0421e3","name":"Hi Hat Garage","contact":{"phone":"4142208090","formattedPhone":"(414) 220-8090","twitter":"hihatloungemke"},"location":{"address":"1709 N Arlington Pl","crossStreet":"at E Brady St.","lat":43.05316906916216,"lng":-87.89510697126389,"postalCode":"53202","cc":"US","city":"Milwaukee","state":"WI","country":"United States","formattedAddress":["1709 N Arlington Pl (at E Brady St.)","Milwaukee, WI 53202","United States"]},"categories":[{"id":"4bf58dd8d48988d116941735","name":"Bar","pluralName":"Bars","shortName":"Bar","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/nightlife/pub_","suffix":".png"},"primary":!0}],"verified":!1,"stats":{"checkinsCount":22567,"usersCount":6870,"tipCount":89},"url":"http://hihatlounge.com/garage/","price":{"tier":2,"message":"Moderate","currency":"$"},"hasMenu":!0,"rating":8.5,"ratingColor":"73CF42","ratingSignals":332,"menu":{"type":"Menu","label":"Menu","anchor":"View Menu","url":"https://foursquare.com/v/hi-hat-garage/4ad5f47af964a5202e0421e3/menu","mobileUrl":"https://foursquare.com/v/4ad5f47af964a5202e0421e3/device_menu"},"allowMenuUrlEdit":!0,"beenHere":{"count":0,"marked":!1,"lastCheckinExpiredAt":0},"hours":{"isOpen":!1,"isLocalHoliday":!1},"photos":{"count":0,"groups":[]},"hereNow":{"count":0,"summary":"Nobody here","groups":[]}},"tips":[{"id":"528942f111d26ac4ba7dba44","createdAt":1384727281,"text":"If you are looking for a place to great a drink that provides a romantic atmosphere this is the place.","entities":[{"indices":[64,72],"type":"search_match"}],"type":"user","canonicalUrl":"https://foursquare.com/item/528942f111d26ac4ba7dba44","logView":!0,"agreeCount":0,"disagreeCount":0,"todo":{"count":0},"user":{"id":"71845107","firstName":"Taylor","lastName":"Smith","gender":"male","photo":{"prefix":"https://igx.4sqi.net/img/user/","suffix":"/blank_boy.png","default":!0}}}],"referralId":"e-0-4ad5f47af964a5202e0421e3-2"},{"reasons":{"count":0,"items":[{"summary":"This spot is popular","type":"general","reasonName":"globalInteractionReason"}]},"venue":{"id":"4ad752dff964a520800921e3","name":"Two","contact":{},"location":{"address":"718 E Burleigh St","crossStreet":"N Pierce St","lat":43.074762,"lng":-87.902078,"labeledLatLngs":[{"label":"display","lat":43.074762,"lng":-87.902078}],"postalCode":"53212","cc":"US","city":"Milwaukee","state":"WI","country":"United States","formattedAddress":["718 E Burleigh St (N Pierce St)","Milwaukee, WI 53212","United States"]},"categories":[{"id":"4bf58dd8d48988d116941735","name":"Bar","pluralName":"Bars","shortName":"Bar","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/nightlife/pub_","suffix":".png"},"primary":!0}],"verified":!1,"stats":{"checkinsCount":625,"usersCount":180,"tipCount":9},"price":{"tier":2,"message":"Moderate","currency":"$"},"rating":7.1,"ratingColor":"C5DE35","ratingSignals":10,"allowMenuUrlEdit":!0,"beenHere":{"count":0,"marked":!1,"lastCheckinExpiredAt":0},"hours":{"isOpen":!1,"isLocalHoliday":!1},"photos":{"count":0,"groups":[]},"hereNow":{"count":0,"summary":"Nobody here","groups":[]}},"tips":[{"id":"50b274c9e4b037e0edc5c270","createdAt":1353872585,"text":"Small, intimate bar that has a nice romantic vibe inside. On a hot date? Try some of the secluded private booths for a little one on one time. Or one on two......we don't judge.","entities":[{"indices":[36,44],"type":"search_match"}],"type":"user","canonicalUrl":"https://foursquare.com/item/50b274c9e4b037e0edc5c270","logView":!0,"agreeCount":0,"disagreeCount":0,"todo":{"count":0},"user":{"id":"38386923","firstName":"Ike","lastName":"Ozurumba","gender":"male","photo":{"prefix":"https://igx.4sqi.net/img/user/","suffix":"/RJFXVZDW2DPAMKFP.jpg"}}}],"referralId":"e-0-4ad752dff964a520800921e3-3"}]}]};
//     expect(FilterByMenu(answer,results)).toEqual(resultsWithMenu);
//   });
// });
