<template>
  <el-autocomplete
    :size="size"
    v-bind="value"
    :fetch-suggestions="querySearch"
    :trigger-on-focus="false"
    class="inline-input"
    :maxlength="maxlength"
    :disabled="disabled"
    :clearable="clearable"
    :suffix-icon="suffixIcon"
    :prefix-icon="prefixIcon"
    :placeholder="placeholder"
    @select="handleSelect"
    show-word-limit
  >
    <!-- 定制内容格式 -->
    <!-- <template #default="{ item }">
      <div class="value">{{ item.value }}</div>
      <span class="link">{{ item.link }}</span>
    </template> -->
  </el-autocomplete>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
/* global defineProps,defineEmits  */
/* eslint no-undef: "error" */
const props = defineProps({
  value: String,
  size: String,
  maxlength: Number,
  disabled: Boolean,
  clearable: Boolean,
  suffixIcon: String,
  prefixIcon: String,
  placeholder: String
})
const {
  value,
  size,
  maxlength,
  disabled,
  clearable,
  suffixIcon,
  prefixIcon,
  placeholder
} = toRefs(props)
const emit = defineEmits(['querySearch'])
const querySearch = (queryString: string, cb: (arg: any) => void) => {
  emit('querySearch', queryString, cb)
}
const handleSelect = (item: object) => {
  console.log(item)
}
</script>

<style scoped></style>
