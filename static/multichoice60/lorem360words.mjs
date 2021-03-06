export const lorem360wordsRaw = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget tincidunt ex, non tristique nulla. Maecenas condimentum libero eget dui ultrices auctor. In non leo ac sapien dapibus ornare a egestas massa. Praesent quis magna et nulla scelerisque dapibus sed sed odio. Nulla in sem vitae nulla rutrum vestibulum sed id eros. Donec ultrices ipsum ac risus mattis, quis ullamcorper felis hendrerit. Nam pharetra turpis id odio lobortis porttitor. Sed id elit ut lacus finibus rutrum. Mauris volutpat massa felis, a sollicitudin arcu convallis at. Mauris odio turpis, consequat et auctor id, imperdiet vitae leo. Proin arcu lacus, eleifend eu gravida in, aliquam nec augue. Mauris eget dapibus eros.

Praesent ornare libero quis viverra imperdiet. Aliquam porttitor vestibulum orci, sed consectetur dui scelerisque ut. Quisque sagittis metus id massa viverra tincidunt. Ut aliquam pulvinar leo, non dignissim quam vehicula bibendum. Sed auctor dapibus purus, id suscipit diam tincidunt eu. Sed vulputate facilisis purus a pharetra. Integer ultrices a orci in tempus. Duis non aliquet nisi, aliquet laoreet ipsum. Donec mattis, justo et tristique tincidunt, sem diam tristique mauris, quis gravida enim diam eget lorem. Quisque id viverra elit. Maecenas lectus odio, aliquam ut vestibulum ultricies, finibus vel nisi. Integer aliquam sollicitudin mauris ac molestie. Etiam aliquet ipsum sed faucibus imperdiet. Curabitur elementum rhoncus ligula, ut varius leo laoreet ut. Nulla facilisi.

Sed eu vehicula orci, rhoncus placerat nisi. Ut laoreet euismod sem, non consequat magna volutpat et. Morbi hendrerit ante eu ante vehicula sagittis. Etiam maximus, eros nec aliquam dictum, risus lacus dignissim augue, luctus dapibus purus magna vitae tortor. Mauris suscipit dolor quis est volutpat, dictum auctor libero rutrum. Etiam quis enim leo. Duis malesuada risus ut erat blandit, a ullamcorper ante dictum. Donec fringilla justo diam, ut maximus est interdum quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque nec congue velit. Phasellus rhoncus, diam et rhoncus mattis, elit turpis efficitur diam, sed mattis dui libero vitae tortor. Curabitur ac lacus sed odio bibendum finibus.

Cras non odio quis enim blandit tincidunt. Aenean efficitur tortor sed metus pellentesque commodo. Donec ultricies sodales velit, quis faucibus felis ornare at. In condimentum ligula vel odio rhoncus facilisis.

purus a pharetra Integer
`;

//unit tested:
export const aLorem360 = lorem360wordsRaw
  .replace(/\n|\.|,/g,'')
  .split(' ');

export const aLoremObject60 = [
  {
    question: 'Lorem',
    answers: [ 'ipsum', 'dolor', 'sit', 'amet', 'consectetur' ],
    iAnswer: 0
  },
    {
      question: 'adipiscing',
      answers: [ 'elit', 'Pellentesque', 'eget', 'tincidunt', 'ex' ],
      iAnswer: 0
    },
    {
      question: 'non',
      answers: [ 'tristique', 'nulla', 'Maecenas', 'condimentum', 'libero' ],
      iAnswer: 0
    },
    {
      question: 'eget',
      answers: [ 'dui', 'ultrices', 'auctor', 'In', 'non' ],
      iAnswer: 0
    },
    {
      question: 'leo',
      answers: [ 'ac', 'sapien', 'dapibus', 'ornare', 'a' ],
      iAnswer: 0
    },
    {
      question: 'egestas',
      answers: [ 'massa', 'Praesent', 'quis', 'magna', 'et' ],
      iAnswer: 0
    },
    {
      question: 'nulla',
      answers: [ 'scelerisque', 'dapibus', 'sed', 'sed', 'odio' ],
      iAnswer: 0
    },
    {
      question: 'Nulla',
      answers: [ 'in', 'sem', 'vitae', 'nulla', 'rutrum' ],
      iAnswer: 0
    },
    {
      question: 'vestibulum',
      answers: [ 'sed', 'id', 'eros', 'Donec', 'ultrices' ],
      iAnswer: 0
    },
    {
      question: 'ipsum',
      answers: [ 'ac', 'risus', 'mattis', 'quis', 'ullamcorper' ],
      iAnswer: 0
    },
    {
      question: 'felis',
      answers: [ 'hendrerit', 'Nam', 'pharetra', 'turpis', 'id' ],
      iAnswer: 0
    },
    {
      question: 'odio',
      answers: [ 'lobortis', 'porttitor', 'Sed', 'id', 'elit' ],
      iAnswer: 0
    },
    {
      question: 'ut',
      answers: [ 'lacus', 'finibus', 'rutrum', 'Mauris', 'volutpat' ],
      iAnswer: 0
    },
    {
      question: 'massa',
      answers: [ 'felis', 'a', 'sollicitudin', 'arcu', 'convallis' ],
      iAnswer: 0
    },
    {
      question: 'at',
      answers: [ 'Mauris', 'odio', 'turpis', 'consequat', 'et' ],
      iAnswer: 0
    },
    {
      question: 'auctor',
      answers: [ 'id', 'imperdiet', 'vitae', 'leo', 'Proin' ],
      iAnswer: 0
    },
    {
      question: 'arcu',
      answers: [ 'lacus', 'eleifend', 'eu', 'gravida', 'in' ],
      iAnswer: 0
    },
    {
      question: 'aliquam',
      answers: [ 'nec', 'augue', 'Mauris', 'eget', 'dapibus' ],
      iAnswer: 0
    },
    {
      question: 'erosPraesent',
      answers: [ 'ornare', 'libero', 'quis', 'viverra', 'imperdiet' ],
      iAnswer: 0
    },
    {
      question: 'Aliquam',
      answers: [ 'porttitor', 'vestibulum', 'orci', 'sed', 'consectetur' ],
      iAnswer: 0
    },
    {
      question: 'dui',
      answers: [ 'scelerisque', 'ut', 'Quisque', 'sagittis', 'metus' ],
      iAnswer: 0
    },
    {
      question: 'id',
      answers: [ 'massa', 'viverra', 'tincidunt', 'Ut', 'aliquam' ],
      iAnswer: 0
    },
    {
      question: 'pulvinar',
      answers: [ 'leo', 'non', 'dignissim', 'quam', 'vehicula' ],
      iAnswer: 0
    },
    {
      question: 'bibendum',
      answers: [ 'Sed', 'auctor', 'dapibus', 'purus', 'id' ],
      iAnswer: 0
    },
    {
      question: 'suscipit',
      answers: [ 'diam', 'tincidunt', 'eu', 'Sed', 'vulputate' ],
      iAnswer: 0
    },
    {
      question: 'facilisis',
      answers: [ 'purus', 'a', 'pharetra', 'Integer', 'ultrices' ],
      iAnswer: 0
    },
    {
      question: 'a',
      answers: [ 'orci', 'in', 'tempus', 'Duis', 'non' ],
      iAnswer: 0
    },
    {
      question: 'aliquet',
      answers: [ 'nisi', 'aliquet', 'laoreet', 'ipsum', 'Donec' ],
      iAnswer: 0
    },
    {
      question: 'mattis',
      answers: [ 'justo', 'et', 'tristique', 'tincidunt', 'sem' ],
      iAnswer: 0
    },
    {
      question: 'diam',
      answers: [ 'tristique', 'mauris', 'quis', 'gravida', 'enim' ],
      iAnswer: 0
    },
    {
      question: 'diam',
      answers: [ 'eget', 'lorem', 'Quisque', 'id', 'viverra' ],
      iAnswer: 0
    },
    {
      question: 'elit',
      answers: [ 'Maecenas', 'lectus', 'odio', 'aliquam', 'ut' ],
      iAnswer: 0
    },
    {
      question: 'vestibulum',
      answers: [ 'ultricies', 'finibus', 'vel', 'nisi', 'Integer' ],
      iAnswer: 0
    },
    {
      question: 'aliquam',
      answers: [ 'sollicitudin', 'mauris', 'ac', 'molestie', 'Etiam' ],
      iAnswer: 0
    },
    {
      question: 'aliquet',
      answers: [ 'ipsum', 'sed', 'faucibus', 'imperdiet', 'Curabitur' ],
      iAnswer: 0
    },
    {
      question: 'elementum',
      answers: [ 'rhoncus', 'ligula', 'ut', 'varius', 'leo' ],
      iAnswer: 0
    },
    {
      question: 'laoreet',
      answers: [ 'ut', 'Nulla', 'facilisiSed', 'eu', 'vehicula' ],
      iAnswer: 0
    },
    {
      question: 'orci',
      answers: [ 'rhoncus', 'placerat', 'nisi', 'Ut', 'laoreet' ],
      iAnswer: 0
    },
    {
      question: 'euismod',
      answers: [ 'sem', 'non', 'consequat', 'magna', 'volutpat' ],
      iAnswer: 0
    },
    {
      question: 'et',
      answers: [ 'Morbi', 'hendrerit', 'ante', 'eu', 'ante' ],
      iAnswer: 0
    },
    {
      question: 'vehicula',
      answers: [ 'sagittis', 'Etiam', 'maximus', 'eros', 'nec' ],
      iAnswer: 0
    },
    {
      question: 'aliquam',
      answers: [ 'dictum', 'risus', 'lacus', 'dignissim', 'augue' ],
      iAnswer: 0
    },
    {
      question: 'luctus',
      answers: [ 'dapibus', 'purus', 'magna', 'vitae', 'tortor' ],
      iAnswer: 0
    },
    {
      question: 'Mauris',
      answers: [ 'suscipit', 'dolor', 'quis', 'est', 'volutpat' ],
      iAnswer: 0
    },
    {
      question: 'dictum',
      answers: [ 'auctor', 'libero', 'rutrum', 'Etiam', 'quis' ],
      iAnswer: 0
    },
    {
      question: 'enim',
      answers: [ 'leo', 'Duis', 'malesuada', 'risus', 'ut' ],
      iAnswer: 0
    },
    {
      question: 'erat',
      answers: [ 'blandit', 'a', 'ullamcorper', 'ante', 'dictum' ],
      iAnswer: 0
    },
    {
      question: 'Donec',
      answers: [ 'fringilla', 'justo', 'diam', 'ut', 'maximus' ],
      iAnswer: 0
    },
    {
      question: 'est',
      answers: [ 'interdum', 'quis', 'Interdum', 'et', 'malesuada' ],
      iAnswer: 0
    },
    {
      question: 'fames',
      answers: [ 'ac', 'ante', 'ipsum', 'primis', 'in' ],
      iAnswer: 0
    },
    {
      question: 'faucibus',
      answers: [ 'Quisque', 'nec', 'congue', 'velit', 'Phasellus' ],
      iAnswer: 0
    },
    {
      question: 'rhoncus',
      answers: [ 'diam', 'et', 'rhoncus', 'mattis', 'elit' ],
      iAnswer: 0
    },
    {
      question: 'turpis',
      answers: [ 'efficitur', 'diam', 'sed', 'mattis', 'dui' ],
      iAnswer: 0
    },
    {
      question: 'libero',
      answers: [ 'vitae', 'tortor', 'Curabitur', 'ac', 'lacus' ],
      iAnswer: 0
    },
    {
      question: 'sed',
      answers: [ 'odio', 'bibendum', 'finibusCras', 'non', 'odio' ],
      iAnswer: 0
    },
    {
      question: 'quis',
      answers: [ 'enim', 'blandit', 'tincidunt', 'Aenean', 'efficitur' ],
      iAnswer: 0
    },
    {
      question: 'tortor',
      answers: [ 'sed', 'metus', 'pellentesque', 'commodo', 'Donec' ],
      iAnswer: 0
    },
    {
      question: 'ultricies',
      answers: [ 'sodales', 'velit', 'quis', 'faucibus', 'felis' ],
      iAnswer: 0
    },
    {
      question: 'ornare',
      answers: [ 'at', 'In', 'condimentum', 'ligula', 'vel' ],
      iAnswer: 0
    },
    {
      question: 'odio',
      answers: [ 'rhoncus', 'facilisispurus', 'a', 'pharetra', 'Integer' ],
      iAnswer: 0
    }
  ];

