import { useState } from "react";
import { MuiBox, MuiTypography } from "../../atoms";
import "./index.scss";

const ListHeadine = ({ headline, articleLink }) => {
  return (
    <MuiTypography variant="h5">
      <a href={articleLink.href} title={articleLink.title}>
        <span className="list-headline">{headline}</span>
      </a>
    </MuiTypography>
  );
};

const ListStandfirst = ({ standfirst }) => {
  return (
    <div
      className="list-standfirst"
      dangerouslySetInnerHTML={{
        __html: standfirst,
      }}
    />
  );
};

const ListIntro = ({ intro }) => {
  return (
    <div
      className="list-intro"
      dangerouslySetInnerHTML={{
        __html: intro,
      }}
    />
  );
};

const ListFooter = ({ byline, date }) => {
  return (
    <MuiBox className="list-footer">
      <MuiTypography variant="body2">
        <em>{byline}</em>
        {byline && <span>&nbsp;|&nbsp;</span>}
        <span>{date}</span>
      </MuiTypography>
    </MuiBox>
  );
};

const ListContent = ({ headline, standfirst, date, byline, link, intro }) => {
  const [toggleIntro, setToggleIntro] = useState(false);

  const handleIntroToggle = () => {
    setToggleIntro(!toggleIntro);
  };

  return (
    <MuiBox>
      <ListHeadine headline={headline} articleLink={link} />

      {standfirst && <ListStandfirst standfirst={standfirst} />}

      {/* TODO : Use MUI Accordion */}
      {intro && (
        <button className="list-intro-btn" onClick={handleIntroToggle}>
          {toggleIntro ? "...read less.." : "...read more.."}
        </button>
      )}
      {intro && toggleIntro && (
        <MuiBox className="list-intro">
          <ListIntro intro={intro} />
        </MuiBox>
      )}

      <ListFooter byline={byline} date={date} />
    </MuiBox>
  );
};

export default ListContent;
