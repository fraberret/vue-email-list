const {createApp} = Vue

createApp({
    data(){ 
    return {
message:'hello',
mailList:null,
}},
methods:{
    callApi(){
        axios.get( 'https://flynn.boolean.careers/exercises/api/random/mail').then(response =>{
            this.mailList=response.data.response
            ;
        })
    }
},
mounted(){
    this.callApi()
}
}).mount('#app')