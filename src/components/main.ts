import YmButton from './Button/index.vue';
import YmSelect from './Select/index.vue';

export default function install(Vue) {
    Vue.component(YmButton.name, YmButton);
    Vue.component(YmSelect.name, YmSelect);
}

export { YmButton };