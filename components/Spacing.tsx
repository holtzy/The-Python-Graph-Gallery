export default function Spacing({ size = 'large' }: { size?: 'small' | 'large' }) {
  return <div className={size === 'large' ? 'h-24 sm:h-36' : 'h-12'} />;
}
