type ThemeContext = {
  styles: {
    backgroundColor: string;
    color: string;
  };

  handler: {
    onColorChanges: () => void;
  };
};
