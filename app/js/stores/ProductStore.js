
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

var Store = {};
//Object.assign 會把所有物件屬性併到第一個物件
Object.assign( Store, EventEmitter.prototype, {

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

        
        // case AppConstants.CREATE_PRODUCT:
        // 	allProduct.push( action.item );
        //     console.log(allProduct);
        //     Store.emit( AppConstants.CHANGE_EVENT );
        //     break;
        
        default:
            //
    }

})

module.exports = Store;
