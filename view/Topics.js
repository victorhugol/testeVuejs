import axiosInstance from "../apiClient/index.js"
import TopicCard from "../component/topics/TopicCard.js"

const Topics = {
    name : "topics",
    template : `
        <div id="Topics" class="container-fluid">
            <div class="row">
                <div class="col-2 float-left mr-2 mb-3 mt-3">
                    <div class="mb-3 logo">
                        <img src="../assets/Logo.svg" alt="logo Cartografia da Cultura">
                    </div>
                    <div class="justify-content-center mb-4 position-block">
                        <p class="h4 text-center font-weight-bold">Mais Recentes</p>
                        <p class="h4 text-center font-weight-bold">Mais Comentados</p>
                    </div>
                    <div class="justify-content-center row mb-5 mt-5" >
                        <i class="fas fa-search h3 text-left"></i>
                        <input class="form-control mr-5 ml-5"type="">
                    </div>
                    <div class="justify-content-center row">
                        <button class="btn btn-primary mt-10 d-block" @click="pushNewTopic">
                            <p class="h4">
                                Insira um diálogo
                            </p>
                        </button>
                    </div>
                </div>
                <div class="col-auto ">
                    <div class="mb-3" v-for="topic in topics.data" :key="topic.id">
                            <TopicCard  v-bind:title="topic.title" :positiveSupports="topic.postiveSupports" 
                              :negativeSupports="topic.negativeSupports" :createAt="formatDate(topic.createAt)"
                              :numerOfReplies="topic.numerOfReplies"
                              :content="topic.content"
                              :id="topic.id"
                            ></TopicCard>
                    </div>
                </div>
            </div>
        </div>
    `,
    components: { TopicCard },
    data(){
        return {
            topics:{},
        }
    },
    methods:{
        length(){
            this.topics.data.length
        },
        formatDate(dateToFormat){
            let date = new Date(dateToFormat)
            console.log(date)
            return date.getDate() + "/" + date.getMonth() + "/" + date.getYear() + " | " + date.getHours() + ":" + date.getMinutes()
        },
        pushNewTopic(){
            this.$router.push('novodialogo')
        }
    },
    mounted(){
        const url = "topicsMostRecent/"
        console.log(url)
        axiosInstance.get(url).then(res =>{
            this.topics = res
            console.log(res)
        }).catch( err =>{
            console.log( "Teste" )
            console.log(err)
        })
    }
}



export default Topics;
