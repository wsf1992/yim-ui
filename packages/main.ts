// 全局引入 element css 文件，组件在使用时引入
// import 'element-ui/lib/theme-chalk/index.css';

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
