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
  constructor(slugKey='chartTitle',filePathDir='content/') {
    // this.filePathIn = filePathIn;
    this.slugKey = slugKey;
    this.filePathDir = filePathDir;
  }

  /**
   * Creates files
   * 1. gen folder to minified json and slug
   *
   *
   */
  exportFileIntoContents(filePathIn){
    // can optimize to stream later
    const rows = JSON.parse(fs.readFileSync(filePathIn));
    const filename = GenToContentsTest.getFilename(filePathIn)

    rows.forEach(val =>{
      val.slug = val.slug = paramCase(val[this.slugKey]);
    });


    fs.writeFileSync(this.filePathDir + filename,JSON.stringify(rows));
  }

  static getFilename(filepath){
    return path.parse(filepath).base;
  }
}
/** main */
describe('Generator JSON to $content file to be used', function(){
  const filePaths = [
    "static/flashcards/static/graphItems.json",
    "static/flashcards/static/tableItems.json",

  ];
  const GRAPH_ITEM = filePaths[0];
  const gtct = new GenToContentsTest()

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
    assert.strictEqual(GenToContentsTest.getFilename(GRAPH_ITEM),'graphItems.json');//require assert
  });

  it('exportFileIntoContents', function(){
    filePaths.forEach(file =>{
      // gtct.exportFileIntoContents(GRAPH_ITEM)
      gtct.exportFileIntoContents(file)
    })

  });
});
