export const initialState = {
    basket: [],
    user: null,
}

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

export const getTotal = (basket) => {
    let i = 0
    basket.forEach(element => {
        i += element.price
    });
    console.log(i)
    return i
}

const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state, 
                basket: [...state.basket, action.item]
            };
        
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                basket: state.basket.filter(item => item.id != action.id)
            }
        case 'REMOVE':
            const index = state.basket.findIndex(
                (basketitem) => basketitem.id == action.id
            );
            let newBasket = [...state.basket]

            if (index >= 0) {
                newBasket.splice(index,1);
            }
            else {
                console.warn(
                    `cant remove product (id: ${action.id}) not in basket`
                )
            }
            return {
                ...state,
                basket: newBasket
            }

        default:
            return state;    
    }
};

export default reducer;