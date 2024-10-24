// 全局引入 element css 文件，组件在使用时引入
import 'element-ui/lib/theme-chalk/index.css';
import '../style/index.scss'
import MiButton from './Button/index.vue'
import MiSelect from './Select/index.vue'
import MiPopover from './Popover/index.vue'
import MiDialog from './Dialog/index.vue'
import MiCard from './Card/index.vue'
import MiListDisplay from './ListDisplay/display.vue'
import MiListOption from './ListDisplay/option.vue'
import MiListTitle from './ListDisplay/title.vue'
import MiLink from './Link/index.vue'
import MiTitlePage from './Page/title.vue'
import MiBox from './Box/index.vue'
import MiTabs from './Tabs/index.vue'
import MiTitle from './Title/index.vue'
import MiContent from './Content/index.vue'
import MiUoload from './Upload/index.vue'
import MiPagination from './Pagination/index.vue'
import MiSelectInput from './SelectInput/index.vue'
import MiExport from './Export/index.vue'
import MiExOption from './Export/option.vue'
import MiDrawer from './Drawer/index.vue'
import MiTableBox from './TableBox/index.vue'
import MiAudio from './Audio/index.vue'
export default {
    install: function (Vue) {
        Vue.component(MiButton.name, MiButton)
        Vue.component(MiSelect.name, MiSelect)
        Vue.component(MiPopover.name, MiPopover)
        Vue.component(MiDialog.name, MiDialog)
        Vue.component(MiCard.name, MiCard)
        Vue.component(MiListDisplay.name, MiListDisplay)
        Vue.component(MiListOption.name, MiListOption)
        Vue.component(MiListTitle.name, MiListTitle)
        Vue.component(MiLink.name, MiLink)
        Vue.component(MiTitlePage.name, MiTitlePage)
        Vue.component(MiBox.name, MiBox)
        Vue.component(MiTabs.name, MiTabs)
        Vue.component(MiTitle.name, MiTitle)
        Vue.component(MiContent.name, MiContent)
        Vue.component(MiUoload.name, MiUoload)
        Vue.component(MiPagination.name, MiPagination)
        Vue.component(MiSelectInput.name, MiSelectInput)
        Vue.component(MiExport.name, MiExport)
        Vue.component(MiExOption.name, MiExOption)
        Vue.component(MiDrawer.name, MiDrawer)
        Vue.component(MiTableBox.name, MiTableBox)
        Vue.component(MiAudio.name, MiAudio)
    }
}

export { MiButton, MiSelect, MiPopover, MiDialog, MiCard, MiListDisplay, MiListOption, MiListTitle, MiLink, MiTitlePage, MiBox, MiTabs, MiTitle, MiContent, MiUoload, MiPagination, MiSelectInput, MiExport, MiExOption, MiDrawer, MiTableBox, MiAudio }
