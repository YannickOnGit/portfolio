import logo from '../assets/images/logo-mark.svg';  // Import the logo from src/assets

const LogoMark = ({   
  alt = 'Adaptiv Networks Logo',
  width = '150',
  height = '',
 }) => {
  return (
    <img 
      src={logo}  // Use the imported logo
      alt={alt} 
      width={width}
      height={height}
    />
  );
};

export default LogoMark;