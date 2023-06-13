import { MuiBox, MuiTypography } from '../../atoms';
import ListSection from './ListSection';
import { commonConstants } from '../../../constants';
import './index.scss';

const List = ({ list, loading, error }) => {
  return (
    <MuiBox>
      {/* Todo: Add Pagination */}
      <MuiTypography variant={"h2"}> </MuiTypography>
      <MuiBox>
        {loading && <p>{commonConstants.LOADING}</p>}
        {error && <p>{commonConstants.NETWORK_ERROR}</p>}
        {!error &&
          !loading &&
          list.map((listItem,index) => {
            //TODO: Remove this console.log
            console.log(listItem);
            return <ListSection key={index} listItem={listItem} />;
          })}
      </MuiBox>
    </MuiBox>
  );
};

export default List;
