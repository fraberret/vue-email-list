const {createApp} = Vue

createApp({
    data(){ 
    return {
message:'hello',
mails:[],


}},
methods:{
    
    callApi(){
        axios.get( 'https://flynn.boolean.careers/exercises/api/random/mail').then(response =>{
            
        this.mails.push(response.data.response)

        })
    },

   

    
},
created(){
    for (let i = 0; i < 10; i++) {
        this.callApi();
    
}}
}).mount('#app')