import CardBuilder from "./CardBuilder";

const isDefined = (string) =>  string != null || string != undefined;

let cardArray = [];

//for each row create object and push it into the array

const userCardMaker = ({
  name,
  profession,
  imagePath,
  phoneNumber,
  roomNumber,
  webUrl,
  email,
  description,
  readMoreLink,
}) => {
  const card = CardBuilder();

  if (isDefined(name)) card.withName(name);
  if (isDefined(profession)) card.withProfession(profession);
  if (isDefined(imagePath)) card.withImagePath(imagePath);
  if (isDefined(phoneNumber)) card.withPhoneNumber(phoneNumber);
  if (isDefined(roomNumber)) card.withRoomNumber(roomNumber);
  if (isDefined(webUrl)) card.withName(webUrl);
  if (isDefined(email)) card.withEmail(email);
  if (isDefined(description)) card.withDescription(description);
  if (isDefined(readMoreLink)) card.withReadMoreLink(readMoreLink);

  cardArray.push(card.build());
 
};

export {userCardMaker,cardArray};
