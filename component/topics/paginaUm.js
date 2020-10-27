const PaginaUm = {
    name : 'pagina-um',
    template : `
        <section
        id="section1"
        class="stepper-section">

        <span class="title-3 bolder mg-top16">Sobre os Diálogos</span>
        
        <span class="headline-3 bolder mg-top16">Diálogos abertos</span>
        
        <p class="body-2 mg-top8 justify-text">
            Você poderá iniciar um debate, que aqui chamamos de diálogo, para compartilhar pontos de vista com outras pessoas sobre os assuntos
            que te preocupam em relação à cultura em Campo Grande.
            O espaço de diálogos abertos é destinado aos gestores, produtores, promotores da cultura local e também à comunidade artística. Sendo um desses agentes,
            você poderá expor seus argumentos e abrir uma conversa com todos.
            Considere que o debate não aciona nenhum mecanismo de atuação concreta. Mas alimenta as tomadas de decisão do Fórum Municipal de Cultura,
            identifica a necessidade de encontros presenciais específicos (assembleias, reuniões) como também contribui para a compreensão das necessidades da
            comunidade artística de Campo Grande.
        </p>

        <span class="headline-3 bolder mg-top16"> 
            Recomendações para participar de um diálogo aberto
        </span>

        <p class="body-2 mg-top8 justify-text">
        
        1. Para iniciar um debate é necessário que você faça um cadastro na
        <router-link
            class="link body-2"
            to="/signUp"
        >
            <strong>Plataforma Cartografia da Cultura</strong>
        </router-link>.
        Os usuários cadastrados também podem participar das discussões já iniciadas através dos comentários e/ ou indicar se concorda ou não concorda
        clicando nos botões “👍” ou “👎” encontrados em cada debate proposto.
        </p>
        <p class="body-2 mg-top8 justify-text">
        2. Não escreva o título do debate ou frases inteiras em letras maiúsculas. Na Internet, isso é considerado o mesmo que gritar. E ninguém gosta disso.
        </p>
        <p class="body-2 mg-top8 justify-text">
        3. Qualquer debate ou comentário que implique em uma ação ilegal será deletado. Também  serão deletados comentários que tenham a intenção de sabotar o espaço de debate.
        </p>
        <p class="body-2 mg-top8 justify-text">
        4. As críticas duras são bem vindas. Este é um espaço de pensamento livre, mas recomendamos que, ainda que a crítica seja dura, também seja gentil e inteligente.
        </p>
        <p class="body-2 mg-top8 justify-text">
        5. Desfrute deste espaço, das vozes que o preenchem, ele também é seu.
        </p>
    </section>    
    
    `
}


export default PaginaUm;