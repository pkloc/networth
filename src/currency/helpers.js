function getPrefix(currency) {
  switch (currency) {
    case "CNY":
    case "JPY":
      return "¥ ";
    case "INR":
      return "₹ ";
    case "EUR":
      return "€ ";
    case "GBP":
      return "£ ";
    case "PHP":
      return "₱ ";
    case "PLN":
      return "zł ";
    case "RUB":
      return "₽ ";
    default:
      return "$ ";
  }
}

function getThousandGroupStyle(currency) {
  switch (currency) {
    case "CNY":
      return "wan";
    case "INR":
      return "lakh";
    default:
      return "thousand";
  }
}

export default {
  getPrefix: getPrefix,
  getThousandGroupStyle: getThousandGroupStyle
};
