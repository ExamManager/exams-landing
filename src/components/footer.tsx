import * as React from "react";
import { Text } from "./text";

export const Footer: React.FC = () => (
  <footer className="flex h-[80px] items-center justify-center text-center">
    <Text size="2" className="text-white/40">
      Portfolio demo · signup unavailable
    </Text>
  </footer>
);
