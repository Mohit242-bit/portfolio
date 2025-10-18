import "./StarBorder.css";
import { ReactNode, ComponentProps } from "react";

interface StarBorderProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  children: ReactNode;
  style?: ComponentProps<'div'>['style'];
  [key: string]: any;
}

const StarBorder = ({
  as: Component = "button",
  className = "",
  color = "white",
  speed = "12s",
  thickness = 1,
  children,
  ...rest
}: StarBorderProps) => {
  return (
    <Component 
      className={`star-border-container ${className}`} 
      style={{
        padding: `${thickness}px 0`,
        ...rest.style
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default StarBorder;
