Vue.createApp({
    data(){
        return{
            classe:'',
            couleur:''
        }
    },
    methods:{
        verifHello(){
           if (this.classe=="hello"){
                return true;                
            } else {
                return false;
            }             
        },
        verifWorld(){
            if (this.classe=="world"){
                return true;                 
            } else {
                return false;
            }             
        }
    }
}).mount('#monApp');