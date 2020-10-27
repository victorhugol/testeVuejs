const PaginaTres = {
    name : 'pagina-tres',
    template : `
        <section
        v-if="currentStep === 3"
        class="stepper-section"
        >

        <span class="title-3 bolder">Crie seu diálogo.</span>
        <span class="headline-3 bolder mg-top16">Título do seu diálogo</span>
        <span class="caption mg-top4">Insira um título que represente o assunto principal da discussão.</span>
        <!-- TITLE -->
        <q-input
        v-model.trim="title"
        class="input"
        dense
        square
        filled
        bottom-slots
        :error="$v.title.$error"
        :error-message="titleErrorMessage"
        @blur="$v.title.$touch"
        />

        <span class="headline-3 bolder">Texto do Diálogo</span>
        <span class="caption mg-top4">Insira um texto revisado por você. Veja se está claro e objetivo.</span>
        <!-- CONTENT -->
        <q-input
        v-model="content"
        class="input"
        type="textarea"
        counter
        dense
        square
        filled
        bottom-slots
        hint="máximo de 2000 caracteres"
        :error="$v.content.$error"
        :error-message="contentErrorMessage"
        @blur="$v.content.$touch"
        />
        <!-- CATEGORY -->
        <span class="headline-3 bolder mg-top16">Categoria do diálogo</span>
        <span class="caption mg-top8">1. Marque a opção que representa o tema principal do seu diálogo</span>
        <span class="caption">2. Marque as opções que se relacionam ao seu diálogo</span>
        <div class="category-field row no-wrap  mg-top8">
        <q-list class="category-list">
            <q-item
            v-for="item in options"
            :id="item-${item.value}"
            :key="item.value"
            class="category-list-item"
            clickable
            @click="tagEvent(item)"
            >
            <q-item-section
                class="category-list-item-section"
                avata
            >
                <!-- iconId -1 : index of array of icons (0 a 17) -->
                <icon-base
                :id="sicon-${item.value}"
                class="category-list-icon"
                :icon-id="item.value -1"
                width="16"
                :set-white="false"
                />
            </q-item-section>

            <q-item-section
                :id="category-label-${item.value}"
                class="category-list-item-section"
            >
                <span class="caption bolder">{{ item.label }}</span>
            </q-item-section>
            </q-item>
        </q-list>
        <!-- show tags -->
        <div class="tag-field">
            <div class="main-tag">
            <span
                id="label"
                class="caption"
            >categoria principal</span>
            <div
                v-if="topicCategory !== null"
                class="main-tag-badge caption bolder"
                :style="{ 'color': topicCategory.color }"
            >
                <span class="caption bolder">{{ topicCategory.label }}</span>
                <i
                id="untag"
                class="far fa-times-circle mg-left16"
                @click="untagMain()"
                />
            </div>
            </div>
            <div class="related-tags">
            <span class="caption">categorias relacionadas</span>
            <div class="related-tags-grid">
                <div
                v-for="item in categoriesTagged"
                :key="item.value"
                class="categorys-tags-badge"
                :style="{ 'border-color': item.color }"
                >
                <span
                    class="caption bolder"
                    :style="{ 'color': item.color }"
                > {{ item.label }} </span>
                </div>
            </div>
            </div>
        </div>
        </div>
        <!-- TERMS -->
        <div class="stepper-terms row no-wrap al-items-center">
        <q-checkbox
            v-model="termsAccepted"
            size="32px"
            color="black"
        />
        <span class="body-3 mg-left8">Eu li e concordo com os
            <router-link
            class="link"
            :to="{ path: '/terms', hash: '#terms'}"
            >
            <span
                class="body-3 bolder"
            >Termos de Uso</span>
            </router-link>
            e
            <router-link
            class="link"
            :to="{ path: '/terms', hash: '#privacity'}"
            >
            <span
                class="body-3 bolder"
            >Privacidade.</span>
            </router-link>
        </span>
        </div>
    </section>
    `
}