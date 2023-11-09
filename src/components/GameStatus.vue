<template>
  <div class="status-footer">
    <span v-if="status === IStatus.READY">Pronto</span>
    <span v-if="status === IStatus.PLAYING">Jogando</span>
    <a v-if="status === IStatus.PASSED" @click.prevent.stop="reset">Tente Outra Vez</a>
    <span class="time-cost">{{ timeCost }} s</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { GameStoreKey } from '@/stores'
import { IStatus } from '@/IType'

export default defineComponent({
  setup: () => {
    const { state, commit } = useStore(GameStoreKey)
    return {
      IStatus,
      status: computed(() => state.status),
      timeCost: computed(() => state.timeCost),
      reset: () => commit('reset')
    }
  }
})
</script>

<style scoped>
.status-footer {
  position: relative;
  margin-top: 5px;
  width: 100%;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  font-family: "baloo 2", sans-serif;
}
a {
  text-decoration: none;
  cursor: pointer;
}
.time-cost {
  position: absolute;
  right: 10px;
  font-size: 15px;
  font-weight: normal;
}
</style>
