let app = new Vue({

    el:'#home',
    data:{
        phoneNumbers: [{ phone: "" }],
    },

    watch: {
        
    },

    computed: {
        
    },
    methods:{
          addField(value, fieldType) {
            fieldType.push({ value: "" });
          },
          removeField(index, fieldType) {
            fieldType.splice(index, 1);
          },


    },
    

});