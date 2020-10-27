import PaginaUm from '../component/topics/paginaUm.js';
import PaginaDois from '../component/topics/paginaDois.js';




const NewTopic = {
    name : "NewTopic",
    template : `
        <div id="NewTopic">
            <pagina-um/>
            <pagina-dois/>
        </div>
    `,
    data(){
        return{
            newTopic: {
                userId: " ",
                title: " ",
                content: " ",
                topicCategory: " ",
                categoriesTagged: []
            }
        }
    },
    components:{
        PaginaUm, PaginaDois
    }
}



export default NewTopic;
