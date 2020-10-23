const Topic = {
    name : "topic",
    template : `
        <div id="Topic" class="container">

            <!-- Topico -->

            <div class="container-fluid">

                <div class="mb-3 row d-flex align-items-center " style="height:300px;">
                   <div class="col h-100 float-right pl-0">
                       <img class="h-100 efeito-size" src="../assets/Logo.svg" alt="logo Cartografia da Cultura" @click="pushTopics">
                   </div>
                   <div class="col text-center pl-0">
                        <h1 class="font-weight-bold float-left pl-0 pink-text" style="font-size:4vw;">VOTE!</h1>
                   </div>
                   <div class="col-2 mt-4">
                       <p class="h2 text-center">{{topic.postiveSupports}}</p>
                       <i class="fas fa-thumbs-up  mb-4 clean-button" style="font-size:100px;"></i>
                   </div>
                   <div class="col-2 pl-0">
                       <p class="h2 text-center mb-2">{{topic.negativeSupports}}</p>
                       <i class="fas fa-thumbs-down clean-button" style="font-size:100px;"></i>
                   </div>
                </div>
                <div class="row">
                    <h1 class="mb-3 font-weight-bold pl-0">{{topic.title}}</h1>
                </div>
                <div class="row">
                    <p>Categoria {{topic.topicCategory}} | {{topic.userId}} | {{topic.createAt}}</p>
                </div>
                <div class="row">
                    <p class="mt-2">{{topic.content}}</p>
                </div>
            </div>

            <!-- Formulário de comentários -->

            <hr class="mt-3 mb-3">
            <div class="container-fluid">
                <h2 class="row font-weight-bold">Comentários</h2>
                <h3 class="row">Olá, {{user.firstName}} {{user.lastName}}</h3>
                <p class="row">Escreva aqui</p>
                <div class="row">
                    <form class="container-fluid">
                        <div class="form-group row">
                            <div class="input-group input-group-lg">
                                <textarea class="form-control form-cartografia" id="textComment" rows="1" type="" v-model="user.comment"></textarea>
                            </div>
                            <h4 class="clean-button row mt-2 pl-3 font-weight-bold" v-on:click="sendComment">Publicar!</h4>
                        </div>
                    </form>
                </div>
            </div>

            <hr class="mt-3 mb-3">

            <!-- Comentário -->

            <div class="card" v-for="reply in replies" :key="reply.id">
                <div class="card-body">
                    <h4 class="card-title"> {{reply.firstName + " " + reply.lastName}} </h4>
                    <p class="card-text">{{reply.content}}</p>
                    <p class="card-text">{{reply.createAt}}</p>
                </div>
            </div>


            <!-- Para Debug -->
            <hr class="m-6">
            <p>{{topic}}</p>
            <p>{{user}}</p>
            <p>{{replies}}</p>
            <p>{{user.commment}}</p>

            <link rel="stylesheet" href="../style/topic.css">

        </div>
    `,
    data(){
        return {
            topic:{},
            replies:[],
            user: {
                id: 2,
                firstName: " ",
                lastName: " ",
                topicId: " ",
                comment: " " 
            }
        }
    },
    mounted() {
        const url = `http://127.0.0.1:4000/topic/${this.$route.params.id}` 
        const urlGetReplies = `http://127.0.0.1:4000/getCurrentTopicReplies/${this.$route.params.id}`
        const urlGetId = `http://127.0.0.1:4000/users/${this.user.id}`

        axios.get(url).then(res =>{
            this.topic = res.data
            this.user.topicId = res.data.id
        }).catch( err => {
            this.topic = err.data
        })

        axios.get(urlGetReplies).then(res =>{
            let repliesAt = res.data
            repliesAt.forEach(
                reply => {
                    const searchName = `http://127.0.0.1:4000/users/${reply.userId}`
                    axios.get(searchName).then(res =>{
                        reply.firstName = res.data[0].firstName
                        reply.lastName = res.data[0].lastName
                        this.replies.push(reply)
                    }).catch(err => {
                        console.log(err)
                    })
                }
            )
        }).catch( err => {
            console.log(err)
            this.replies = err
        })

        axios.get(urlGetId).then(res => {
            this.user.firstName = res.data[0].firstName
            this.user.lastName = res.data[0].lastName
        }).catch( err => {
            this.user = err.data
        })
    },
    methods: {
        sendComment: function(){
            let urlSendComment = `http://127.0.0.1:4000/reply/` 
            let bodyToSend = {
                content: this.user.comment,
                topicId: this.user.topicId,
                userId: this.user.id
            }

            this.user.comment =  " "

            axios.post(urlSendComment, bodyToSend).then(res => {
                console.log("Comentário enviado com sucesso")
                this.$router.go()
            }).catch( err => {
                console.log(err)
            })
        },
        pushTopics: function(){
            this.$router.push('/')
        }
    }
}


export default Topic;
