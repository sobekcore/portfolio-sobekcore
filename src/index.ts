import Swup from 'swup';
import SwupSlideTheme from '@swup/slide-theme';
import SwupHeadPlugin from '@swup/head-plugin';
import SwupScriptsPlugin from '@swup/scripts-plugin';
import SwupScrollPlugin from '@swup/scroll-plugin';
import SwupA11yPlugin from '@swup/a11y-plugin';

new Swup({
  plugins: [
    new SwupSlideTheme(),
    new SwupHeadPlugin(),
    new SwupScriptsPlugin(),
    new SwupScrollPlugin({
      animateScroll: {
        betweenPages: false,
      },
    }),
    new SwupA11yPlugin(),
  ],
});
