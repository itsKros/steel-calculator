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
            type.splice(index, 1);
          },


    },
    

});