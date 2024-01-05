// 全局引入 element css 文件，组件在使用时引入
import 'element-ui/lib/theme-chalk/index.css';

import MiButton from './Button/index.vue'
import MiSelect from './Select/index.vue'
import MiPopover from './Popover/index.vue'
import MiDialog from './Dialog/index.vue'
import MiCard from './Card/index.vue'
import MiListDisplay from './ListDisplay/display.vue'
import MiListOption from './ListDisplay/option.vue'
import MiLink from './Link/index.vue'
export default {
    install: function (Vue) {
        Vue.component(MiButton.name, MiButton)
        Vue.component(MiSelect.name, MiSelect)
        Vue.component(MiPopover.name, MiPopover)
        Vue.component(MiDialog.name, MiDialog)
        Vue.component(MiCard.name, MiCard)
        Vue.component(MiListDisplay.name, MiListDisplay)
        Vue.component(MiListOption.name, MiListOption)
        Vue.component(MiLink.name, MiLink)
    }
}

export { MiButton, MiSelect, MiPopover, MiDialog, MiCard, MiListDisplay, MiListOption, MiLink }
