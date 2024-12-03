import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva("border h-12 rounded-full px-6 font-medium", {
    variants: {
        variant: {
            primary: "bg-neutral-950 text-white border-green-600",
            secondary: " text-neutral-850 bg-lime-500 text-black border-black",
            hero: "bg-lime-500 border-black text-black"
        },
        size: {
            sm: "h-10",
        },
    },
});

export default function Button(
    props: {
        variant: "primary" | "secondary" | "hero";
        size?: "sm";
    } & ButtonHTMLAttributes<HTMLButtonElement>
) {
    const { variant, className, size, ...otherProps } = props;
    return (
        <button
            className={classes({
                variant: variant,
                size,
                className: className,
            })}
            {...otherProps}
        />
    );
}
