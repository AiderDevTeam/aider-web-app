import { defineStore, acceptHMRUpdate } from "pinia";

interface UiState {
  pageLoader: boolean;
}

const useUiStore = defineStore("uiStore", {
  state: (): UiState => {
    return {
      pageLoader: false,
    };
  },
  actions: {
    setPageLoader(value: boolean) {
      this.pageLoader = value;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUiStore, import.meta.hot));
}

export default useUiStore;
