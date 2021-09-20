// import {createRequire} from 'module';
// const require = createRequire(import.meta.url);
// const assert = require('assert');
// const {describe,it} = require('mocha');
import {describe, it} from 'mocha';
import assert from 'assert'
//path for some reason not working properly... even though dir root
import {aLorem360, aLoremObject60, lorem360wordsRaw} from "../../static/multichoice60/lorem360words.mjs";

/**
 *

 * Data structure:
 * question
 * answers
 * iAnswer
 */
//* mocha config off again...
describe('Gen Lorem 60 * (5 + 1)', function(){
  /**
   * Remove new lines '.' ','
   * then copied to file
   * actually less words had to add
   * purus a pharetra Integer
   */
  it('sanitize input', function(){
    //assert.strictEqual(1,1);//require assert
    //lazy in memory way
    const aTmp = lorem360wordsRaw
      .replace(/\n|\.|,/g,'')
      .split(' ');

    // console.log(aTmp)
    assert.strictEqual(aTmp.length,360);//60*(5+1) = 360
  });

  it('aLorem360',function(){
    assert.strictEqual(aLorem360.length,360);
  });


  /**
   * For 60 questions
   * first entry should be

   */
  it('aLorem to oLorem360',function(){
    const ExpectedFirstEntry = {
      question:"Lorem",
      answers:["ipsum", "dolor", "sit", "amet","consectetur"],
      iAnswer:0,//hard coded to 'a' for now
    }
    const aOut60 = [];
    for (let i = 0; i <360; i+=6) {
      const item = aLorem360[i];
      const question = aLorem360[i];
      const answers = aLorem360.slice(i + 1,i + 6);
      // console.log(question);
      // console.log(answers);
      const oTmp = {
        // question:"Lorem",
        // answers:["ipsum", "dolor", "sit", "amet","consectetur"],
        question,
        answers,
        iAnswer:0,//hard coded to 'a' for now

      };
      aOut60.push(oTmp)
    }

    assert.deepStrictEqual(aOut60[0], ExpectedFirstEntry);
    assert.strictEqual(aOut60.length, 60);

    console.log(aOut60);
  });

  it('aLoremObject60',function(){
    assert.strictEqual(aLoremObject60.length,60);
  });


});

/**
 * Import path issues.. so copy pasta
 * null is nuetral
 * success
 * and error
 *
 */
describe('State Test for answers', function(){
  it('Color for right wrong null', function(){
    //assert.strictEqual(1,1);//require assert
    const inputs = [null,0,1];

    //pesky 0 --./. meh dont already kinda hard to make a unit test without fixing my paths


  });

});
