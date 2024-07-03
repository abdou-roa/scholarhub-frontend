import { forwardRef, ReactElement } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

type MainButtonProps = {
  text: string;
  vr: string; 
};

const MainButton = forwardRef<HTMLButtonElement, MainButtonProps>(
  (
    {
      text,
      vr
    },
    ref
  ) => {
    return (
        <Button variant={vr}>{text}</Button>
    )
  }
);

// Assigned display name
MainButton.displayName = "MainButton";

export default MainButton;