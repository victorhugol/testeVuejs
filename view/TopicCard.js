
const TopicCard = {
    name : "TopicCard",
    template : `
        <div class="card p-2 d-flex" @click="pushDialogo">
            <div class="card-body">
                <div class="container">
                    <div class="row">
                        <div class="col-8">
                            <h1 class="card-title font-weight-bold">{{title}}</h1>
                            <p>Criado em: {{createAt}}</p>
                            <p>comentários: {{numerOfReplies}}</p>
                            <p class="h4 text-justify">{{content}}</p>
                        </div>

                        <div class="col vertical">
                        </div>

                        <div class="col justify-content-center text-center align-middle">
                            <div class="row vertical-divider  justify-content-center mt-4">
                                <i class="far fa-thumbs-up h1"></i>
                            </div>
                            <div class="row justify-content-center">
                                <h5>{{positiveSupports}}</h5>
                            </div>
                            <div class="row justify-content-center mt-2">
                                <i class="far fa-thumbs-down h1"></i>
                            </div>
                            <div class="row justify-content-center">
                                <h5>{{positiveSupports}}</h5>
                            </div>
                            <div class="row justify-content-center mt-2">
                                <h3 class="font-weight-bold">Votos {{positiveSupports + negativeSupports}}</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <link rel="stylesheet" href="../style/topicCard.css">
        </div>
    `,
    props: ["title", "createAt", "positiveSupports", "negativeSupports", "numerOfReplies", "views", "topicCategory", "id", "content"],
    data(){
        return {
            topics:{}
        }
    },
    methods:{
        length(){
            this.topics.data.length
        },
        pushDialogo: function(){
            this.$router.push({path:`/dialogo/${this.id}`})
        }
    },
    style: {

    }
}



export default TopicCard;
