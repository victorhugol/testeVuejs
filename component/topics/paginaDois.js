const PaginaDois = {
    name : 'pagina-dois',
    template : `
    <section
        id="section2"
        class="stepper-section""
    >
        <span class="title-1 bolder">Regras para iniciar um diálogo</span>
        <!-- 1 -->
        <span class="body-2 bolder mg-top16">1. Uma vez feito o login, você poderá:</span>
        <ol>
        <li class="body-2 justify-text">
            Iniciar um debate.
        </li>
        <li class="body-2 justify-text">
            Participar de um debate já iniciado por outro usuário.
        </li>
        <li class="body-2 justify-text">
            Concordar ou não concordar ao votar em um debate iniciado.
        </li>
        </ol>
        <!-- 2 -->
        <span class="body-2 bolder mg-top24">2. Para iniciar o debate: </span>
        <ol class="list">
        <li class="body-2 justify-text">
            insira um título que represente o assunto principal da discussão.
        </li>
        <li class="body-2 justify-text">
            insira um texto com sua argumentação diretamente na plataforma.
        </li>
        <li class="body-2 justify-text">
            escolha uma ou mais categorias relacionada ao assunto que quer discutir.
        </li>
        </ol>
        <!-- 3 -->
        <span class="body-2 bolder mg-top24">3. Uma vez iniciado o debate, você não poderá: </span>
        <ol class="list">
        <li class="body-2 justify-text">
            deletar o debate que você iniciou;
        </li>
        <li class="body-2 justify-text">
            deletar um comentário em um debate que você participou.
        </li>
        </ol>
        <!-- 4 -->
        <span class="body-2 bolder mg-top24">4. Serão deletados: </span>
        <ol class="list">
        <li class="body-2 justify-text">
            os comentários ofensivos, com discurso de ódio ou qualquer ato de comunicação que inferiorize ou incite contra uma pessoa ou grupo,
            tendo por base características como raça, gênero, etnia, nacionalidade, religião, orientação sexual ou outro aspecto passível de discriminação.
        </li>
        <li class="body-2 justify-text">
            qualquer comentário que implique em uma ação ilegal ou que tenham a intenção de sabotar o espaço de debate.
        </li>
        </ol>
        <!-- 5 -->
        <span class="body-2 bolder mg-top24">5. Recomendamos que: </span>
        <ol class="list">
        <li class="body-2 justify-text">
            Insira um texto revisado por você. Veja se está claro e objetivo.
        </li>
        <li class="body-2 justify-text">
            Seja gentil ao dialogar com as outras vozes que têm pontos de vista diferente do seu.
        </li>
        </ol>
        <!-- ACCEPT TERMS -->
        <div class="stepper-rules row al-items-center">

        <span
            class="body-2 mg-left8"
        >
            Eu li e concordo com as
            <strong
            style="cursor: pointer"
            @click="scrollToTop()"
            >
            Regras da Plataforma
            </strong>.
        </span>
        <span
            class="caption mg-left8"
            :class="{ 'rules-accept-error' : rulesError }"
        >(Esta opção deve ser marcada*)</span>
        </div>
    </section>    
    `,
    data(){
        return {
            rulesAccepted: false,
            rulesError: false,

        }
    }
}


export default PaginaDois;