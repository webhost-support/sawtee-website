import { cn } from '@/lib/utils';
import { useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import InputError from '../Backend/InputError';
import { Input } from '../ui/input';
import { AnimatedSubscribeButton } from './AnimatedSubscribeButton';

export default function NewsletterCallout() {
  return (
    <div className="rounded-lg bg-sky-100 px-6 py-6 dark:bg-sky-900 md:px-12 md:py-12 lg:px-16 lg:py-16 xl:flex xl:items-center">
      <div className="xl:w-0 xl:flex-1">
        <h2 className="text-2xl font-extrabold leading-8 tracking-tight text-sky-700 dark:text-sky-300/80 sm:text-3xl sm:leading-9">
          Receive the latest publication releases, events and monthly
          newsletter.
        </h2>
        <p className="mt-3 max-w-3xl text-lg leading-6 text-sky-700/90 dark:text-sky-400/80">
          Do you want to get notified? Sign up for our newsletter and you'll be
          among the first to find out about new publication releases, events and
          monthly newsletter.
        </p>
      </div>
      <div className="mt-8 sm:w-full sm:max-w-md xl:ml-8 xl:mt-0">
        <div className="mt-3 sm:ml-3 sm:mt-0 sm:flex-shrink-0">
          <SubscribeForm />
        </div>
        <p className="mt-3 text-sm leading-5 text-sky-700/90 dark:text-sky-400/80">
          We care about the protection of your data. Your data is safe and never
          used for commercial purposes.
        </p>
        {/* <p class="text-sm leading-5 text-indigo-200">
          In order to receive the notifications, you must give permission
          sufficient to your web browser.
        </p> */}
      </div>
    </div>
  );
}

export const SubscribeForm = ({ inputStyles, buttonStyles, ...rest }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
  });

  const [message, setMessage] = useState(null);
  const [subscribed, setSubscribed] = useState(false);
  const [borderColor, setBorderColor] = useState('border-sky-500');
  useEffect(() => {
    if (subscribed) {
      setMessage(`${data.email} has subscribed successfully.`);
      setTimeout(() => {
        setMessage(null) && setSubscribed(false);
      }, 5000);
      reset('email');
    }
  }, [subscribed]);

  const submit = e => {
    e.preventDefault();
    post(route('subscription.store'), {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => {
        setSubscribed(true);
        setTimeout(() => {
          setMessage(null) && setSubscribed(false);
        }, 5000);
        reset('email');
      },
      onError: errors => {
        setBorderColor('border-red-500');
        setTimeout(() => {
          setMessage(null);
          setBorderColor('border-sky-500');
        }, 5000);
        reset('email');
        setMessage(`Error: ${errors.email}.`);
      },
    });
  };

  return (
    <form
      className="mt-5 flex w-full flex-col gap-4"
      onSubmit={submit}
      {...rest}
    >
      <Input
        type="email"
        id="email"
        name="email"
        required
        className={cn(
          `h-12 p-3 text-sm text-primary dark:border-sky-300 ${borderColor}`,
          inputStyles
        )}
        placeholder="Enter your email address"
        value={data.email}
        onChange={e => {
          setData('email', e.target.value);
        }}
      />
      {errors.email && <InputError mt={2}>{errors.email}</InputError>}

      <AnimatedSubscribeButton
        className={cn(
          `w-full dark:text-secondary-foreground ${processing && 'opacity-50'}`,
          buttonStyles
        )}
        isSubscribed={subscribed}
        isLoading={processing}  
        initialText={'Subscribe '}
        changeText={'Subscribed '}
      />

      {message && (
        <p
          className={`text-sm ${errors.email ? 'text-red-500' : 'text-green-500'}`}
        >
          {message}
        </p>
      )}
    </form>
  );
};
