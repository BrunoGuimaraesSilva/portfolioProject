import React from "react";
import { Link, LinkProps } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";

interface GLinkProps extends LinkProps {
  href: string;
  children: React.ReactNode;
  color?: string;
}

const GLink: React.FC<GLinkProps> = ({
  href,
  children,
  color,
  ...rest
}) => {
  const bgDefaultColor = useColorModeValue(
    "background_dark",
    "background_light"
  );
  const defaultColor = useColorModeValue(
    "primary_dark.900",
    "primary_light.50"
  );

  const linkColor = color || defaultColor;

  return (
    <Link
      href={href}
      transition="background 0.3s ease"
      color={linkColor}
      _hover={{
        bg: bgDefaultColor,
        color: useColorModeValue("primary_light.50", "primary_dark.900"),
      }}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default GLink;
