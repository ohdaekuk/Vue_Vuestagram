<template>
<div>
  <div v-if="step == 0">
    <Post v-for="(a, i) in PostData" :key="i" :PostData="PostData[i]" :i="i" />
  </div>

  <!-- 필터선택페이지 -->
  <div v-if="step == 1">
    <div :class="changeFilter" class="upload-image" :style="'background-image : url(' + userImage + ')'"></div>
    <div class="filters">
      <FilterBox
        v-for="필터 in inFilter"
        :key="필터"
        :userImage="userImage"
        :필터="필터"
      >
        <span> {{ 필터 }} </span>
      </FilterBox>
    </div>
  </div>

  <!-- 글작성페이지 -->
  <div v-if="step == 2">
    <div :class="changeFilter" class="upload-image" :style="'background-image : url(' + userImage + ')'"></div>
    <div class="write">
      <textarea @input="$emit('write', $event.target.value)" class="write-box">게시물 작성하기</textarea>
    </div>
  </div>

  <div v-if="step == 3">
    <MyPage :one="1" :two="2"/>
  </div>
</div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";
import MyPage from "./MyPage.vue"

export default {
  name: "Container",
  data() {
    return {
      inFilter: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
      // changeFilter: "",
    };
  },
  // mounted() {
  //   this.emitter.on("필터명", (a) => {
  //     this.changeFilter = a
  //   });
  // },
  props: {
    PostData: Object,
    step: Number,
    userImage: String,
    changeFilter: String
  },
  components: {
    Post: Post,
    FilterBox: FilterBox,
    MyPage: MyPage
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
  background-image: url("");
}
</style>