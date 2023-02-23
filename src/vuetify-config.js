import { createVuetify } from "vuetify";
import { aliases, fa } from 'vuetify/iconsets/fa';
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import colors from 'vuetify/lib/util/colors';
import 'vuetify/styles';

const VuetifyPlugin = createVuetify({
	components,
	directives,
	icons: {
		defaultSet: 'fa',
		aliases,
		sets: { fa },
	},
	theme: {
		themes: {
			light: {
				dark: true,
				colors: {
					primary: colors.red.darken1,
					secondary: colors.red.lighten4,
				}
			},
		},
	},
});

export { VuetifyPlugin };