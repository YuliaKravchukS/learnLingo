import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <BallTriangle
      height={80}
      width={80}
      radius={4}
      color='#F4C550'
      ariaLabel='ball-triangle-loading'
      wrapperStyle={{ margin: `0 auto` }}
      wrapperClass=''
      visible={true}
    />
  );
};

export default Loader;
