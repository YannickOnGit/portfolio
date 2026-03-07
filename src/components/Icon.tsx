const Icon = ({ name = '', size = 24, color = 'currentColor', strokeColor = '', className = '' }) => {
  return (
    <svg
      className={className}
      width={size}  // Size is fixed
      height={size} // Size is fixed
      fill={color}
      stroke={strokeColor || 'currentColor'} // Default stroke to currentColor if no strokeColor is provided
    >
      <use href={`/React-Tailwind4.github.io/icon-sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;