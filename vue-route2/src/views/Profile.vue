<template>
    <div> 
            <h1>Welcome to User profile</h1>
            <input type="text" v-model="userName" placeholder="Enter your name">
            <input type="email" v-model="email" placeholder="Enter your email">
            <input type="password" v-model="password" placeholder="Enter your password">
    </div>
</template>

<script>
export default {
    name:'profile-view',
    data(){
        return({
            userName:'',
            email: '',
            password: ''
        })
    },
}
</script>
