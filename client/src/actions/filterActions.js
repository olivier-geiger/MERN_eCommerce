// import axios from 'axios';

// import {
//   PRODUCT_LIST_REQUEST,
//   PRODUCT_LIST_SUCCESS,
//   PRODUCT_LIST_FAIL,
// } from '../constants/filterConstants';

// export const listPoducts = (searchKey, sortKey, category) => async dispatch => {

//   try {
//     let filteredProducts;
//     dispatch({ type: PRODUCT_LIST_REQUEST });
//     const { data } = await axios.get('/api/v1/products');

//     if (searchKey) {
//       filteredProducts = data.filter(product => {
//         return product.name.toLowerCase().includes(searchKey);
//       });
//     }

//     if (sortKey !== 'popular') {
//       if (sortKey === 'htl') {
//         filteredProducts = data.sort((a, b) => {
//           return -a.price + b.price;
//         });
//       } else {
//         filteredProducts = data.sort((a, b) => {
//           return a.price - b.price;
//         });
//       }
//     }

//     if (category !== 'all') {
//       filteredProducts = data.filter(product => {
//         return product.category.toLowerCase().includes(category);
//       });
//     }

//     dispatch({ type: PRODUCT_LIST_SUCCESS, payload: filteredProducts });
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_LIST_FAIL,
//       payload: 'Une erreur est survenue!',
//     });
//   }
// };
