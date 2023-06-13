import { isEmpty } from "lodash";
import { MuiBox } from "../../atoms";

import ListContent from "./ListContent";
import ListThumbnail from "./ListThumbnail";

const ListSection = ({ listItem }) => {
  if (!isEmpty(listItem)) {
    const { headline, standfirst, date, byline, link, id, image } = listItem;
    return (
      <MuiBox className="flex-row" key={id}>
        <ListThumbnail image={image} />
        <ListContent
          headline={headline}
          standfirst={standfirst}
          date={date}
          byline={byline}
          link={link}
        />
      </MuiBox>
    );
  } else {
    return <></>;
  }
};

export default ListSection;
