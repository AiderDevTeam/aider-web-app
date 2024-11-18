import useUiStore from "~/store/ui";

export default defineNuxtRouteMiddleware(({ to, from }) => {
  useUiStore().setPageLoader(true);
});