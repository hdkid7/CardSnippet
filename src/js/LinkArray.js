import LinkBuilder from "./LinkBuilder";

const isDefined = (string) =>  string != null || string != undefined;

let linkArray = [];

//for each row create object and push it into the array

const linkMaker = ({
  linkName,
  linkContent
}) => {
  const link = LinkBuilder();

  if (isDefined(linkName)) link.withLinkName(linkName);
  if (isDefined(linkContent)) link.withLinkContent(linkContent);
 

  linkArray.push(link.build());
 
};

export {linkMaker,linkArray};
