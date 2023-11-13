import { useState } from "react";
import { ColorPicker } from "@formbricks/ui/ColorPicker";
import { Label } from "@formbricks/ui/Label";
import { TSurvey } from "@formbricks/types/surveys";

interface ColorSurveyBgBgProps {
  localSurvey?: TSurvey;
  handleBgChange: (bg: string, bgType: string) => void;
  colours: string[];
}

export default function ColorSurveyBg({ localSurvey, handleBgChange, colours }: ColorSurveyBgBgProps) {
  const [color, setColor] = useState(localSurvey?.surveyBackground?.bg || "#ffff");

  const handleBg = (x: string) => {
    setColor(x);
    handleBgChange(x, "color");
  };
  return (
    <div>
      <div className="w-full max-w-xs py-2">
        <ColorPicker color={color} onChange={handleBg} />
      </div>
      <div className="grid grid-cols-10 gap-4">
        {colours.map((x) => {
          return (
            <div
              className={`h-16 w-16 cursor-pointer rounded-lg ${
                color === x ? "border-4 border-slate-500" : ""
              }`}
              key={x}
              style={{ backgroundColor: `${x}` }}
              onClick={() => handleBg(x)}></div>
          );
        })}
      </div>
    </div>
  );
}
