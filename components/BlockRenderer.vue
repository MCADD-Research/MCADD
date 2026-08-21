<script setup lang="ts">
import type { Block } from '~/content/types'

const props = defineProps<{
  blocks: Block[]
}>()
</script>

<template>
  <div class="prose">
    <template v-for="(block, i) in blocks" :key="i">
      <p v-if="block.type === 'p'">{{ block.text }}</p>
      <ul v-else-if="block.type === 'ul'">
        <li v-for="(item, j) in block.items" :key="j">{{ item }}</li>
      </ul>
      <ol v-else-if="block.type === 'ol'">
        <li v-for="(item, j) in block.items" :key="j">{{ item }}</li>
      </ol>
      <h3 v-else-if="block.type === 'h3'">{{ block.text }}</h3>
      <Callout
        v-else-if="block.type === 'callout'"
        :variant="block.variant"
        :title="block.title"
        :text="block.text"
      />
      <dl v-else-if="block.type === 'kv'" class="kv">
        <div v-for="(item, j) in block.items" :key="j" class="kv-item">
          <dt>{{ item.k }}</dt>
          <dd>{{ item.v }}</dd>
        </div>
      </dl>
    </template>
  </div>
</template>
