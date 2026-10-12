import KitForm from './KitForm';

// Form to receive all the cheatsheets in a single PDF by email
export default function SubscribeButtonCheatSheet({ className }: { className?: string }) {
  return <KitForm form="cheatSheet" buttonLabel="Get the cheatsheets" className={className} />;
}
