Vue.config.devtools = true;

new Vue({
    el: "#root",
    data: {
        addedItem: "",
        tasksList: ["Fare la spesa"],
    },

    methods: {

        onClickAdd() {
            
            if (!this.tasksList.includes(this.addedItem.toLowerCase()) && this.addedItem != ""){
                this.tasksList.push(this.addedItem.toLowerCase());
            }
            this.addedItem = "";
        },

        onClickClose(elementIndex){
            this.tasksList.splice(elementIndex, 1);
        },
    }

})