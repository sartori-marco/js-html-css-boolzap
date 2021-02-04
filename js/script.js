var app = new Vue({
  el:'#app',
  data: {
    users: [
      {
        nome: 'Michele',
        avatar: 'img/avatar_1.jpg',
        // visible: true,
        messaggio:[
          {
            testo: 'ciao',
            stato: 'inviato'
          }
        ]
      },
      {
        nome: 'Fabio',
        avatar: 'img/avatar_2.jpg',
        messaggio:[
          {
            testo: 'porta fuori il cane',
            stato: 'ricevuto'
          }
        ]
      },
      {
        nome: 'Alessia',
        avatar: 'img/avatar_3.jpg',
        messaggio:[
          {
            testo: 'vai a prendere il pane',
            stato: 'inviato'
          }
        ]
      },
      {
        nome: 'Luca',
        avatar: 'img/avatar_4.jpg',
        messaggio:[
          {
            testo: 'Aperitivo?',
            stato: 'ricevuto'
          }
        ]
      },
      {
        nome: 'Stefano',
        avatar: 'img/avatar_5.jpg'
      },
      {
        nome: 'Sara',
        avatar: 'img/avatar_6.jpg'
      },
      {
        nome: 'Alberto',
        avatar: 'img/avatar_7.jpg'
      },
      {
        nome: 'Giorgio',
        avatar: 'img/avatar_8.jpg'
      },
    ],
    contatore: 0,
    testoMes: ''
  },
  methods:{
    chatContatti(index){
      this.contatore = index;
    },

    inserimentoMessaggio(){
      this.users[this.contatore].messaggio.push({ testo: this.testoMes });
      this.testoMes = '';
      setTimeout(this.rispostaMessaggio,1000);
    },
    rispostaMessaggio(){
      this.users[this.contatore].messaggio.push({testo: 'ok', stato: 'ricevuto'} );
    },
  }



});
