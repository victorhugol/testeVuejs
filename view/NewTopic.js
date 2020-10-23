const NewTopic = {
    name : "NewTopic",
    template : `
        <div id="NewTopic">
            <p>Teste Teste Testando</p>
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
    }
}



export default NewTopic;
