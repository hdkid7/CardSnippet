//Make object containing all the information
//Go over object destructuring
//builder pattern

const CardBuilder = () => {
  let name = "";
  let profession = "";
  let imagePath = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fd2%2FQuestion_mark.svg%2F1920px-Question_mark.svg.png&f=1&nofb=1";
  let phoneNumber = "";
  let roomNumber = "";
  let webUrl = "";
  let email = "";
  let description = "";
  let readMoreLink = "";
  return {
    withName(value) {
      name = value;
      return this;
    },
    withProfession(value) {
      profession = value;
      return this;
    },
    withImagePath(value) {
      imagePath = value;
      return this;
    },
    withPhoneNumber(value) {
      phoneNumber = value;
      return this;
    },
    withRoomNumber(value) {
      roomNumber = value;
      return this;
    },
    withWebUrl(value) {
      webUrl = value;
      return this;
    },
    withEmail(value) {
      email = value;
      return this;
    },
    withDescription(value) {
      description = value;
      return this;
    },
    withReadMoreLink(value) {
      readMoreLink = value;
      return this;
    },
    
    build() {
      return {
        name,
        profession,
        imagePath,
        phoneNumber,
        roomNumber,
        webUrl,
        email,
        description,
        readMoreLink,
      };
    },
  };
};



export default CardBuilder;
