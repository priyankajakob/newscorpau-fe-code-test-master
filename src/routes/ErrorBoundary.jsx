import { Error, Content } from '../components/molecules';
import { commonConstants } from '../constants';

const ErrorBoundary = () => {
  return (
    <Content>
      <Error content={commonConstants.PAGE_404_ERROR} />
    </Content>
  );
};

export default ErrorBoundary;
