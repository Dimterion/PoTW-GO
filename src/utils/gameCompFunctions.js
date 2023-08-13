// Scroll to top function to use on btn click.
export const scrollToTop = (elementId) => {
  document.getElementById(elementId).scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

// Game conditions check.
export function gameConditions(option, setConditions) {
  option.condition &&
    setConditions((prevConditions) => {
      return [...prevConditions, option.condition];
    });
}
