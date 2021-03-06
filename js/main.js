/**
 * Partire dalla definizione di un array con 3 oggetti ( i todo).
Ogni oggetto todo avrà le seguenti proprietà:
- text, una stringa che indica il testo del todo
- completed, un booleano (true/false) che indica se il todo è stato completato oppure no
MILESTONE 1
Stampare all’interno di una lista, un item per ogni todo.
Se la proprietà completed è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco di ogni todo una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
 */



const app = new Vue ({
    el: '#app',
    data: {
        todos: [
            {
                text: 'Dare da mangiare al cane',
                completed: false,
            },
            {
                text: 'Andare in banca',
                completed: true,
            },
            {
                text: 'cucinare per la sera',
                completed: false,
            },
        ],
       /* AGGIUNTA TODO TRAMITE INPUT E INSERENDOLO CON IL CLICK SUL BOTTONE ALL'INTERNO DELLA NOSTRA LISTA  DI TODO */
       newTodo: "",
    },

    methods: {
        addTodo() {
            /* diamo delle regole per far si che non stampi stringhe vuote o con solo spazi */
            if(this.newTodo !== '') {
                console.log( this.newTodo);


             /* pushiamo all'interno dell array di oggetti (e quindi stampiamo direttamente in pagina il todo che creiamo noi ) */
                this.todos.push ({
                    text: this.newTodo,
                    completed: true,
                });
                /* Puliamo la barra di ricerca dell'input una volta che abbiamo cliccato il bottone per aggiungere il todo */
                this.newTodo= '';

                // aggiunta tramite tastiera
                this.$refs.todoInput.focus();
            }
          
        },

        /* RIMOZIONE TODO SCELTO DA NOI AL CLICK DEL CESTINO */

        /* (splice serve x elimirare gli elementi, il numero dopo la virgola indica il numero di elementi da eliminare) */
        removeTodo(indexTodo) {
           this.todos.splice(indexTodo, 1);

           confetti({
            particleCount: 1000,
            spread: 360,
            gravity: 0.5,
         });
     
           
        }
    }
  
});