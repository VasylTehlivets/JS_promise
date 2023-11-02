// Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// import { result } from 'lodash';

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// // Will run first
// console.log('Before promise.then()');

// // Registering promise callbacks
// promise.then(
//   // onResolve will run third or not at all
//   value => {
//     console.log('onResolve call inside promise.then()');
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   // onReject will run third or not at all
//   error => {
//     console.log('onReject call inside promise.then()');
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// // Will run second
// console.log('After promise.then()');

// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;
//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('Success!');
//     } else {
//       reject('Error!');
//     }
//   }, 2000);
// });

// promise.then(
//   result => {
//     console.log(`✅ ${result}`);
//   },
//   error => {
//     console.log(`❌ ${error}`);
//   }
// );

// promise.then(onFulfilled, onRejected);

// function onFulfilled(result) {
//   console.log(`✅ ${result}`);
// }

// function onRejected(error) {
//   console.log(`❌ ${error}`);
// }

//==================================================
//===========Ланцюжки промісів (chaining)===========
//==================================================

// promise
//   .then(result => {
//     console.log(result);
//     return 5;
//   })
//   .then(x => {
//     console.log(x);
//     return 10;
//   })
//   .then(y => {
//     console.log(y);
//   });

//////////////////////////////////////////////
// promise
//   .then(onFulfilled, onRejected)
//   .then(
//     x => {
//       console.log(x);
//       throw new Error('Помилка в другому then');
//       return 10;
//     },
//     error => {
//       console.log(error);
//     }
//   )
//   .then(y => {
//     console.log(y),
//       error => {
//         console.log(error);
//       };
//   });

//////////////////////////////////////////////////////
//======================CATCH======================
// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;
//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('Success!');
//     } else {
//       reject('Error!');
//     }
//   }, 2000);
// });

// function onFulfilled(result) {
//   console.log(`✅ ${result}`);
// }

// function onRejected(error) {
//   console.log(`❌ ${error}`);
// }

// promise
//   .then(onFulfilled)
//   .then(x => {
//     console.log(x);
//     // throw new Error('Помилка в другому then');
//     return 10;
//   })
//   .then(y => {
//     console.log(y);
//   })
//   .catch(error => {
//     console.log(error);
//   });

//////////////////////////////////////////////////////
//=========================FINALLY=======================
// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;
//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('Success!');
//     } else {
//       reject('Error!');
//     }
//   }, 2000);
// });

// function onFulfilled(result) {
//   console.log(`✅ ${result}`);
// }

// function onRejected(error) {
//   console.log(`❌ ${error}`);
// }

// promise
//   .then(onFulfilled)
//   .then(x => {
//     console.log(x);
//     // throw new Error('Помилка в другому then');
//     return 10;
//   })
//   .then(y => {
//     console.log(y);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => console.log('Я буду виконаний завжди'));

//====================================================
//==============ПРОМІСИКАЦІЯ ФУНКЦІЇ==================
//====================================================

// const makeOrder = dish => {
//   const DELAY = 1000;
//   const promise = new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;
//     setTimeout(() => {
//       if (passed) {
//         resolve('Ось ваша страва');
//       }
//       reject('Вибачте, закінчилися продукти');
//     }, DELAY);
//   });
//   return promise;
// };

// const p = makeOrder('пиріжок');
// p.then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

//===================РЕФАКТОРИНГ=================

// const makeOrder = dish => {
//   const DELAY = 1000;
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;
//     setTimeout(() => {
//       if (passed) {
//         resolve(`✅ Ось ваша страва: ${dish}`);
//       }
//       reject('❌ Вибачте, закінчилися продукти');
//     }, DELAY);
//   });
// };

// makeOrder('пиріжок').then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

//==================ПОЧАТКОВА ФУНКЦІЯ БЕЗ ПРОМІСІВ=========================
//========================РОБИМО ПРОМІКСИ==========================

// const makeOrder = (dish, onSuccess, oNError) => {
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     if (passed) {
//       resolve(`✅ Ось ваша страва: ${dish}`);
//     }
//     reject('❌ Вибачте, закінчилися продукти');
//   });
// };

// makeOrder('пиріжок').then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

////////////////////Promise.resolve()/////////////////////////////

// const makeOrder = dish => {
//   return Promise.resolve(`✅ Ось ваша страва: ${dish}`);
// };

// makeOrder('пиріжок').then(onMakeOrderSuccess);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

///////////////////////////////////////////////////
//================POKEMON========================
///////////////////////////////////////////////////

// const fetchPokemonByID = id => {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then(r => r.json())
//     .then(pokemon => {
//       console.log(pokemon);
//     })
//     .catch(error => {
//       console.log('Це в catch');
//       console.log(error);
//     });
// };

// fetchPokemonByID(1);
// fetchPokemonByID(2);
// fetchPokemonByID(3);

////////////////////////////////////////////////////////////////

// const fetchPokemonByID = (id, onSuccess, onError) => {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then(r => r.json())
//     .then(pokemon => {
//       onSuccess(pokemon);
//     })
//     .catch(error => {
//       console.log('Це в catch');
//       onError(error);
//     });
// };

// fetchPokemonByID(1, onFetchSuccess, onFetchError);

// function onFetchSuccess(pokemon) {
//   console.log('onFetchSuccess -> onFetchSuccess');
//   console.log(pokemon);
// }

// function onFetchError(error) {
//   console.log('onFetchError -> onFetchError');
//   console.log('Це в catch');
//   console.log(error);
// }

////////////////////////////////////////////////////////

// const fetchPokemonByID = id => {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
// };

// fetchPokemonByID(1).then(onFetchSuccess).catch(onFetchError);
// fetchPokemonByID(2).then(onFetchSuccess).catch(onFetchError);
// fetchPokemonByID(3).then(onFetchSuccess).catch(onFetchError);

// function onFetchSuccess(pokemon) {
//   console.log('onFetchSuccess -> onFetchSuccess');
//   console.log(pokemon);
// }

// function onFetchError(error) {
//   console.log('onFetchError -> onFetchError');
//   console.log('Це в catch');
//   console.log(error);
// }

//================ПРАКТИКА===================
// const makePromise = () => {
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;
//     setTimeout(() => {
//       if (passed) {
//         resolve('✅ Це resolve');
//       }
//       reject('❌ Це reject');
//     }, 2000);
//   });
// };

// makePromise()
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

//====================================================
//====================================================
//=================== ІПОДРОМ ========================
//===================================================
//====================================================

const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

let raceCounter = 0;
const refs = {
  startBtn: document.querySelector('.js-start-race'),
  winnerField: document.querySelector('.js-winner'),
  progressfield: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-results-table >tbody'),
};

refs.startBtn.addEventListener('click', onStart);

function onStart() {
  raceCounter += 1;
  const promises = horses.map(run);

  updateWinnerField('');

  updateProgressField('🤖 Заезд начался, ставки не принимаются!');

  determineWinner(promises);

  waitForAll(promises);
}

function determineWinner(horsesP) {
  Promise.race(horsesP).then(({ horse, time }) => {
    updateWinnerField(`🎉 Победил ${horse}, финишировав за ${time} времени`);
    updateResultsTable({ horse, time, raceCounter });
  });
}

function waitForAll(horsesP) {
  Promise.all(horsesP).then(() => {
    updateProgressField(' 📝 Заезд окончен, принимаются ставки.');
  });
}

function updateWinnerField(message) {
  refs.winnerField.textContent = message;
}

function updateProgressField(message) {
  refs.progressfield.textContent = message;
}

function updateResultsTable({ horse, time, raceCounter }) {
  const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
  refs.tableBody.insertAdjacentHTML('beforeend', tr);
}

function run(horse) {
  return new Promise(resolve => {
    const time = getRandomTime(2000, 3500);
    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
