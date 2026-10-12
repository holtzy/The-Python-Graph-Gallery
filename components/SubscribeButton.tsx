import KitForm from './KitForm';

// Newsletter ("Dataviz Universe") subscription form
export default function SubscribeButton({ className }: { className?: string }) {
  return <KitForm form="newsletter" buttonLabel="Subscribe" className={className} />;
}
