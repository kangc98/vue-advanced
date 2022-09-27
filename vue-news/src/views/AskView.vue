<template>
    <div>
        <list-item></list-item>
        <!-- <ul class="news-list">
            <li v-for="item in fetchedAsk" :key="item.id" class="post">
                <div class="points">
                    {{ item.points }}
                </div>
                <div>
                    <p class="news-title">
                        <router-link :to="`item/${item.id}`">
                            {{ item.title }}
                        </router-link>
                    </p>
                    <small class="link-text">
                        {{ item.time_ago }} by
                        <router-link :to="`/user/${item.user}`" class="line-text">{{ item.user }}</router-link>
                    </small>
                </div>
            </li>
        </ul> -->
    </div>
</template>
<script>
// import { mapState, mapGetters } from 'vuex';
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus.js';
import ListMixin from '../mixins/ListMixin.js';

export default {
    components: {
        ListItem
    },
    mixins: [ListMixin]
    // created() {
    //     bus.$emit('start:spinner');
    //     setTimeout(() => {
    //         this.$store.dispatch('FETCH_ASK')
    //             .then(() => {
    //                 console.log('fetched');
    //                 bus.$emit('end:spinner');
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             });
    //     }, 3000);
    // }
    // computed: {
    //     // #3
    //     ...mapGetters([
    //         'fetchedAsk'
    //     ])
    //     // ...mapGetters({
    //     //     askItems: 'fetchedAsk'
    //     // })

    //     // #2
    //     // ...mapState({
    //     //     ask: state => state.ask
    //     // })

    //     // #1
    //     // ask() {
    //     //     return this.$store.state;
    //     // }
    // },
    // created() {
    //     this.$store.dispatch('FETCH_ASK');
    // }
}
</script>