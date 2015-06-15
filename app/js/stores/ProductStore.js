
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
    var productCart=[
        {   productId:window.uid++, 
            productName:'商品1', 
            productPrice:10000, 
            productAmount:3,
            imageUrl:'./assets/images/1.jpg',
            show: true
        },
        {   productId:window.uid++, 
            productName:'商品2', 
            productPrice:3000, 
            productAmount:3,
            imageUrl:'./assets/images/2.jpg',
            show: false
        },
        {   productId:window.uid++, 
            productName:'商品3', 
            productPrice:5000, 
            productAmount:3,
            imageUrl:'./assets/images/3.jpg',
            show: false
        },
        {   productId:window.uid++, 
            productName:'商品4', 
            productPrice:8000, 
            productAmount:3,
            imageUrl:'./assets/images/4.jpg',
            show: false
        }
    ];
    var brands=[
    {
        name: 'Anna',
        value: 1
    },
    {
        name: 'Jerry',
        value: 2
    }];

var Store = {};
//Object.assign 會把所有物件屬性併到第一個物件
Object.assign( Store, EventEmitter.prototype, {
    getData: function(){
        return {
            pageTitle: pageTitle,
            pageUserName: "annaSu",
            productCart: productCart,
            brands: brands
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
            productCart.splice(action.index, 1);
            Store.emit( AppConstants.CHANGE_EVENT );
            break;
        case AppConstants.SLIDER_NEXT:
            console.log(action.index);
            if(action.index < 0){
                action.index = productCart.length-1;
            }else if(action.index > productCart.length-1){
                action.index = 0;
            }
            for(let i = 0;i < productCart.length;i = i+1){
                if(i === action.index){
                    productCart[i].show = true;
                }else{
                   productCart[i].show = false;
                }
            }
            Store.emit( AppConstants.CHANGE_EVENT );
            break;
        default:
            //
    }

})

module.exports = Store;
