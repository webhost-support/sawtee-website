import { MailBoxIcon } from './icons';
import { SubscribeForm } from './NewsletterCallout';

const SubscriptionCard = ({
  children,
  showIcon = true,
  showChildren = false,
  showCheckbox = false,
  fontSize = { base: 'md', lg: 'lg' },
  headingText = 'Subscribe to our Newsletter',
  subText,
  consentText = 'I agree receiving emails from SAWTEE',
}) => {
  return (
    <div className="relative w-full text-center">
      {showIcon && (
        <MailBoxIcon className="mx-auto h-24 w-24 text-slate-600 dark:text-slate-300" />
      )}
      <h4 className="text-2xl font-bold uppercase text-slate-800 dark:text-slate-300">
        {headingText}
      </h4>
      {subText && <p className="mt-2 text-sm text-theme-500">{subText}</p>}

      {showChildren && <div>{children}</div>}

      <SubscribeForm />
    </div>
  );
};

export default SubscriptionCard;
