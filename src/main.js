import { createApp, h, provide } from 'vue';
import './style.css';
import App from './App.vue';
import { apolloClient } from "./apollo-config.js";
import { ApolloClients } from "@vue/apollo-composable";
import { VuetifyPlugin } from "./vuetify-config.js";
import store from "./store/index.js";

const VueApp = createApp({
	setup() {
		provide(ApolloClients, {
			default: apolloClient,
		});
	},
	render: () => h(App),
});

VueApp
	.use(store)
	.use(VuetifyPlugin)
	.mount('#app');

