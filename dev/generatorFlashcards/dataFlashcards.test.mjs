import {createRequire} from 'module';
// const assert = require('assert');
// const {describe,it} = require('mocha');
import {describe, it} from 'mocha';

const require = createRequire(import.meta.url);
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
const fs = require('fs');
// console.log(fs);


/**
 * Generate dataset into static in json form

 https://ketaminenightmares.com/pex/other/memorisation_material/graphs/cardiovascular_physiology_graphs.htm
 $$('span').map(val => val.textContent).filter(val => /\w+/g.test(val))

 $$('img').map(val => val.src)
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

    const texts = ["Cardiovascular Physiology Graphs", "Aortic vs radial waveform",
      "Coronary blood flow", "LV pressure-volume loop", "Wigger’s diagramme",
      "Note the LV and aortic pressure waveforms are\n  frequently drawn incorrectly.",
      "Pacemaker action potential", "Ventricular myocyte action\n  potential", "Pulmonary vascular\n  resistance",
      "Venous return and cardiac\n  output curves", "Cardiac output\n  thermodilution"
    ];
    texts.shift()
    const imgURls = ["https://ketaminenightmares.com/pex/other/memorisat…rdiovascular_physiology_graphs_files/image001.jpg", "https://ketaminenightmares.com/pex/other/memorisat…rdiovascular_physiology_graphs_files/image002.jpg", "https://ketaminenightmares.com/pex/other/memorisat…rdiovascular_physiology_graphs_files/image003.jpg", "https://ketaminenightmares.com/pex/other/memorisat…rdiovascular_physiology_graphs_files/image004.jpg", "https://ketaminenightmares.com/pex/other/memorisat…rdiovascular_physiology_graphs_files/image005.jpg", "https://ketaminenightmares.com/pex/other/memorisat…rdiovascular_physiology_graphs_files/image006.jpg", "https://ketaminenightmares.com/pex/other/memorisat…rdiovascular_physiology_graphs_files/image007.jpg", "https://ketaminenightmares.com/pex/other/memorisat…rdiovascular_physiology_graphs_files/image008.jpg", "https://ketaminenightmares.com/pex/other/memorisat…rdiovascular_physiology_graphs_files/image009.jpg", "https://ketaminenightmares.com/pex/other/memorisat…rdiovascular_physiology_graphs_files/image010.jpg", "https://ketaminenightmares.com/pex/other/memorisat…rdiovascular_physiology_graphs_files/image011.jpg"]

    const aOut = [];
    for (let i = 0; i < texts.length; i++) {
      const text = texts[i];
      const imgURL = imgURls[i];

      const tmp = {
        i,
        index:i+1,
        title:text,
        url:imgURL

      };
      aOut.push(tmp);
    }

    const jsonOut = JSON.stringify(aOut,null,2);
    // const jsonOut = JSON.stringify(aOut,null,2);
    fs.writeFileSync("static/flashcards/gen/dv1.js", jsonOut);

    // assert.strictEqual(1,2)



  });
});
