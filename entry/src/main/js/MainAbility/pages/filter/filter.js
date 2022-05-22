import router from '@system.router';

export default {
    data: {
        title: "",
        value: 2500,
        startValue: 1000,
        currentValue: 2500,
        endValue: 10000,
        toggle_list: [
            { "id":"1001", "name":"6 inches", "checked":true },
            { "id":"1002", "name":"7 inches", "checked":false },
            { "id":"1003", "name":"8 inches", "checked":false },
            { "id":"1004", "name":"9 inches", "checked":false },
        ],
        toggles: ["6 inches","7 inches","8 inches","9 inches"],
        idx: ""
    },
    allClick(arg) {
        this.idx = arg
    },
    allChange(e) {
        if (e.checked === true) {
            for (var i = 0; i < this.toggle_list.length; i++) {
                if (this.toggle_list[i].id === this.idx) {
                    this.toggle_list[i].checked = true
                } else {
                    this.toggle_list[i].checked = false
                }
            }
        }
    },
    onInit() {
        this.title = "Hello World";
    },
    goBack(){
        router.back();
    },
    setValue(e) {
        if (e.mode == "start") {
            this.value = e.value;
            this.startValue = e.value;
        } else if (e.mode == "move") {
            this.value = e.value;
            this.currentValue = e.value;
        } else if (e.mode == "end") {
            this.value = e.value;
            this.endValue = e.value;
        }
    }
}
