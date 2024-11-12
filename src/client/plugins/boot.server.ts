import { useConfigStore } from "~/stores/config";

export default defineNuxtPlugin(async () => {
  const { bootConfig } = useConfigStore();
  await bootConfig();
});
