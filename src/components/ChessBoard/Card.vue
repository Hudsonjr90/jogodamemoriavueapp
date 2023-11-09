<template>
  <div class="container" @click="doFlip">
    <div class="card" :class="{ flipped: card.flipped }">
      <img v-if="card.name === 'bootstrap'" class="front" src="../../assets/Bootstrap.png" />
      <img v-if="card.name === 'figma'" class="front" src="../../assets/Figma.png" />
      <img v-if="card.name === 'git'" class="front" src="../../assets/GIT.png" />
      <img v-if="card.name === 'github'" class="front" src="../../assets/Github.png" />
      <img v-if="card.name === 'h5'" class="front" src="../../assets/H5.png" />
      <img v-if="card.name === 'js'" class="front" src="../../assets/JS.png" />
      <img v-if="card.name === 'node'" class="front" src="../../assets/Node.png" />
      <img v-if="card.name === 'ts'" class="front" src="../../assets/TS.png" />

      <img class="back" src="../../assets/back.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, PropType } from 'vue'
import { useStore } from 'vuex'
import { ICard } from '@/IType'
import { GameStoreKey } from '@/stores'

export default defineComponent({
  name: 'Card',
  props: {
    card: {
      type: Object as PropType<ICard>,
      required: true
    }
  },
  emits: {
    onFlip: (payload: ICard) => {
      return !!payload
    }
  },
  setup: (props, context) => {
    const { card } = toRefs(props)
    const { commit } = useStore(GameStoreKey)

    const doFlip = (e: MouseEvent) => {
      if (card.value.flipped) {
        return
      }
      commit('flips', [card.value])
      context.emit('onFlip', card.value)
    }

    return {
      card,
      doFlip
    }
  }
})
</script>

<style scoped>
.container {
  width: 100px;
  height: 121px;
  margin-right: 3px;
  cursor: pointer;
  position: relative;
  perspective: 800px;
}

.card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.card.flipped {
  transform: rotateY(180deg);
}

.card img {
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
}

.card .back {
  background: blue;
  transform: rotateY(0deg);
}

.card .front {
  background: blue;
  transform: rotateY(180deg);
}

@media screen and (max-width: 450px) {
  .container {
    width: 92px;
    height: 111px;
    margin-right: 1px;
  }
}

@media screen and (max-width: 380px) {
  .container {
    width: 85px;
    height: 102px;
    margin-right: 1px;
  }
}

@media screen and (max-width: 360px) {
  .container {
    width: 70px;
    height: 84px;
    margin-right: 1px;
  }
}
</style>
