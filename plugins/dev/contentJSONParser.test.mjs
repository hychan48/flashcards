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
 * debugging is here
 * https://content.nuxtjs.org/advanced/
 * might be better to do before insert or something
 *
 * https://content.nuxtjs.org/writing#arrays
 *
 *
 * i believe it's trying to change / deal with nested structures and it's failing
 * {
  "dir": "/",
  "slug": "home",
  "path": "/home",
  "extension": ".json",

  zero namespacing for this

  my guess is it didnt generate a proper slug

  It only supports array when a slug is defined

 */
const fs = require('fs');
import {paramCase} from 'change-case' ;//kebab case
describe('Parse JSON5 $Content', function(){
  it('parseJSONContentFile - add slug', function(){
    //assert.strictEqual(1,1);//require assert
    // const file = fs.readFileSync("content/graphItemShortWorks.json5").toString();
    const file = fs.readFileSync("static/flashcards/static/graphItems.json").toString();
    assert.strictEqual(typeof file,'string');


    const rows = JSON.parse(file);

    assert.strictEqual(
      paramCase(
        'Respiratory Physiology Graphs'
      ),
      'respiratory-physiology-graphs'
    );
    rows.forEach(val =>{
      val.slug = val.slug = paramCase(val.chartTitle);
    });

    assert.strictEqual(
      paramCase(
        // 'Respiratory Physiology Graphs'
        rows[1].chartTitle
      ),
      // 'respiratory-physiology-graphs'
      rows[1].slug
    );

    // console.log(rows[0]);
    fs.writeFileSync("content/tableItemsJSON5.json5",JSON.stringify(rows));




  });

});
