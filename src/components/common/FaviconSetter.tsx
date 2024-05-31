import { useEffect, useState } from "react";
import { useThemeDetector } from "src/lib/themeDetector";

export interface FaviconSetterProps {
  lightPath: string;
  darkPath: string;
};

export const FaviconSetter = ({ lightPath, darkPath }: FaviconSetterProps) => {
  const isDarkTheme = useThemeDetector();
  
  useEffect(() => {
    // https://stackoverflow.com/questions/260857/changing-website-favicon-dynamically
    const head = document.head || document.getElementsByTagName('head')[0];

    var link = document.createElement('link'),
      oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = isDarkTheme ? darkPath : lightPath;
    if (oldLink) head.removeChild(oldLink);
    head.appendChild(link);
  }, [isDarkTheme]);

  return (<></>);
};
