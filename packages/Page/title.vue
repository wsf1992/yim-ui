<template>
    <div style="height: 100%">
        <page-base :no-header="noHeader" :base-page-container-class="basePageContainerClass">
            <template slot="header">
                <div class="flex">
                    <div class="flex-wrap flex-cross-center">
                        {{ title }}
                        <slot name="header-left"></slot>
                    </div>
                    <div class="flex-main-end flex-cross-center">
                        <slot name="header-right"></slot>
                    </div>
                </div>
            </template>
            <slot name="default"></slot>
        </page-base>
        <slot name="body"></slot>
    </div>
</template>

<script>
import MiBasePage from './base.vue'
export default {
    name: 'MiTitlePage',
    components: {
        PageBase: MiBasePage
    },
    props: {
        title: {
            type: String,
            default: 'title'
        },
        noHeader: Boolean,
        basePageContainerClass: String
    }
}
</script>

<style scoped>
.flex-justifu-end {
    justify-content: flex-end;
}
.flex {
    display: flex;
}
.flex-wrap {
    display: flex;
    flex-wrap: wrap;
}
.flex-cross-center {
    align-items: center !important;
}
.flex-main-end {
    display: flex;
    justify-content: flex-end;
    flex: 1 1 auto;
    align-items: flex-start;
}
</style>
