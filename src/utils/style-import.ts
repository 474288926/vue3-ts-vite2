import { App } from 'vue'
import {
  ElRow,
  ElCol,
  ElIcon,
  ElLoading,
  ElCard,
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElFooter,
  ElButton,
  ElButtonGroup,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElScrollbar,
  ElRadio,
  ElRadioGroup,
  ElRadioButton,
  ElPageHeader,
  ElTable,
  ElTableColumn,
  ElInput,
  ElAutocomplete,
  ElSelect,
  ElOption,
  ElOptionGroup,
  ElCascader,
  ElCascaderPanel,
  ElCheckbox,
  ElCheckboxGroup,
  ElCheckboxButton,
  ElDatePicker
} from 'element-plus'

/**
 * 按需导入 Element Plus 组件
 * Vite 插件 https://github.com/element-plus/vite-plugin-element-plus
 * @param app {App}
 */
export default function styleImport(app: App) {
  ;[
    ElRow,
    ElCol,
    ElButton,
    ElButtonGroup,
    ElCard,
    ElLoading,
    ElIcon,
    ElContainer,
    ElHeader,
    ElAside,
    ElMain,
    ElFooter,
    ElMenu,
    ElSubMenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElScrollbar,
    ElRadio,
    ElRadioGroup,
    ElRadioButton,
    ElPageHeader,
    ElTable,
    ElTableColumn,
    ElInput,
    ElAutocomplete,
    ElSelect,
    ElOption,
    ElOptionGroup,
    ElCascader,
    ElCascaderPanel,
    ElCheckbox,
    ElCheckboxGroup,
    ElCheckboxButton,
    ElDatePicker
  ].forEach((v) => {
    app.use(v)
  })
  return app
}
