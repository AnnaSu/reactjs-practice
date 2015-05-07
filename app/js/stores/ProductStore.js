
//========================================================================
//
// IMPORT

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

// var objectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter; // 取得一個 pub/sub 廣播器

//========================================================================
//
// Public API
// 自定義Data
// window.uid = 0;
// var allProduct = [
//     { 
//         Name: 'test',
//         Price: 1000,
//         uid: window.uid++
//     }
// ];

    var pageTitle="新增商品";
    window.uid=0;
    var productCart=[{productId:window.uid++,productName:'商品1',productPrice:10000,productAmount:3}];


var Store = {};
//Object.assign 會把所有物件屬性併到第一個物件
Object.assign( Store, EventEmitter.prototype, {
    getData: function(){
        return {
            pageTitle: pageTitle,
            pageUserName: "annaSu",
            productCart: productCart
        }
    }

    // getAll: function(){
    //     return {
    //         allProduct: allProduct
            
    //     }
    // },

});

//========================================================================
//
// event handlers

Store.dispatchToken = AppDispatcher.register( function eventHandlers(event){

    // evt .action 就是 view 當時廣播出來的整包物件
    // 它內含 actionType
    var action = event.action;

    switch (action.actionType) {

        
        case AppConstants.CREATE_PRODUCT:
        	productCart.push( action.item );
            Store.emit( AppConstants.CHANGE_EVENT );
            break;

        case AppConstants.DEL_PRODUCT:
            console.log('store');
            console.log(action.index);
            productCart.splice(action.index,1);

            console.log(productCart);
            Store.emit( AppConstants.CHANGE_EVENT );
            break;

        default:
            //
    }

})

module.exports = Store;
