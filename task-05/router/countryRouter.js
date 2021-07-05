const carController = require('../controller/countryController');

/**
 * 1. Készíts egy router objektumot, ami a get kulcsnál meghívja a carController 
 * getAll nevű metódusát és string típusként visszaadja az adatok tömbjét.
 */

const router = {
  'get': async (res) => {
    const list = await carController.getAll();
    return res.end( JSON.stringify(list, null, 4) );
  }
}

/**
 * 2. A module az előző pontnál elkészített router objektumot adja vissza.
 */
module.exports = {
  router
}
