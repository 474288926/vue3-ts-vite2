<template>
  <template v-if="buttonGroup.length > 0">
    <el-button-group :size="size">
      <el-button
        v-for="(buttons, index) in buttonGroup"
        :key="index"
        :icon="buttons.icon || icon"
        :type="buttons.type || type"
        :loading="buttons.loading || loading"
        :plain="buttons.plain || plain"
        :round="buttons.round || round"
        :circle="buttons.circle || circle"
        :disabled="buttons.disabled || disabled"
      >
        <slot>{{ buttons.name }}</slot>
      </el-button>
    </el-button-group>
  </template>
  <template v-else>
    <el-button
      :icon="icon"
      :size="size"
      :type="type"
      :loading="loading"
      :plain="plain"
      :round="round"
      :circle="circle"
      :disabled="disabled"
      @click="click"
    >
      <slot></slot>
    </el-button>
    <span>Provide / Inject 测试----- {{ userLocation }}-{{ userGeolocation }}</span>
  </template>
</template>

<script setup lang="ts">
import { toRefs, inject } from 'vue'
/* global defineProps,defineEmits  */
/* eslint no-undef: "error" */
const props = defineProps({
  type: {
    type: String,
    default() {
      return 'primary'
    }
  },
  buttonGroup: {
    type: Array,
    default() {
      return []
    }
  },
  plain: {
    type: Boolean,
    default() {
      return false
    }
  },
  round: {
    type: Boolean,
    defalut() {
      return false
    }
  },
  circle: {
    type: Boolean,
    default() {
      return false
    }
  },
  disabled: {
    type: Boolean,
    default() {
      return false
    }
  },
  icon: {
    type: String,
    default() {
      return ''
    }
  },
  loading: {
    type: Boolean,
    default() {
      return false
    }
  },
  size: {
    type: String,
    default() {
      return 'mini'
    }
  },
  click: {
    type: Function,
    default: () => {}
  }
})
const { type, plain, round, disabled, icon, loading, buttonGroup, circle, size } =
  toRefs(props)
// 子组件 inject

const userLocation = inject('location', 25)
const userGeolocation = inject('geolocation')
const updateUserLocation = inject('updateLocation')
</script>

<style scoped></style>
