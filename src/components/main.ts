import Vue from 'vue';
import * as ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import YmButton from "./Button/index.vue";
import YmSelect from "./Select/index.vue";
import YmPopover from "./Popover/index.vue";

export default {
  install: function (Vue) {
    Vue.component(YmButton.name, YmButton);
    Vue.component(YmSelect.name, YmSelect);
    Vue.component(YmPopover.name, YmPopover);
  },
};

export { YmButton, YmSelect, YmPopover };
