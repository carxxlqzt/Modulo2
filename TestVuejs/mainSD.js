const header = new Vue ({
    el:"#header",
    data:{
        title:'Loquizta',
        firstLetter: "",
        

    },
    methods:{
        getFrstLetter(){
           let firstLtter =this.title.slice(0,1)
          this.firstLetter = firstLtter
          this.title = this.title.slice(1,this.title.length)
        },
        addClass(){
            
        }
    }
})
header.getFrstLetter()
var efecto = new Vue({
    el: '#root',
    data: {
        imagen: [
            'https://blog.nubecolectiva.com/wp-content/uploads/2018/10/img_destacada_blog_devs-9-950x305.png'
        ],
        isLoad: false,
        parraf:"Hi bitches"
    },
    crearImagen() {
        this.cargarImagen()
    },
    methods: {
        cargarImagen() {
            this.isLoad = false
            this.$nextTick(() => {
                this.parraf = this.parraf[this.parraf];
            })
        },
        esperarTiempo() {
            setTimeout(function() {
                this.isLoad = true
            }.bind(this), 3000);
        }
    }
})



	new Vue({el: '#app', data: {name: 'David'}})
