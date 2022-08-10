<template height="100%" style="background-color: #bbb">
  <div>
    <b-table style="text-align: left; position: absolute; left: 10vh; top: 10vh" :items="decks" :fields="fields">
       <template #cell(deckName)="decks">
         <router-link :to="`/game/${decks.index}`">{{ decks.item.deckName }}</router-link>
       </template>
       <template #cell(golds)="decks">
         <b>{{ decks.item.deck[0].cardName }}</b>, <b>{{ decks.item.deck[1].cardName }}</b>, <b>{{ decks.item.deck[2].cardName }}</b>, <b>{{ decks.item.deck[3].cardName }}</b>
       </template>
    </b-table>
  </div>
</template>

<script>
import decks from "@/assets/decks.js"
export default{
    data(){
        return {
            fields: ["deckName", {key: "golds", label: "Gold Cards"}],
            decks: decks[0],
        }
    }
}
</script>