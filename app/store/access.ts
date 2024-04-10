import {
  ApiPath,
  DEFAULT_API_HOST,
  ServiceProvider,
  StoreKey,
} from "../constant";
import { getHeaders } from "../client/api";
import { getClientConfig } from "../config/client";
import { createPersistStore } from "../utils/store";
import { ensure } from "../utils/clone";

let fetchState = 0; // 0 not fetch, 1 fetching, 2 done

export const DEFAULT_OPENAI_URL =
  getClientConfig()?.buildMode === "export"
    ? DEFAULT_API_HOST + "/api/proxy/openai"
    : ApiPath.OpenAI;

const SomeDefaultState = {
  provider: ServiceProvider.OpenAI,
  // openai
  openaiUrl: DEFAULT_OPENAI_URL,
  openaiApiKey: "",

  // azure
  azureUrl: "",
  azureApiKey: "",
  azureApiVersion: "2023-08-01-preview",

  // google ai studio
  googleUrl: "",
  googleApiKey: "",
  googleApiVersion: "v1",
};

const DEFAULT_ACCESS_STATE = {
  accessCode: "",
  useCustomConfig: false,
  useMultipleCustomConfig: false,
  // 添加多组自定义配置
  multipleCustomConfig: [] as { [key: string]: any }[],
  // 随着项目部署时，默认填入的配置
  defaultInitialConfig: [] as { [key: string]: any }[],

  ...SomeDefaultState,
  // server config
  needCode: true,
  hideUserApiKey: false,
  hideBalanceQuery: false,
  disableGPT4: false,
  disableFastLink: false,
  customModels: "",
};

export const useAccessStore = createPersistStore(
  { ...DEFAULT_ACCESS_STATE },

  (set, get) => ({
    initialize() {
      // 初始化的时候，写入默认的配置
      const customDefaultConfig =
        process.env.NEXT_PUBLIC_MULTIPLE_CONFIG_NUMBER;
      const arr = Array.from(
        { length: Number(customDefaultConfig) },
        (_, index) => index + 1,
      );
      // 最多9组。必须显示使用环境变量。不可以动态获取，否则nextjs不会替换
      const temp: { [key: string | number]: string | undefined } = {
        1: process.env.NEXT_PUBLIC_MULTIPLE_CONFIG_1,
        2: process.env.NEXT_PUBLIC_MULTIPLE_CONFIG_2,
        3: process.env.NEXT_PUBLIC_MULTIPLE_CONFIG_3,
        4: process.env.NEXT_PUBLIC_MULTIPLE_CONFIG_4,
        5: process.env.NEXT_PUBLIC_MULTIPLE_CONFIG_5,
        6: process.env.NEXT_PUBLIC_MULTIPLE_CONFIG_6,
        7: process.env.NEXT_PUBLIC_MULTIPLE_CONFIG_7,
        8: process.env.NEXT_PUBLIC_MULTIPLE_CONFIG_8,
        9: process.env.NEXT_PUBLIC_MULTIPLE_CONFIG_9,
      };
      const defaultConfigList = arr
        .filter((item) => temp[item])
        .map((item) => {
          const [provider, url, apiKey, model] = (temp[item] || "").split(
            ",",
          ) as [string, string, string, string];
          const isOpenAi = provider.toLocaleLowerCase() === "openai";
          return {
            ...SomeDefaultState,
            ...{
              provider,
              [isOpenAi ? "openaiUrl" : "azureUrl"]: url,
              [isOpenAi ? "openaiApiKey" : "azureApiKey"]: apiKey,
              customModels: model,
            },
          };
        });
      let defaultGlobalConfig = {};
      if (process.env.NEXT_PUBLIC_DEFAULT_CONFIG) {
        const [provider, url, apiKey, model] =
          process.env.NEXT_PUBLIC_DEFAULT_CONFIG.split(",") as [
            string,
            string,
            string,
            string,
          ];
        const isOpenAi = provider.toLocaleLowerCase() === "openai";
        defaultGlobalConfig = {
          provider,
          [isOpenAi ? "openaiUrl" : "azureUrl"]: url,
          [isOpenAi ? "openaiApiKey" : "azureApiKey"]: apiKey,
          customModels: model,
        };
      }
      set((partial) => ({
        ...partial,
        ...defaultGlobalConfig,
        defaultInitialConfig: defaultConfigList,
      }));
    },
    enabledAccessControl() {
      this.fetch();

      return get().needCode;
    },

    isValidOpenAI() {
      return ensure(get(), ["openaiApiKey"]);
    },

    isValidAzure() {
      return ensure(get(), ["azureUrl", "azureApiKey", "azureApiVersion"]);
    },

    isValidGoogle() {
      return ensure(get(), ["googleApiKey"]);
    },

    isValidGoogleSpecific(details: any) {
      return ensure(details, ["googleApiKey"]);
    },
    isValidAzureSpecific(details: any) {
      return ensure(details, ["azureUrl", "azureApiKey", "azureApiVersion"]);
    },
    isValidOpenAISpecific(details: any) {
      return ensure(details, ["openaiApiKey"]);
    },

    isAccessCodeValid() {
      // console.log(
      //   "isAccessCodeValid",
      //   get().accessCode,
      //   process.env.NEXT_PUBLIC_CODE,
      // );
      const pwdArr = process.env.NEXT_PUBLIC_CODE?.split(",");
      return pwdArr?.includes(get().accessCode);
    },

    isAuthorized() {
      this.fetch(); // has token or has code or disabled access control
      return (
        this.isValidOpenAI() ||
        this.isValidAzure() ||
        this.isValidGoogle() ||
        !this.enabledAccessControl() ||
        (this.enabledAccessControl() && ensure(get(), ["accessCode"]))
      );
    },
    fetch() {
      if (fetchState > 0 || getClientConfig()?.buildMode === "export") return;
      fetchState = 1;
      fetch("/api/config", {
        method: "post",
        body: null,
        headers: {
          ...getHeaders(),
        },
      })
        .then((res) => res.json())
        .then((res: DangerConfig) => {
          console.log("[Config] got config from server", res);
          set(() => ({ ...res }));
        })
        .catch(() => {
          console.error("[Config] failed to fetch config");
        })
        .finally(() => {
          fetchState = 2;
        });
    },
  }),
  {
    name: StoreKey.Access,
    version: 2,
    migrate(persistedState, version) {
      if (version < 2) {
        const state = persistedState as {
          token: string;
          openaiApiKey: string;
          azureApiVersion: string;
          googleApiKey: string;
        };
        state.openaiApiKey = state.token;
        state.azureApiVersion = "2023-08-01-preview";
      }

      return persistedState as any;
    },
  },
);
