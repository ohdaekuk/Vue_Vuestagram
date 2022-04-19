<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li @click="step--">Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="step == 1" @click="step++">Next</li>
        <li v-if="step == 2" @click="publish">발행</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>
    <Container :PostData="PostData" :step="step" :userImage="userImage" @write="content = $event" :changeFilter="changeFilter"/>
    <button v-if="step == 0" @click="getData()">더보기</button>
  

    <div class="footer">
      <ul class="footer-button-plus">
        <input @change="upload" multiple type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
    <br />
    <!-- <h4>{{$store.state.name}}</h4>
    <h4>{{$store.state.age}}</h4>
    <button @click="$store.commit('이름변경')">이름변경</button> &nbsp;
    <button @click="$store.commit('나이변경', 10)">나이변경</button> -->

    <!-- <div v-if="step == 0">내용0</div>
  <div v-if="step == 1">내용1</div>
  <div v-if="step == 2">내용2</div>
  <button @click="step = 0">버튼0</button>
  <button @click="step = 1">버튼1</button>
  <button @click="step = 2">버튼2</button> -->
  </div>

</template>


<script>
import Container from "./components/Container.vue";
import {mapMutations, mapState, mapActions} from 'vuex'

export default {

  name: "App",
  data() {
    return {
      step: 3,
      userImage: "",
      content: "",
      changeFilter: "",
      카운터: 0
    };
  },

  mounted() {
    this.emitter.on("필터명", (a) => {
      this.changeFilter = a
    });
  },

  components: {
    Container: Container,
  },

  computed:{ // computed => 계산결과를 저장 재랜더링해도 값이 바뀌지않음 methods랑 다르다
    ...mapState(['name', 'age', 'likes']),
    ...mapState({PostData : 'PostData'})
  },

  methods: { // 재랜더링 할때마다 값이 바뀔 수 있음

  ...mapMutations(['setMore']),
  ...mapActions(['getData']),

    now(){
      return new Date()
    },
    // ============================파일 업로드============================

    upload(e) {
      let 파일 = e.target.files;

      let url = URL.createObjectURL(파일[0]);
      this.userImage = url;
      this.step++;
    },
    // ============================게시물 발행============================

    publish() {
      var 내게시물 = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.userImage,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.content,
        filter: this.changeFilter,
      };
      this.PostData.unshift(내게시물);
      this.step = 0;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>