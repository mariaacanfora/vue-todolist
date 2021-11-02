Vue.config.devtools = true;

new Vue({
    el: "#root",
    data: {
        addedItem: "",
        colorItem: "#ff0000",
        tasksList: [
            {
                title: "fare la spesa",
                checked: false,

            }
        ],
    },

    methods: {

        onClickAdd() {
            
            if (!this.tasksList.includes(this.addedItem.toLowerCase()) && this.addedItem != ""){
                this.tasksList.push({
                    title: this.addedItem.toLowerCase(),
                    borderColor: `border-color: ${this.colorItem} !important`,
                    checked: false,
                });
            }
            this.addedItem = "";
        },

        onClickClose(elementIndex){
            this.tasksList.splice(elementIndex, 1);
        },

        getUndoneList(){
            return this.tasksList.filter((element) => {
                return !element.checked
            })
        }
    
    }

})

