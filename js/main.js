//  Descrizione
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail

// ** generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// ** Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const app = Vue.createApp({
  data() {
    return {
      isRendered : false,
      emails: [],
    };
  },

  methods: {
      createdArray(){
        for(let i = 0; i < 10; i++){
          axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((res) => {
            console.log(res)
            this.emails[i] = res.data.response;
            if(this.emails.length >= 10){
              this.isRendered = true;
            }
          });
        }
      }
  },

  computed: {

  }
});

app.mount("#root");


//(activeUser >= 0 ? `` : `${$contacts[activeUser].name}`)