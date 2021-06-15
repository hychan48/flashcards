// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// const assert = require('assert');
// const {describe,it} = require('mocha');
import assert from 'assert';
import { describe, it} from 'mocha';
/*
//mjs file now? and don't need module-alias? if jsconfig?
npm install esm --save-dev
npm install module-alias --save-dev
npm i esm module-alias mocha --save-dev
  "_moduleAliases": {
    "@":"."
  }
-r esm -r module-alias/register

test specific timeout
this.timeout(500);//500ms
*/
// const fs = require('fs');
// console.log(fs);


/**
 * Generate dataset into static in json form
 */
describe('Datasets', function(){
  it('Generate dataset Image', function(){
    //assert.strictEqual(1,1);//require assert
    //title, hint, image, notes (later)
    const SAMPLE = [
      [
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ]
    ]

    assert.strictEqual(1,2)



  });
});
