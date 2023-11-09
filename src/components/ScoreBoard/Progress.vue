<template>
  <div class="board">
    <span>Cartas não combinadas</span>
    <h2>{{ nonMatchedPairs }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { GameStoreKey } from '@/stores'

export default defineComponent({
  name: 'Progress',
  setup: () => {
    const { state } = useStore(GameStoreKey)
    return {
      nonMatchedPairs: computed(() => state.nonMatchedPairs)
    }
  }
})
</script>

<style scoped>
.board {
  width: 120px;
  height: 100px;
  background-color: #bbada0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #eae0d1;
}

span {
  font-size: 19px;
  font-weight: 700;
  font-family: "baloo 2", sans-serif;
  display: block;
  width: 100%;
  text-align: center;
  color: #fff;
}

h2 {
  color: #fff;
  font-weight: 700;
  font-family: "baloo 2", sans-serif;
}
@media screen and (max-width: 450px) {
  .board {
    width: 105px;
  }
  span {
    font-size: 15px;
    margin-top: 10px;
  }
}

@media screen and (max-width: 380px) {
  .board {
    width: 95px;
  }
  span {
    font-size: 13px;
    margin-top: 8px;
  }
}

@media screen and (max-width: 360px) {
  .board {
    width: 90px;
  }
  span {
    font-size: 11px;
    margin-top: 6px;
  }
}
</style>
