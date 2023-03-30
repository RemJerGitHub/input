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
                console.log("cas true");
                return true;                
            } else {
                return false;
            }             
        },
        verifWorld(){
            if (this.classe=="world"){
                console.log("cas true");
                return true;                 
            } else {
                return false;
            }             
        }
    }
}).mount('#monApp');