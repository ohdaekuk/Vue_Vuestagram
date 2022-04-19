<template>
  <div>
    <div style="padding: 10px">
      <h4>팔로워</h4>
      <input
        @input="search($event.target.value)"
        placeholder="검색어를 입력해주세요."
      />
      <div v-for="(a, i) in follower" :key="i" class="post-header">
        <div
          :style="'background-image : url(' + a.image + ')'"
          class="profile"
        ></div>
        <span class="profile-name">{{ a.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  name: "mypage",
  props: {
    one: Number,
    two: Number,
  },
  setup() {
    let follower = ref([]);
    let saveFollower = ref([]);

    onMounted(() => {
      axios.get("/follower.json").then((a) => {
        follower.value = a.data;
        saveFollower.value = a.data;
      });
    });

    function search(검색어) {
      let newFollower = saveFollower.value.filter((a) => {
        // return a.name.indexOf(검색어) != -1; // 대소문자 구분해서 검색
        return a.name.match(new RegExp (검색어, "i")); // 대소문자 구분 없이 = ~.match(new RegExp(입력값, "i"))
      });

      follower.value = [...newFollower];
    }

    return { follower, search };
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>