import type { IcQuestionDownProps } from './types';

export function IcQuestionDown(props: IcQuestionDownProps): JSX.Element {
  const { width, height, color } = {
    width: 245,
    height: 70,
    color: '#fff',
    ...props,
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 0C8.9543 0 0 8.95431 0 20V36C0 47.0457 8.95431 56 20 56H207.84L215.634 69.5C216.019 70.1667 216.981 70.1667 217.366 69.5L225.161 55.9994C236.132 55.9131 245 46.9921 245 36V20C245 8.95431 236.046 0 225 0H20Z"
        fill={color}
      />
    </svg>
  );
}
