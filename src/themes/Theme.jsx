import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { checkboxTheme } from "./CheckBoxTheme";

const config = {
  initialColorMode: 'dark', // 'dark' | 'light'
  useSystemColorMode: false,
}

export const CustomTheme = extendTheme({
  components: { Checkbox: checkboxTheme },
  config
});