import router from '@system.router';

export default {
    data: {
        title: "",
        shoeImage1:"/common/shoe1.jpeg"
    },
    onInit() {
        this.title = this.$t('strings.world');
    },
    filter(){
        router.push({
            uri: 'pages/filter/filter',
        });
    },
    viewShoe(){
        router.push({
            uri: 'pages/detail/detail',
        });
    }
}



