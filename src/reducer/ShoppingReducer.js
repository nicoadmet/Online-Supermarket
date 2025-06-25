import { TYPES } from "../actions/ShoppingActions";

export const shoppingInitialState = {      
    products : [
        {
          id: 1 ,
          img: "https://img.freepik.com/fotos-premium/aguacate-aislado-blanco_62856-4854.jpg",
          title: "Palta",
          precio: 2590,
        },
        {
          id: 2,
          img: "https://cdnx.jumpseller.com/newen-verde1/image/33398731/resize/1280/1280?1679678128",
          title: "Tomate",
          precio: 679,
        },
        {
          id: 3,
          img: "https://www.novaplaza.com.pe/wp-content/uploads/2023/02/Mesa-de-trabajo-2-11.jpg",
          title: "Uva",
          precio: 663,
      
        },
        {
          id: 4,
          img: "https://mlcvkocrfpoo.i.optimole.com/w:1200/h:1200/q:mauto/rt:fill/g:ce/el:1/f:avif/https://www.ecooperativas.com/wp-content/uploads/2021/02/naranja-de-campo.jpg",
          title: "Naranja",
          precio: 700,
          
      
        },
        {
          id: 5,
          img: "https://tofuu.getjusto.com/orioneat-prod/jvkzb3y6tvAJcf7Dq-H-Oregano-Albahaca.png",
          title: "Pan",
          precio: 450,
      
        },
      ],

    cart: [ ],

    cartPrice : 0 ,
    cartCount: 0,

}

export function shoppingReducer (state , action) {
    switch (action.type) {

        case TYPES.READ_STATE : {
            return {
                ...state,
                products: action.payload[0],
                cart: action.payload[1],
                cartPrice: action.payload[1],
                cartCount: action.payload[1]
            }
        }
        case TYPES.ADD_TO_CART : {
            let newItem = state.products.find( (product) => product.id === action.payload); //newItem es igual a comparar si en la lista de productos hay alguno que coincida con el id del boton apretado

            let itemInCart = state.cart.find ( (item) => item.id === newItem.id);        //itemInCart es igual a comparar si el id de los productos del carrito coincide con newItem
            console.log(newItem);
            
            return itemInCart       
            ? {                                     //si el find encuentra algo, hace esto
                ...state,
                cart: state.cart.map((item) =>      //va a mapear todos los elementos del carrito, pero va a comparar si el id del elemento coincide con el de newItem
                    item.id === newItem.id
                    ? { ...item , quantity: item.quantity + 1, subtotal: item.precio * (item.quantity + 1) }  //si coincide, mapea el item y suma uno a quantity
                    : item                                      //si no coinicde, mapea item sin cambios
                    ),
                cartPrice: state.cartPrice + newItem.precio, //actualiza el precio del carrito. es igual en ambos casos
                cartCount: state.cartCount + 1
                }
            :{                                     //si el find no encuentra nada, hace esto
                ...state,       //guardar una copia del estado
                cart : [...state.cart , {...newItem, quantity: 1 , subtotal: newItem.precio }],                    
                cartPrice: state.cartPrice + newItem.precio,
                cartCount: state.cartCount + 1
                }
                              
            
        }; 
        
    
        case TYPES.REMOVE_ONE_PRODUCT: {
            let itemToDelete = state.cart.find((item) => item.id === action.payload) ;

            return itemToDelete.quantity > 1
            ? {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload
                ? { ...item, quantity: item.quantity - 1, subtotal: item.precio * (item.quantity - 1)}
                : item
                ),
                cartPrice: state.cartPrice - itemToDelete.precio,    //actualiza el precio del carrito. es igual en ambos casos porque solo elimina un producto
                cartCount: state.cartCount - 1
            }
            : {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
                cartPrice: state.cartPrice - itemToDelete.precio,
                cartCount: state.cartCount - 1
            };
        }
        case TYPES.REMOVE_ALL_PRODUCTS : {
            let itemToRemove = state.cart.find((item)=>item.id===action.payload);   //hay que inventar esta variable para poder eliminar el valor del carrito
            return {
                ...state,
                cartPrice: state.cartPrice - (itemToRemove.precio * itemToRemove.quantity), //hay que restar el precio del carrito antes de eliminar los productos
                cartCount: state.cartCount - itemToRemove.quantity,
                cart: state.cart.filter(item => item.id !== action.payload)

            }
        }
        case TYPES.CLEAR_CART : {
            return shoppingInitialState;
        }
        default:            
        return state;
    } 
}


