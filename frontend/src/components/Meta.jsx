import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To Swadeshi',
  description: 'We sell the best handmade local products at affordable price',
  keywords: 'Handcrafts, apparel and fashion',
};

export default Meta;
