import axios from "axios"



const initialstate = {
  Products: [],
  Singleproduct: [],
  Cart: [],
  log: false,
  showlogin: false
}

export const Fetchproducts = (data) => ({ type: "Getproducts", payload: data })

export const Details = (id) => async (dispatch) => {
  let single = await axios.get(`https://course-api.com/react-store-single-product?id=${id}`)
  //  console.log(single.data)
  dispatch({ type: "Details", payload: single.data })
}

export const AddtoCart = (qty, id) => ({ type: "Addtocart", payload: { quantity: qty, data: id } })

export const Counterincrease = (id) => ({ type: "increasecount", payload: id })

export const Counterdecrease = (id) => ({ type: "decreasecount", payload: id })

export const Delcart = (id) => ({ type: "del", payload: id })

export const changelog = (state) => ({ type: "change", payload: state })

export const showlogin = (state) => ({ type: "showlogin", payload: state })

export const Reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "Getproducts":
      return {
        ...state,
        Products: action.payload
      }
    case "Details":
      return {
        ...state,
        Singleproduct: [action.payload]
      }
    case "Addtocart":
      if (action.payload.data === -1) {
        return {
          ...state,
          Cart: []
        }
      } else {

        let exist = state.Cart.find(ele => (ele.id === action.payload.data))

        if (exist) {
          let allCart = state.Cart.map(items => items.id === action.payload.data ? ({ ...items, qty: items.qty + action.payload.quantity }) : (items))
          return {
            ...state,
            Cart: allCart
          }
        } else {
          let FindCart = state.Products.find(ele => (ele.id === action.payload.data))
          return {
            ...state,
            Cart: [...state.Cart, { ...FindCart, qty: action.payload.quantity }]
          }

        }
      }
    case "increasecount":
      return {
        ...state,
        Cart: state.Cart.map(ele => ele.id === action.payload ? ({ ...ele, qty: ele.qty + 1 }) : (ele))
      }
    case "decreasecount":
      return {
        ...state,
        Cart: state.Cart.map(ele => ele.id === action.payload ? ({ ...ele, qty: ele.qty <= 1 ? 1 : ele.qty - 1 }) : (ele))
      }
    case "del":
      return {
        ...state,
        Cart: state.Cart.filter(ele => (ele.id !== action.payload))
      }
    case "change":
      return {
        ...state,
        log: action.payload
      }
    case "showlogin":
      return {
        ...state,
        showlogin: action.payload
      }

    default:
      return state
  }
} 