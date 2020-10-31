import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

import colors from "vuetify/lib/util/colors";

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.green.darken1,
                secondary: '#546E7A',
            },
            dark: {
                primary: colors.blue.lighten3,
            },
        },
    },
});