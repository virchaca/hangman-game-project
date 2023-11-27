import '../styles/layout/_loading.scss';

const Loading = ({ isLoading }) => {
  if (isLoading) {
    return <span className="loading" />;
  } else {
    return null;
  }
};

export default Loading;
