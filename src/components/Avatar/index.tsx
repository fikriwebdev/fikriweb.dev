import clsm from "@/utils/clsm";
import * as RadixAvatar from "@radix-ui/react-avatar";
import { VariantProps, cva } from "class-variance-authority";

const letterColors: Record<string, string> = {
  a: "#FF5733",
  b: "#FFC300",
  c: "#DAF7A6",
  d: "#C70039",
  e: "#900C3F",
  f: "#581845",
  g: "#FF5733",
  h: "#FFC300",
  i: "#DAF7A6",
  j: "#C70039",
  k: "#900C3F",
  l: "#581845",
  m: "#FF5733",
  n: "#FFC300",
  o: "#DAF7A6",
  p: "#C70039",
  q: "#900C3F",
  r: "#581845",
  s: "#FF5733",
  t: "#FFC300",
  u: "#DAF7A6",
  v: "#C70039",
  w: "#900C3F",
  x: "#581845",
  y: "#FF5733",
  z: "#FFC300",
};

const avatarVariants = cva(
  "inline-flex w-12 h-12 rounded-full select-none items-center justify-center overflow-hidden align-middle",
  {
    variants: {
      size: {
        sm: "w-10 h-10",
        md: "w-12 h-12",
        lg: "w-14 h-14",
        xl: "w-24 h-24",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface AvatarProps
  extends RadixAvatar.AvatarImageProps,
    VariantProps<typeof avatarVariants> {
  name?: string;
}

const Avatar = (props: AvatarProps) => {
  const { className, name, size, ...rest } = props;

  const fallback = name?.toLowerCase().split(" ");

  const color = fallback ? letterColors[fallback[0][0]] : "white";

  return (
    <RadixAvatar.Root className={clsm(avatarVariants({ className, size }))}>
      <RadixAvatar.Image
        className={clsm("w-full h-full object-cover rounded-full", className)}
        {...rest}
      />
      {fallback ? (
        <RadixAvatar.Fallback
          className="text-black uppercase leading-1 flex h-full w-full items-center justify-center text-lg font-medium"
          delayMs={600}
          style={{ backgroundColor: color }}
        >
          {fallback[0][0]}
          {fallback.length > 1 ? fallback[1][0] : null}
        </RadixAvatar.Fallback>
      ) : null}
    </RadixAvatar.Root>
  );
};

export default Avatar;
