/*
Descrizione:
Rifare l’esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all’interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/

const app = new Vue (
    {
        el: '#app',
        data: {
            newTodo: '', //nuovo Todo
            todos: [
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Preparare la cena',
                    done: false
                },
                {
                    text: 'Chiamare Pippo',
                    done: false
                }, 
                {
                    text: 'Comprare caricatore telefono',
                    done: false
                }
            ]
        },
        methods: {
            addTodo: function () { //funzione per aggiungere un nuovo Todo
                if(this.newTodo.length != 0){ //se il campo non è vuoto
                    let element = { //creo oggetto
                        text: this.newTodo,
                        done: false
                    }
                    this.todos.unshift(element); //inserisco all'inizio dell'array
                    this.newTodo = ''; //svuoto il campo
                }
                
            },
            removeTodo: function (index) {
                this.todos.splice(index, 1); //rimuovo l'oggetto in quella posizione
            }
        }
    }
)