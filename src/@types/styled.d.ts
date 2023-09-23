import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    white: string;
    "gray-300": string;
    "gray-400": string;
    "gray-500": string;
    "gray-600": string;
    "gray-700": string;

    "green-400": string;
    "green-500": string;
    
    "orange-400": string;

    "red-400": string;
    "red-500": string;
    black: string;
  }
}
