/**
 * related to plugins/dev/contentJSONParser.test.mjs
 */
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
// const assert = require('assert');
// const {describe,it} = require('mocha');
import assert from 'assert';
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


import {paramCase} from "change-case";
import fs from "fs";
const path = require('path');
/**
 * chartTitle to slug for $content
 * $content doesnt automatically add a slug...
 * perhaps extract this as a raw js package later
 */
class GenToContentsTest {
  //why is this even a class?
  constructor(filePathIn,slugKey='chartTitle',filePathDir='content/') {
    this.filePathIn = filePathIn;
    this.slugKey = slugKey;
    this.filePathDir = filePathDir;
  }

  /**
   * Creates files
   */
  main(){
    // can optimize to stream later
    const inFile = fs.readFileSync(this.filePathIn);



    fs.writeFileSync("content/tableItemsJSON5.json5",JSON.stringify(rows));
  }

  get filename(){
    return path.parse(this.filePathIn).base;
  }
}
/** main */
describe('Generator JSON to $content file to be used', function(){
  const gtct = new GenToContentsTest("static/flashcards/static/graphItems.json")

  /**
   * + {
+   base: 'graphItems.json',
+   dir: 'static/flashcards/static',
+   ext: '.json',
+   name: 'graphItems',
+   root: ''
+ }
   */
  it('getFileName', function(){
    assert.strictEqual(gtct.filename,'graphItems.json');//require assert

  });
});
