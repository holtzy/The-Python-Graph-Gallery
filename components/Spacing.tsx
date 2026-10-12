export default function Spacing({ size = 'large' }: { size?: 'small' | 'large' }) {
  return <div className={size === 'large' ? 'h-16 sm:h-20' : 'h-8'} />;
}
