<template>
    <div class="container">
        <div class="container_top">
            <div id="title_todo">
                <h3>ToDOList</h3>
            </div>
            <div id="create_todo">
                <input type="text" v-model="input_todo" @keyup.enter="update_input">
                <button @click="update_input">등록</button>
            </div>
        </div>
        <div class="container_bottom" :todo="output_todo" >
            <div :key="todo.id + 'A'" v-for="todo in output_todo">
                    <span>{{todo.text}}</span>
                    <button @click="delete_btn(todo.id)">삭제</button>    
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input_todo: '',
            result : false,
            output_todo : [
                {id: 1, text: 'example', check: false}
            ],
            id : 1
        }
    }
    ,
    methods: {
        update_input () {
            this.result = confirm("입력하신 내용을 등록하시겠습니까?");
            if (this.result) {
                this.output_todo.push({
                    id: this.output_todo.length + 1,
                    text: this.input_todo,
                    check: false
                })
                this.input_todo = '';
            } 
        },
        delete_btn (e) {
            this.result = confirm("입력하신 내용을 삭제하시겠습니까?");
            console.log(this.output_todo);
            if (this.result) {
                this.output_todo[e - 1].check = true;
                this.output_todo = this.output_todo.filter(function(seq) {
                    return seq.check == false;
                })
                this.id ++;
                this.input_todo = '';
                console.log(this.output_todo)
            }
        }
    },
}
</script>