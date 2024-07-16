// webFontLoader.js

import WebFont from 'webfontloader';

const loadFonts = () => {
  WebFont.load({
    google: {
      families: ['Montserrat:400,700', 'Playwrite Hrvatska Lijeva:400,700']
    }
  });
};

export default loadFonts;
