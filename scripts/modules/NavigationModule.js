const NavigationModule = (function () {
  const nagivationLinks = [];

  getNagivationLinks = () => nagivationLinks;

  return { getNagivationLinks };
})();

export default NavigationModule;
