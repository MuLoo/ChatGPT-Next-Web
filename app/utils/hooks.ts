import { useMemo } from "react";
import { useAccessStore, useAppConfig } from "../store";
import { collectModels } from "./model";

export function useAllModels() {
  const accessStore = useAccessStore();
  const configStore = useAppConfig();
  const models = useMemo(() => {
    return collectModels(
      configStore.models,
      [
        configStore.customModels,
        accessStore.customModels,
        accessStore.multipleCustomConfig.map((item) => item.customModels),
        accessStore.defaultInitialConfig.map((item) => item.customModels),
      ].join(","),
    );
  }, [
    accessStore.customModels,
    configStore.customModels,
    accessStore.multipleCustomConfig,
    accessStore.defaultInitialConfig,
    configStore.models,
  ]);

  return models;
}
