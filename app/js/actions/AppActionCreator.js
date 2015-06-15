//載入Dispatcher

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');


var AppActionCreators = {
    //範例   
        addProduct: function(item){
            AppDispatcher.handleViewAction({
                actionType: AppConstants.CREATE_PRODUCT,
                item: item
            });
        },
        delProduct: function(index){
        	AppDispatcher.handleViewAction({
                actionType: AppConstants.DEL_PRODUCT,
                index: index
            });
            console.log('action');
        },
        sliderNext:function(index){
            console.log(index); 
            AppDispatcher.handleViewAction({
                actionType: AppConstants.SLIDER_NEXT,
                index: index
            });
        }
    

};


module.exports = AppActionCreators;
