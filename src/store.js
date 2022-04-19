import axios from 'axios'
import {createStore} from 'vuex'
import PostData from './PostData'

const store = createStore({
    state() {
        return {
            name: 'kim',
            age: 20,
            likes: [0, 0, 0],
            likesCheck: [0, 0, 0],
            PostData: PostData,
            click : 0,
        }
    },
    mutations: {
        이름변경(state) {
            if (state.name == 'kim') {

                state.name = 'park'

            } else {

                state.name = 'kim'

            }
        },
        나이변경(state, num) {
            if (num > 0) {

                state.age += num

            } else {

                state.age++

            }
        },
        likes(state, i) {
            if (state.likesCheck[i] == 1) {

                state.likes[i]--
                state.likesCheck[i]--

            } else {

                state.likes[i]++
                state.likesCheck[i]++

            }
        },
        setMore(state, data){
          state.PostData.push(data)
        }
    },
    actions: {
      getData(context){
        if(this.state.click == 0){
          
          axios.get("https://codingapple1.github.io/vue/more0.json").then((a)=>{
            context.commit('setMore', a.data)
            this.state.click++

          })

        }else{

          axios.get("https://codingapple1.github.io/vue/more1.json").then((a)=>{
            context.commit('setMore', a.data)

          })
        }
      }
    }
})

export default store