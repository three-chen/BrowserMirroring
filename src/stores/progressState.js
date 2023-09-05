import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProgressState = defineStore('progressState', () => {
    /**
     * connecting   //建立连接
     * pairing      //请求配对
     * successful   //连接成功
     * failed       //连接失败
     * mirror       //投屏
     * close        //结束投屏
     * break        //意外断开连接
     * version-low  //版本太低
     */
    const store_progress_state = ref("connecting")

    const setProgressState = (newState) => {
        store_progress_state.value = newState;
    }

    return { store_progress_state, setProgressState }
})
