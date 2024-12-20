const splitText = (word) => {
  return word?.split("").map((char, index) => (
    <span key={index} className="span">
      {char}
    </span>
  ));
};

export default splitText;
