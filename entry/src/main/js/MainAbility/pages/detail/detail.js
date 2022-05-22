import router from '@system.router';

export default {
    data: {
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
    goBack(){
        router.back();
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
    }
}
