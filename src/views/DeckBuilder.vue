<template>
  <div style="height: 300vh">
    <div style="font-size: 2vh; top: 1vh; left: 47vh; position: sticky; text-align: center; width: 100vh; z-index: 2; background-color: antiquewhite;">Click on a card below to add it to your deck, if you want to remove a card from your deck click on that card in your deck. A deck consists of 4 gold, 5 silver and at least 11 bronze cards, you can add the same bronze card twice but only one of each available gold or silver card.</div>
    <div style="background-color: lightgray; border-style: solid; border-color: black; border-width: 1px;  font-size: 1.5vh; top: 10vh; left: 1px; width: 25vh; min-height: 85vh; position: sticky; overflow-y: auto; scroll-padding-bottom: auto">
          <div style="text-align: right; position: absolute; left: 5px">Deck Name: </div>
          <input v-model="deckName" style="position: absolute; top: 2vh; left: 1px;">
          <div style="text-align: right; position: absolute; left: 5px; top: 6vh">Gold Cards: {{ goldCards.length }}/4</div>
            <div style="position: absolute; height: 16vh; top: 8vh">
            <div v-for="(goldCard, index) in goldCards" :key="goldCard.id" @click="goldCards.splice(goldCards.indexOf(goldCard), 1); console.log('balls')" style="position: absolute; background-color: white; width: 20vh; height: 4vh" v-bind:style="{top: `${(index * 4)}vh`}">
              <span class="circle" style="position: absolute; left: 3px; top: 1px; height: 3vh; width: 3vh; text-align: center">
              <div style="position: absolute; top: 5px; left: 10px; font-size: 1.25vh"> {{ goldCard.cardBaseHealth }} </div></span>
              <h1 style="position: absolute; top: 1vh; left: 5vh; font-size: 1.5vh"> {{goldCard.cardName}} </h1>
              <div style="position: absolute; background-color: #e6b800; width: 1.5vh; height: 1.5vh; right: 10px"></div>
            </div>
            </div>  
          <div style="text-align: right; position: absolute; left: 5px; top: 25vh">Silver Cards: {{ silverCards.length }}/5</div>
            <div style="position: absolute; height: 20vh; top: 27vh;">
            <div v-for="(silverCard, index) in silverCards" :key="silverCard.id" @click="silverCards.splice(silverCards.indexOf(silverCard), 1)" style="position: absolute; background-color: white; width: 20vh; height: 4vh" v-bind:style="{top: `${(index * 4)}vh`}">
                <span class="circle" style="position: absolute; left: 3px; top: 1px; height: 3vh; width: 3vh; text-align: center">
                <div style="position: absolute; top: 5px; left: 10px; font-size: 1.25vh"> {{ silverCard.cardBaseHealth }} </div></span>
                <h1 style="position: absolute; top: 1vh; left: 5vh; font-size: 1.5vh"> {{silverCard.cardName}} </h1>
                <div style="position: absolute; background-color: #a6a6a6; width: 1.5vh; height: 1.5vh; right: 10px"></div>
            </div>
            </div>
          <div style="text-align: right; position: absolute; left: 5px; top: 48vh">Bronze Cards: {{ bronzeCards.length }}/11+</div>
            <div style="position: absolute; height: 100vh; top: 50vh">
            <div v-for="(bronzeCard, index) in bronzeCards" :key="bronzeCard.id" @click="bronzeCards.splice(bronzeCards.indexOf(bronzeCard), 1)" style="position: absolute; background-color: white; width: 20vh; height: 4vh" v-bind:style="{top: `${(index * 4)}vh`}">
                <span class="circle" style="position: absolute; left: 3px; top: 1px; height: 3vh; width: 3vh; text-align: center">
                <div style="position: absolute; top: 5px; left: 10px; font-size: 1.25vh"> {{ bronzeCard.cardBaseHealth }} </div></span>
                <h1 style="position: absolute; top: 1vh; left: 5vh; font-size: 1.5vh"> {{bronzeCard.cardName}} </h1>
                <div style="position: absolute; background-color: #cc6600; width: 1.5vh; height: 1.5vh; right: 10px"></div>
            </div>
            </div>
    </div>
    <div>
      <div v-for="(card, index) in cards[2]" :key="card" style="position: absolute; background-color: white; width: 30vh; height: 20vh" v-bind:style="{top: `${(Math.floor(index/4))*25+15}vh`, left: `${(index % 4)*35 + 30}vh`}">
        <span class="circle" style="position: absolute; left: 3px; top: 3px; height: 3vh; width: 3vh; text-align: center">
        <div style="position: absolute; top: 5px; left: 10px; font-size: 1.25vh">{{ card.cardBaseHealth }}</div></span>
        <h1 style="position: absolute; top: 3vh; left: 4vh; font-size: 1.5vh">{{ card.cardName }}</h1>
        <div style="position: absolute; background-color: #e6b800; width: 1.5vh; height: 1.5vh; right: 10px"></div>
        <hr style="position: absolute; top: 25%; width: 100%; border: 1px solid">
        <h1 style="position: absolute; top: 7vh; left: 2vh; font-size: 1.5vh; text-align: left">{{ card.cardDescription }}</h1>
        <div v-if="card.cardStatus">
          <hr v-if="card.cardStatus" style="position: absolute; top: 65%; width: 100%; border: 1px solid">
          <h1 v-if="card.cardStatus=='Bleeding' || card.cardStatus=='Adjacent Bleeding'" style="position: absolute; top: 75%; font-size: 1.5vh">{{ status[0] }}</h1>
          <h1 v-if="card.cardStatus=='Vitality'" style="position: absolute; top: 75%; font-size: 1.5vh">{{ status[1] }}</h1>
          <h1 v-if="card.cardStatus=='Shield'" style="position: absolute; top: 75%; font-size: 1.5vh">{{ status[2] }}</h1>
          <h1 v-if="card.cardStatus=='Freeze'" style="position: absolute; top: 75%; font-size: 1.5vh">{{ status[3] }}</h1>
        </div>
      </div>
      <div v-for="(card, index) in cards[1]" :key="card" style="position: absolute; background-color: white; width: 30vh; height: 20vh" v-bind:style="{top: `${(Math.floor((index+2)/4))*25+65}vh`, left: `${((index+2) % 4)*35 + 30}vh`}">
        <span class="circle" style="position: absolute; left: 3px; top: 3px; height: 3vh; width: 3vh; text-align: center">
        <div style="position: absolute; top: 5px; left: 10px; font-size: 1.25vh">{{ card.cardBaseHealth }}</div></span>
        <h1 style="position: absolute; top: 3vh; left: 4vh; font-size: 1.5vh">{{ card.cardName }}</h1>
        <div style="position: absolute; background-color: #a6a6a6; width: 1.5vh; height: 1.5vh; right: 10px"></div>
        <hr style="position: absolute; top: 25%; width: 100%; border: 1px solid">
        <h1 style="position: absolute; top: 7vh; left: 2vh; font-size: 1.5vh; text-align: left">{{ card.cardDescription }}</h1>
        <div v-if="card.cardStatus">
          <hr v-if="card.cardStatus" style="position: absolute; top: 65%; width: 100%; border: 1px solid">
          <h1 v-if="card.cardStatus=='Bleeding' || card.cardStatus=='Adjacent Bleeding'" style="position: absolute; top: 75%; font-size: 1.5vh">{{ status[0] }}</h1>
          <h1 v-if="card.cardStatus=='Vitality'" style="position: absolute; top: 75%; font-size: 1.5vh">{{ status[1] }}</h1>
          <h1 v-if="card.cardStatus=='Shield'" style="position: absolute; top: 75%; font-size: 1.5vh">{{ status[2] }}</h1>
          <h1 v-if="card.cardStatus=='Freeze'" style="position: absolute; top: 75%; font-size: 1.5vh">{{ status[3] }}</h1>
        </div>
      </div>
      <div v-for="(card, index) in cards[0]" :key="card" style="position: absolute; background-color: white; width: 30vh; height: 20vh" v-bind:style="{top: `${(Math.floor((index+3)/4))*25+140}vh`, left: `${((index+3) % 4)*35 + 30}vh`}">
        <span class="circle" style="position: absolute; left: 3px; top: 3px; height: 3vh; width: 3vh; text-align: center">
        <div style="position: absolute; top: 5px; left: 10px; font-size: 1.25vh">{{ card.cardBaseHealth }}</div></span>
        <h1 style="position: absolute; top: 3vh; left: 4vh; font-size: 1.5vh">{{ card.cardName }}</h1>
        <div style="position: absolute; background-color: #cc6600; width: 1.5vh; height: 1.5vh; right: 10px"></div>
        <hr style="position: absolute; top: 25%; width: 100%; border: 1px solid">
        <h1 style="position: absolute; top: 7vh; left: 2vh; font-size: 1.5vh; text-align: left">{{ card.cardDescription }}</h1>
        <div v-if="card.cardStatus">
          <hr v-if="card.cardStatus" style="position: absolute; top: 65%; width: 100%; border: 1px solid">
          <h1 v-if="card.cardStatus=='Bleeding' || card.cardStatus=='Adjacent Bleeding'" style="position: absolute; top: 75%; font-size: 1.5vh">{{ status[0] }}</h1>
          <h1 v-if="card.cardStatus=='Vitality'" style="position: absolute; top: 75%; font-size: 1.5vh">{{ status[1] }}</h1>
          <h1 v-if="card.cardStatus=='Shield'" style="position: absolute; top: 75%; font-size: 1.5vh">{{ status[2] }}</h1>
          <h1 v-if="card.cardStatus=='Freeze'" style="position: absolute; top: 75%; font-size: 1.5vh">{{ status[3] }}</h1>
        </div>
      </div>
    </div>
    <div>
      <div v-if="goldCards.length < 4"><div v-for="(card, index) in cards[2]" :key="card" style="position: absolute; width: 30vh; height: 20vh" @click="goldCards.push(card)" v-bind:style="{top: `${(Math.floor(index/4))*25+15}vh`, left: `${(index % 4)*35 + 30}vh`}"></div></div>
      <div v-if="silverCards.length < 5"><div v-for="(card, index) in cards[1]" :key="card" style="position: absolute; width: 30vh; height: 20vh" @click="silverCards.push(card)" v-bind:style="{top: `${(Math.floor((index+2)/4))*25+65}vh`, left: `${((index+2) % 4)*35 + 30}vh`}"></div></div>
      <div v-for="(card, index) in cards[0]" :key="card" style="position: absolute; width: 30vh; height: 20vh" @click="bronzeCards.push(card)" v-bind:style="{top: `${(Math.floor((index+3)/4))*25+140}vh`, left: `${((index+3) % 4)*35 + 30}vh`}"></div>
    </div>
    <div>
      <div v-for="(card, index) in cards[2]" :key="card" style="position: absolute" v-bind:style="{top: `${(Math.floor(index/4))*25+15}vh`, left: `${(index % 4)*35 + 30}vh`}"><div v-if="goldCards.includes(card)" style="border-style: solid; border-color: red; border-width: 2px; position: absolute; width: 30vh; height: 20vh"></div></div>
      <div v-for="(card, index) in cards[1]" :key="card" style="position: absolute" v-bind:style="{top: `${(Math.floor((index+2)/4))*25+65}vh`, left: `${((index+2) % 4)*35 + 30}vh`}"><div v-if="silverCards.includes(card)" style="border-style: solid; border-color: red; border-width: 2px; position: absolute; width: 30vh; height: 20vh"></div></div>
      <div v-for="(card, index) in cards[0]" :key="card" style="position: absolute" v-bind:style="{top: `${(Math.floor((index+3)/4))*25+140}vh`, left: `${((index+3) % 4)*35 + 30}vh`}"><div v-if="bronzeCards.indexOf(card)!=bronzeCards.lastIndexOf(card)" style="border-style: solid; border-color: red; border-width: 2px; position: absolute; width: 30vh; height: 20vh"></div></div>
    </div>
    <div style="position: fixed; left: 50vh; bottom: 30vh; width: 80vh; height: 30vh; z-index: 3; background-color: white;" v-if="showMessage">
      <div style="font-size: 5vh">{{ message }}</div>
      <b-button style="position: absolute; bottom: 3vh; left: 38vh" @click="showMessage=false; message=''">OK</b-button>
    </div>
    <div style="position: fixed; left: 10vh; bottom: 1vh; height: 3vh">
      <b-button v-if="bronzeCards.length < 11 || silverCards.length != 5 || goldCards.length != 4" @click="showWrongInputMessage('Improper deck')">Submit</b-button>
      <b-button v-if="deckName=='' && bronzeCards.length >= 11 && silverCards.length == 5 && goldCards.length == 4" @click="showWrongInputMessage('Empty deck name')">Submit</b-button>
      <b-button v-if="bronzeCards.length >= 11 && silverCards.length == 5 && goldCards.length == 4 && deckName" @click="submitDeck()">Submit</b-button>    
    </div> 
  </div>
</template>

<script>
import decks from "@/assets/decks.js"
import cards from "@/assets/cards.js"
export default {
    data(){
        return{
            deckName: "",
            cards: cards,
            goldCards: [],
            silverCards: [],
            bronzeCards: [],
            deck: [],
            status: [
              "Bleeding: At the end of that unit's turn damage it by 1.",
              "Vitality: At the end of that unit's turn boost it by 1.",
              "Shield: Block a single instance of damage.",
              "Freeze: Disable the ability of a unit.",
            ],
            message: "",
            showMessage: false,
        }   
    },
    methods: {
      submitDeck(){
        for(let i = 0; i < 4; i++){this.deck.push(this.goldCards[i])}
        for(let i = 0; i < 5; i++){this.deck.push(this.silverCards[i])}
        for(let i = 0; i < this.bronzeCards.length; i++){this.deck.push(this.bronzeCards[i])}
        const deck = this.deck;
        const deckName = this.deckName
        decks[0].push({deckName, deck})
        this.goldCards = []
        this.silverCards = []
        this.bronzeCards = []
        this.deck = []
        this.deckName = ""
        this.message="Deck saved"
        this.showMessage = true
      },
      showWrongInputMessage(reason){
        this.showMessage=true;
        if(reason=="Improper deck"){this.message="Make sure your deck contains 4 gold, 5 silver and at least 11 bronze cards."}
        else {this.message="Don't forget to name your deck."}
      }
    },
}
</script>