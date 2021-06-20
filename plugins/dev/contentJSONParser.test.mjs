import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const assert = require('assert');
// const {describe,it} = require('mocha');
// import assert from 'assert';
import { describe, it} from 'mocha';
/*
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

/**
 * https://content.nuxtjs.org/displaying
 *
 * i believe it's trying to change / deal with nested structures and it's failing
 */
const fs = require('fs');
describe('Parse JSON5 $Content', function(){
  it('parseJSONContentFile', function(){
    //assert.strictEqual(1,1);//require assert
    const file = fs.readFileSync("content/graphItemShortWorks.json5").toString();
    assert.strictEqual(typeof file,'string');






  });

});
