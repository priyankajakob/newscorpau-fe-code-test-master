import { MuiBox, MuiTypography } from "../../atoms";

const ListHeadine = ({ headline, articleLink }) => {
  return (
    <MuiTypography variant="h5" sx={{ lineHeight: "24px", fontWeight: "bold" }}>
      <a href={articleLink.href} title={articleLink.title}>
        <span className="article-headline">{headline}</span>
      </a>
    </MuiTypography>
  );
};

const ListStandfirst = ({ standfirst }) => {
  return (
    <div
      className="article-standfirst"
      dangerouslySetInnerHTML={{
        __html: standfirst,
      }}
    />
  );
};

const ListFooter = ({ byline, date }) => {
  return (
    <p>
      <MuiTypography variant="body2" sx={{ color: "grey" }}>
        <em>{byline}</em>
        {byline && <span>&nbsp;|&nbsp;</span>}
        {date}
      </MuiTypography>
    </p>
  );
};

const ListContent = ({ headline, standfirst, date, byline, link }) => {
  return (
    <MuiBox>
      <ListHeadine headline={headline} articleLink={link} />

      {standfirst && <ListStandfirst standfirst={standfirst} />}

      <ListFooter byline={byline} date={date} />
    </MuiBox>
  );
};

export default ListContent;
