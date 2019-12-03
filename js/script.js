const KEY_TYPES = {
  alphabet: 0,
  vowelAfter: 1,
  vowelBefore: 2,
  number: 3
};

const keyMaps = {
  'ก': {original: 'ก', result: 'क', type: KEY_TYPES.alphabet},
  'ข': {original: 'ข', result: 'ख', type: KEY_TYPES.alphabet},
  'ค': {original: 'ค', result: 'ग', type: KEY_TYPES.alphabet},
  'ฆ': {original: 'ฆ', result: 'घ', type: KEY_TYPES.alphabet},
  'ง': {original: 'ง', result: 'ङ', type: KEY_TYPES.alphabet},
  'จ': {original: 'จ', result: 'च', type: KEY_TYPES.alphabet},
  'ฉ': {original: 'ฉ', result: 'छ', type: KEY_TYPES.alphabet},
  'ช': {original: 'ช', result: 'ज', type: KEY_TYPES.alphabet},
  'ฌ': {original: 'ฌ', result: 'झ', type: KEY_TYPES.alphabet},
  'ญ': {original: 'ญ', result: 'ञ', type: KEY_TYPES.alphabet},
  'ฏ': {original: 'ฏ', result: 'ट', type: KEY_TYPES.alphabet},
  'ฐ': {original: 'ฐ', result: 'ठ', type: KEY_TYPES.alphabet},
  'ฑ': {original: 'ฑ', result: 'ड', type: KEY_TYPES.alphabet},
  'ฒ': {original: 'ฒ', result: 'ढ', type: KEY_TYPES.alphabet},
  'ณ': {original: 'ณ', result: 'ण', type: KEY_TYPES.alphabet},
  'ต': {original: 'ต', result: 'त', type: KEY_TYPES.alphabet},
  'ถ': {original: 'ถ', result: 'थ', type: KEY_TYPES.alphabet},
  'ท': {original: 'ท', result: 'द', type: KEY_TYPES.alphabet},
  'ธ': {original: 'ธ', result: 'ध', type: KEY_TYPES.alphabet},
  'น': {original: 'น', result: 'न', type: KEY_TYPES.alphabet},
  'ป': {original: 'ป', result: 'प', type: KEY_TYPES.alphabet},
  'ผ': {original: 'ผ', result: 'फ', type: KEY_TYPES.alphabet},
  'พ': {original: 'พ', result: 'ब', type: KEY_TYPES.alphabet},
  'ภ': {original: 'ภ', result: 'भ', type: KEY_TYPES.alphabet},
  'ม': {original: 'ม', result: 'म', type: KEY_TYPES.alphabet},
  'ย': {original: 'ย', result: 'य', type: KEY_TYPES.alphabet},
  'ร': {original: 'ร', result: 'र', type: KEY_TYPES.alphabet},
  'ล': {original: 'ล', result: 'ल', type: KEY_TYPES.alphabet},
  'ว': {original: 'ว', result: 'व', type: KEY_TYPES.alphabet},
  'ศ': {original: 'ศ', result: 'श', type: KEY_TYPES.alphabet},
  'ษ': {original: 'ษ', result: 'ष', type: KEY_TYPES.alphabet},
  'ส': {original: 'ส', result: 'स', type: KEY_TYPES.alphabet},
  'ห': {original: 'ห', result: 'ह', type: KEY_TYPES.alphabet},
  'ฮ': {original: 'ฮ', result: 'ह', type: KEY_TYPES.alphabet},
  'ฬ': {original: 'ฬ', result: 'ळ', type: KEY_TYPES.alphabet},
  'อ': {original: 'อ', result: 'अ', type: KEY_TYPES.alphabet},
  'า': {original: 'า', result: 'ा', type: KEY_TYPES.vowelAfter, aDefault: 'आ'},
  'ิ': {original: 'ิ', result: 'ि', type: KEY_TYPES.vowelAfter, aDefault: 'इ'},
  'ี': {original: 'ี', result: 'ी', type: KEY_TYPES.vowelAfter, aDefault: 'ई'},
  'ุ': {original: 'ุ', result: 'ु', type: KEY_TYPES.vowelAfter, aDefault: 'उ'},
  'ู': {original: 'ู', result: 'ू', type: KEY_TYPES.vowelAfter, aDefault: 'ऊ'},
  'ฤ': {original: 'ฤ', result: 'ृ', type: KEY_TYPES.vowelAfter},
  'ฤๅ': {original: 'ฤๅ', result: 'ॄ', type: KEY_TYPES.vowelAfter},
  'ฦ': {original: 'ฦ', result: 'ॢ', type: KEY_TYPES.vowelAfter},
  'ฦๅ': {original: 'ฦๅ', result: 'ॣ', type: KEY_TYPES.vowelAfter},
  'ๅ': {original: 'ๅ', result: undefined, type: KEY_TYPES.vowelAfter, handler: function(text) {
    const lastChar = text.charAt(text.length - 1);
    let replace = null;
    if (lastChar === 'ृ') {
      replace = 'ॄ';
    } else if (lastChar === 'ॢ') {
      replace = 'ॣ';
    }

    if (replace) {
      text = text.substring(0, text.length - 1) + replace;
    }
    return text;
  }},
  'เ': {original: 'เ', result: 'े', aDefault: 'ए', type: KEY_TYPES.vowelBefore},
  'โ': {original: 'โ', result: 'ो', aDefault: 'ओ', type: KEY_TYPES.vowelBefore},
  'ไ': {original: 'ไ', result: 'ै', aDefault: 'ऐ', type: KEY_TYPES.vowelBefore},
  'ใ': {original: 'ใ', result: 'ै', aDefault: 'ऐ', type: KEY_TYPES.vowelBefore},
  '์': {original: '์', result: 'ौ', aDefault: 'औ', type: KEY_TYPES.vowelAfter},
  'ํ': {original: 'ํ', result: 'ं', type: KEY_TYPES.vowelAfter},
  'ะ': {original: 'ะ', result: 'ः', type: KEY_TYPES.vowelAfter},
  'ฯ': {original: 'ฯ', result: '्', type: KEY_TYPES.vowelAfter},
  '๑': {original: '๑', result: '१', type: KEY_TYPES.number},
  '๒': {original: '๒', result: '२', type: KEY_TYPES.number},
  '๓': {original: '๓', result: '३', type: KEY_TYPES.number},
  '๔': {original: '๔', result: '४', type: KEY_TYPES.number},
  '๕': {original: '๕', result: '५', type: KEY_TYPES.number},
  '๖': {original: '๖', result: '६', type: KEY_TYPES.number},
  '๗': {original: '๗', result: '७', type: KEY_TYPES.number},
  '๘': {original: '๘', result: '८', type: KEY_TYPES.number},
  '๙': {original: '๙', result: '९', type: KEY_TYPES.number},
  '๐': {original: '๐', result: '०', type: KEY_TYPES.number}
};

const darkModeFromStorage = localStorage.getItem('darkMode');
let darkMode = false;
if (darkModeFromStorage) {
  darkMode = darkModeFromStorage === 'yes' ? true : false;
}

new Vue({
  el: '#app',
  data: {
    text: '',
    cursor: null,
    darkMode: darkMode
  },
  methods: {
    afterAHandler: function(key) {
      if (key.aDefault) {
        this.text = this.text.substring(0, this.text.length - 1) + key.aDefault;
      }
    },
    beforeAHandler: function(lastKey) {
      if (lastKey.aDefault) {
        this.text = this.text.substring(0, this.text.length - 1) + lastKey.aDefault;
      }
    },
    defaultHandler: function(key) {
      if (key.type === KEY_TYPES.vowelBefore) {
        this.text += key.original;
      } else {
        const lastChar = this.text.charAt(this.text.length - 1);
        const lastKey = keyMaps[lastChar];
        if (key.type === KEY_TYPES.vowelAfter && lastChar === 'अ') {
          this.afterAHandler(key);
        } else if (lastKey && lastKey.type === KEY_TYPES.vowelBefore && key.original === 'อ') {
          this.beforeAHandler(lastKey);
        } else if (lastKey && lastKey.type === KEY_TYPES.vowelBefore) {
          this.text = this.text.substring(0, this.text.length - 1);
          this.text += key.result + lastKey.result;
        } else {
          this.text += key.result;
        }
      }
    },
    change: function(event) {
      const selectionStart = event.target.selectionStart;
      const selectionEnd = event.target.selectionEnd;

      let afterText = '';
      afterText = this.text.substring(selectionEnd);
      this.text = this.text.substring(0, selectionStart);

      const key = keyMaps[event.key];

      if (key) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        if (key.handler) {
          this.text = key.handler(this.text);
        } else {
          this.defaultHandler(key);
        }
      }

      if (afterText) {
        this.cursor = this.text.length;
        this.text += afterText;
      }
    },
    copy: function() {
      const textarea = document.createElement('textarea');
      textarea.setAttribute('readonly', true);
      textarea.setAttribute('contenteditable', true);
      textarea.style.position = 'fixed';
      textarea.value = this.text;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
  
      const range = document.createRange();
      range.selectNodeContents(textarea);
  
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
  
      textarea.setSelectionRange(0, textarea.value.length);
      document.execCommand('copy');

      textarea.remove();
    },
    changeThemeMode: function() {
      if (this.darkMode) {
        document.body.classList.add('dark');
        document.body.classList.remove('white');
      } else if (!this.darkMode) {
        document.body.classList.add('white');
        document.body.classList.remove('dark');
      }
      localStorage.setItem('darkMode', this.darkMode ? 'yes' : 'no');
    }
  },
  updated: function() {
    if (this.cursor !== null) {
      document.getElementById('main-textarea').setSelectionRange(this.cursor, this.cursor);
      this.cursor = null;
    }
  },
  beforeUpdate: function() {
    this.changeThemeMode();
  },
  mounted: function() {
    this.changeThemeMode();
  }
});
