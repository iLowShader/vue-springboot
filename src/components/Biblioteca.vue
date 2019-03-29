<template>
    <div class="list row">
        <div class="col-md-6">
            <h4>Lista Biblioteca</h4>
            <ul>
                <li v-for="(biblioteca, index) in bibliotecas" :key="index">
                    <router-link :to="{
                        
                        }">
                    </router-link>    
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>
